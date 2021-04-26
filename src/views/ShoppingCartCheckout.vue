<template>
  <v-card class="cart">
    <v-card-title class="justify-center">
      <h1 class="display-1 mt-4">
        Cart
      </h1>
      <v-spacer />
      <v-stepper
        non-linear
        style="min-width:1000px;"
      >
        <v-stepper-header>
          <v-stepper-step
            editable
            step="1"
          >
            Cart
          </v-stepper-step>

          <v-divider />

          <v-stepper-step
            editable
            step="2"
          >
            Transport
          </v-stepper-step>

          <v-divider />

          <v-stepper-step
            step="3"
            editable
          >
            Summary
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
      <v-spacer />
    </v-card-title>

    <v-divider />

    <v-card-text>
      <v-row
        v-for="(product, index) in cartContents"
        :key="index"
        class="pb-1 pl-10"
        align="center"
        justify="center"
      >
        <v-col cols="3" />
        <!-- IMAGE -->
        <v-col
          cols="1"
          class="pa-0"
        >
          <!-- IMAGE -->
          <v-img
            v-if="product.img"
            height="75"
            width="75"
            :src="getImage(product.img)"
          />
        </v-col>
        <!-- NAME -->
        <v-col cols="2">
          <span v-if="product">{{ product.brand }} - {{ product.modelName }}</span>
          <span v-else>&ndash;</span>
        </v-col>
        <!-- QUANTITY -->
        <v-col
          cols="1"
        >
          <v-text-field
            v-model="product.quantity"
            type="number"
            min="1"
            outlined
            dense
            label="Quantity"
            class="centered-input pa-0"
            style="max-width:75px; position:relative; top:5px;"
          />
        </v-col>
        <!-- PRICE -->
        <v-col cols="1">
          <span
            v-if="product"
            class="text-lg-h6"
          >{{ formatPrice(product.price) }}</span>
          <span v-else>&ndash;</span>
        </v-col>
        <!-- DELETE -->
        <v-col cols="1">
          <v-btn
            icon
            color="red"
            @click="removeProduct(index)"
          >
            <v-icon>clear</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="3" />
      </v-row>
    </v-card-text>

    <v-divider class="mb-3" />
    <!-- SUMMARY -->
    <v-row>
      <v-col cols="3" />
      <v-col
        cols="1"
      />
      <v-col cols="2" />
      <v-col cols="1" />
      <v-col cols="1">
        <span
          v-if="total"
          class="totalPrice text-lg-h6"
        >{{ formatPrice(total) }}</span>
        <span v-else>&ndash;</span>
      </v-col>
      <v-col cols="1">
        <v-btn
          color="success"
          icon-text
          right
        >
          Continue
          <v-icon>
            navigate_next
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3" />
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { priceMethods } from '../mixins.js'

export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['cartContents', 'total'])
  },
  methods: {
    ...mapActions(['removeFromCart']),
    formatPrice (price) {
      if (price) {
        return priceMethods.methods.formatPrice(price)
      }
    },
    removeProduct (product) {
      this.removeFromCart(product)
    },
    getImage (path) {
      var images = require.context('@/assets/', false, /\.jpg$/)
      let productImage = ''
      try {
        productImage = images('./' + path)
      } catch (error) {
        productImage = images('./book.jpg')
      }
      return productImage
    }
  }

}
</script>
<style scoped>
.totalPrice{
  color:rgb(184, 0, 0);
}
.centered-input >>> input {
  text-align: center
}
.v-text-field__details{
  margin-bottom: 0px !important;
}
.v-input__control{
  height:45px !important;
}
</style>
