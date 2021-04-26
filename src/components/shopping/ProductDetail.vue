<template>
  <v-row class="mt-3">
    <v-col
      cols="5"
      class="ml-6 pr-1"
    >
      <!-- IMAGE -->
      <v-card>
        <div class="img-wrapper">
          <img
            class="img"
            :src="imagePath"
          >
        </div>
      </v-card>
    </v-col>

    <!-- POPIS + ACTIONS -->
    <v-col
      class="pl-1 pr-8"
    >
      <v-card class="pa-6">
        <div v-if="product">
          <v-row>
            <v-card-title>
              {{ product.modelName }}
            </v-card-title>

            <v-spacer />
            <!-- RATING -->
            <v-card-title>
              <v-rating
                :value="product.rating"
                color="amber"
                dense
                half-increments
                readonly
                size="16"
              />
              <div class="grey--text ml-2 mr-6">
                {{ product.rating }} (0)
              </div>
              <!-- FAVORITE -->
              <v-btn
                icon
                :color="favorite? 'red' : ''"
                class="mr-2"
                @click="setFavorite"
              >
                <v-icon>favorite</v-icon>
              </v-btn>
              <!-- COMPARE -->
              <v-btn
                icon
                :color="toCompare? 'blue' : ''"
                @click="setToCompare"
              >
                <v-icon>fas fa-balance-scale-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-row>
          <!-- DESCRIPTION-->
          <v-card-text>
            {{ product.description }}
          </v-card-text>
        </div>

        <v-divider class="mx-4" />
        <v-card-actions>
          <v-card-title
            v-if="product"
            class="price"
          >
            {{ formatPrice }}
          </v-card-title>
          <v-spacer />
          <v-btn
            tile
            x-large
            color="success"
            class="mr-2"
            @click="addProductToCart(product)"
          >
            <v-icon class="mr-2">
              shopping_cart
            </v-icon>
            Buy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { firestore } from '../../firebase'
import { mapActions, mapGetters } from 'vuex'
import { priceMethods } from '../../mixins.js'

export default {
  name: 'ProductDetail',
  mixins: [priceMethods],
  props: {
    category: { type: String, default: undefined },
    subCategory: { type: String, default: undefined },
    productId: { type: String, default: undefined }
  },
  data () {
    return {
      product: undefined,
      favorite: false,
      toCompare: false
    }
  },
  computed: {
    imagePath () {
      var images = require.context('@/assets/', false, /\.jpg$/)
      let productImage = ''
      try {
        productImage = images(`./${this.product.img}`)
      } catch (error) {
        productImage = images('./book.jpg')
      }
      return productImage
    },
    formatPrice: {
      get () {
        return priceMethods.methods.formatPrice(this.product.price)
      },
      set () {}
    }

  },
  mounted () {
    this.getProduct()
  },
  methods: {
    ...mapActions(['addToCart']),
    ...mapGetters(['cartContents']),
    getProduct () {
      if (this.$route.params.id) {
        firestore.collection(this.category).doc(this.productId).get().then((doc) => {
          if (doc.exists) {
            this.product = doc.data()
          } else {
            // doc.data() will be undefined in this case
            console.log('No such product with ID -> document!')
          }
        }).catch((error) => {
          console.log('Error getting detail product document:', error)
        })
      }
    },
    setFavorite () {
      this.favorite = !this.favorite
    },
    setToCompare () {
      this.toCompare = !this.toCompare
    },
    addProductToCart (product) {
      if (product.lenght !== '') {
        this.addToCart(product)
      }
    }
  }

}
</script>

<style scope>
  .img-wrapper{
    display:flex;
    height:500px !important;
    padding:10px 30px 10px 30px !important;
    align-items: center;
    justify-content: center;
  }
  .img{
    min-width: auto !important;
    height: 100% !important;
  }
</style>
