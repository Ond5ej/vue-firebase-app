<template>
  <v-container
    align="center"
    class="mt-5"
  >
    <v-row
      align="center"
      justify="center"
    >
      <Product
        v-for="(product, index) of products"
        :key="index"
        :product-data="product"
      />
    </v-row>
  </v-container>
</template>

<script>
import Product from './Product'
export default {
  name: 'TableOfProducts',

  components: {
    Product
  },

  data: () => ({
    products: [
      { product: 1, price: 10000, name: 'Počítač' },
      { product: 2, price: 20000, name: 'Notebook' },
      { product: 3, price: 18000, name: 'Televize' },
      { product: 4, price: 30000, name: 'Server' },
      { product: 5, price: 1000, name: 'Operační paměti' },
      { product: 6, price: 10000, name: 'Procesor' },
      { product: 7, price: 21990, name: 'Grafická karta' },
      { product: 8, price: 19990, name: 'Počítač' },
      { product: 9, price: 30000, name: 'Počítač' },
      { product: 10, price: 50000, name: 'Počítač' }
    ]
  })
}
</script>

<style>

</style>
