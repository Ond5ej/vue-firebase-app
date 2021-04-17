<template>
  <v-row
    class="ma-8"
  >
    <Product
      v-for="(product, index) of products"
      :key="index"
      :product-data="product"
    />
  </v-row>
</template>

<script>
import Product from './Product'
import { firestore } from '../../firebase'
import { mapGetters } from 'vuex'

export default {
  name: 'TableOfProducts',
  components: {
    Product
  },
  data () {
    return {
      products: []
    }
  },

  computed: {
    ...mapGetters(['getSubCategory', 'getCategory'])
  },
  watch: {
    getSubCategory () {
      this.getProducts()
    },

    getCategory () {
      this.getProducts()
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      console.log('category ' + this.getCategory)
      console.log('sub category ' + this.getSubCategory)
      this.products = []
      firestore.collection(this.getCategory).where('type', '==', this.getSubCategory).get().then((result) => {
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
