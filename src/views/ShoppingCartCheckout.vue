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
      <v-spacer />
      <v-row
        v-for="(product, index) in cartContents"
        :key="index"
        class="pb-1"
        style=" "
      >
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

            :src="imagePath"
          />
        </v-col>
        <!-- NAME -->
        <v-col>
          <span v-if="product">{{ product.brand }} - {{ product.modelName }}</span>
          <span v-else>&ndash;</span>
        </v-col>
        <!-- QUANTITY -->
        <v-col
          cols="1"
          style="display:inline-block"
        >
          <div style="position:relative">
            <v-text-field
              v-model="product.quantity"
              type="text"
              outlined
              dense
              label="Quantity"
              class="centered-input"
              style="max-width:75px; display:inline-block"
            />

            <div
              class="arrow_drop arrow_drop_up"
              @click="increment(index)"
            />
            <div
              class="arrow_drop arrow_drop_down"
              @click="decrement(index)"
            />
          </div>
        </v-col>
        <!-- PRICE -->
        <v-col cols="2">
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
      </v-row>

      <v-spacer />
    </v-card-text>

    <v-divider class="mb-3" />
    <!-- SUMMARY -->
    <v-row>
      <v-col cols="1" />
      <v-col />
      <v-col />
      <v-col>
        <span
          v-if="total"
          class="totalPrice text-lg-h6"
        >{{ formatPrice(total) }}</span>
        <span v-else>&ndash;</span>
      </v-col>
      <v-col>
        <v-btn
          color="success"
          icon-text
        >
          Continue
          <v-icon>
            navigate_next
          </v-icon>
        </v-btn>
      </v-col>
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
    ...mapGetters(['cartContents', 'total']),
    imagePath () {
      var images = require.context('@/assets/', false, /\.jpg$/)
      let productImage = ''
      try {
        productImage = images(`./${this.product.img}`)
      } catch (error) {
        productImage = images('./book.jpg')
      }
      return productImage
    }
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

    increment (index) {
      this.cartContents[index].quantity = parseInt(this.cartContents[index].quantity) + 1
    },
    decrement (index) {
      this.cartContents[index].quantity = (parseInt(this.cartContents[index].quantity) <= 1) ? 1 : parseInt(this.cartContents[index].quantity) - 1
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

.arrow_drop{
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
  border-style: solid;
}
.arrow_drop_down {
  top: 22px;
  left: 81px;
  border-width: 15px 8px 0 8px;
  border-color: #00000061 transparent transparent transparent;
}
.arrow_drop_up{
  top: 2px;
  right: 90px;
  border-width: 0 8px 15px 8px;
  border-color: transparent transparent #00000061 transparent;
}

.arrow_drop_up:hover{
  border-color: transparent transparent #00FF00 transparent;
}
.arrow_drop_down:hover{
  border-color: #0000FF transparent transparent transparent;
}
</style>
