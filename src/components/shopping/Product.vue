<template>
  <v-card
    max-width="310"
    class="product-card"
  >
    <!-- IMAGE
     :to="'/detail/1'" -->
    <router-link :to="{ name: 'detail', params: { subCategory: $route.params.subCategory, category: category, id: productData.id} }">
      <div style="height:250px !important; padding:10px 30px 10px 30px !important;">
        <v-img
          v-if="productData.img"
          :src="imagePath"
        />
      </div>
    </router-link>

    <!-- RATING FAVOR4ITE LIBRA -->
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-btn
          icon
          :color="favorite? 'red' : ''"
          @click="setFavorite"
        >
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn
          icon
          :color="toCompare? 'blue' : ''"
          @click="setToCompare"
        >
          <v-icon>fas fa-balance-scale-right</v-icon>
        </v-btn>
        <v-spacer />
        <v-rating
          :value="productData.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="16"
        />

        <div class="grey--text ml-2">
          {{ productData.rating }} (0)
        </div>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4" />

    <!-- NADPIS PRODUKTU -->
    <div style="height:275px;">
      <v-card-title
        v-if="productData.brand || productData.modelName"
        :to="'/electronics/televisions/'+productData.id"
        class="pt-2 pb-2 brand-font"
      >
        {{ productData.brand }}
        {{ productData.modelName }}
      </v-card-title>
      <!-- POPIS PRODUKTU -->
      <v-card-text>
        <div class="product-text-height">
          {{ productData.description }}
        </div>
      </v-card-text>
    </div>
    <v-divider class="mx-4" />
    <v-card-actions>
      <v-card-title
        v-if="productData.price"
        class="price"
      >
        {{ formatPrice }}
      </v-card-title>
      <v-spacer />
      <v-btn
        tile
        color="success"
        class="mr-2"
        @click="addProductToCart(productData)"
      >
        <v-icon class="mr-2">
          shopping_cart
        </v-icon>
        Buy
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { priceMethods } from '../../mixins.js'

export default {
  name: 'Product',
  mixins: [priceMethods],
  props: {
    productData: { type: Object, default: null },
    category: { type: String, default: undefined }
  },
  data () {
    return {
      favorite: false,
      toCompare: false
    }
  },
  computed: {
    imagePath () {
      var images = require.context('@/assets/', false, /\.jpg$/)
      let productImage = ''
      try {
        productImage = images(`./${this.productData.img}`)
      } catch (error) {
        productImage = images('./book.jpg')
      }
      return productImage
    },
    formatPrice: {
      get () {
        return priceMethods.methods.formatPrice(this.productData.price)
      },
      set () {}
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    ...mapGetters(['cartContents']),

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
.product-text-height{
  height:150px !important;
  overflow: hidden;
}
.product-card{
  display: inline-block;
}
.price{
  color:rgb(184, 0, 0);
}
.brand-font{
  font-size: 1.10rem;
}
</style>
