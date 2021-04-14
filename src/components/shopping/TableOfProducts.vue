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
import { firestore } from '../../firebase'

export default {
  name: 'TableOfProducts',
  components: {
    Product
  },
  props: {
    category: { type: String, default: undefined }
  },
  data () {
    return {
      products: []
    }
  },
  computed: {},
  watch: {
    category () {
      this.getProducts()
    }
  },

  methods: {
    getProducts () {
      this.products = []
      firestore.collection(this.category).get().then((result) => {
        result.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.products.push(doc.data())
        })
      }).catch((error) => {
        console.log('Error getting document:', error)
      })
    }
  }

}

</script>

<style>

</style>
