<template>
  <v-btn
    outlined
    large
    class="pa-2"
    to="/cart"
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
</template>

<script>
import { priceMethods } from '../../mixins.js'

export default {
  name: 'ShoppingCart',
  mixins: [priceMethods],
  data () {
    return {}
  },
  computed: {

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
  }
}
</script>
  <style scope>
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
  </style>
