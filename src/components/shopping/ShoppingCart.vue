<template>
  <div>
    <v-btn
      outlined
      x-large
      class="pa-2 zIndex5"
      to="/cart"
      @mouseover="hover = true"
    >
      <v-icon
        class="pr-2"
        x-large
      >
        shopping_cart
      </v-icon>
      <div
        v-if="countOfProducts < 10"
        class="count-of-products count-of-products-10"
      >
        {{ countOfProducts }}
      </div>
      <div
        v-if="countOfProducts < 100 && countOfProducts >= 10"
        class="count-of-products count-of-products-100"
      >
        {{ countOfProducts }}
      </div>
      <div
        v-if="countOfProducts < 1000 && countOfProducts >= 100"
        class="count-of-products count-of-products-1000"
      >
        {{ countOfProducts }}
      </div>
      <span
        v-if="countOfProducts > 0"
        class=""
      >{{ formatPrice }}</span>
      <span v-else>cart</span>
    </v-btn>

    <v-card
      v-if="hover"
      style="position:absolute; right: 1%; width:600px; max-width:500px !important;"
      class="zIndex5"
      elevation="2"
    >
      <div
        v-for="(product, index) in inCart"
        :key="index"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="3">
            <!-- IMAGE -->
            <img
              v-if="product.img"
              style="width:100%"
              class="pa-3"
              :src="getImage(product.img)"
            >
          </v-col>
          <!-- PRICE -->
          <v-col cols="3">
            {{ getPrice(product.price) }}
            <span v-if="product.quantity>1">({{ product.quantity }})</span>
          </v-col>
          <!-- NAME -->
          <v-col cols="4">
            {{ product.modelName }}
          </v-col>
          <!-- DELETE -->
          <v-col cols="2">
            <v-btn
              icon
              color="red"
              @click="removeFromCart(index)"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <div
      v-if="hover"
      class="overlay"
      @mouseover="hover = false"
    />
  </div>
</template>

<script>
import { priceMethods } from '../../mixins.js'
import { mapActions } from 'vuex'

export default {
  name: 'ShoppingCart',
  mixins: [priceMethods],
  data () {
    return {
      hover: false
    }
  },
  computed: {
    inCart () {
      return this.$store.state.shoppingCart.inCart
    },
    totalAmount () {
      return this.$store.getters.total
    },
    countOfProducts () {
      return this.$store.getters.cartContents ? this.$store.getters.cartContents.length : ''
    },
    formatPrice: {
      get () {
        return priceMethods.methods.formatPrice(this.totalAmount)
      },
      set () {}
    }
  },
  methods: {
    ...mapActions(['removeFromCart']),
    getImage (path) {
      var images = require.context('@/assets/', false, /\.jpg$/)
      let productImage = ''
      try {
        productImage = images('./' + path)
      } catch (error) {
        productImage = images('./book.jpg')
      }
      return productImage
    },
    getPrice (price) {
      return priceMethods.methods.formatPrice(price)
    }
  }

}
</script>
<style scope>
  .zIndex5{
    z-index:5;
  }
  .count-of-products{
    color:white;
    position: absolute;
    text-align: center;
    border-radius: 14px;
    line-height: 12px;
    min-width: 12px;
    font-size: 11px;
    padding: 3px;
    font-weight: 400;
  }
  .count-of-products-10{
    left: 14px;
    bottom: 16px;
  }
  .count-of-products-100{
    left: 9px;
    bottom: 16px;
  }
  .count-of-products-1000{
    left: 7px;
    bottom: 16px;
    font-size: 10px;
  }

  .overlay {
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  }
</style>
