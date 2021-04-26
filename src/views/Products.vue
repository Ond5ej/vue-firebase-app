<template>
  <v-row
    class="ma-8"
  >
    <Filtr />
    <FilterBasic
      @sortBy="sortBy($event)"
    />
    <Product
      v-for="(product, index) of products"
      :key="index"
      :product-data="product"
      :category="category"
    />
  </v-row>
</template>

<script>
import Product from '../components/shopping/Product'
import FilterBasic from '../components/shopping/FilterBasic'
import Filtr from '../components/shopping/Filtr'
import { firestore } from '../firebase'

export default {
  name: 'Products',
  components: {
    Product,
    FilterBasic,
    Filtr
  },
  props: {
    category: { type: String, default: undefined }
  },
  data () {
    return {
      products: [],
      orderBy: 'brandName'
    }
  },

  computed: {
    subCategory () { return this.$route.params.subCategory }
  },
  watch: {
    subCategory () {
      this.getProducts()
    },

    category () {
      this.getProducts()
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    getProducts (orderBy, orderType) {
      if (orderBy === undefined) orderBy = 'price'
      if (orderType === undefined) orderType = 'asc'

      this.products = []
      firestore.collection(this.category).where('type', '==', this.subCategory).orderBy(orderBy, orderType).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push({ ...doc.data(), ...{ id: doc.id } })
        })
      }).catch((error) => {
        console.log('Error getting document:', error)
      })
    },
    sortBy (id) {
      let orderBy
      let orderType
      switch (id) {
        case 'top':
          orderBy = 'price'
          orderType = 'asc'
          break
        case 'sellers':
          orderBy = 'price'
          orderType = 'asc'
          break
        case 'price_high_to_low':
          orderBy = 'price'
          orderType = 'desc'
          break
        case 'price_low_to_high':
          orderBy = 'price'
          orderType = 'asc'
          break
        default:
          orderBy = 'price'
          orderType = 'asc'
          break
      }

      this.getProducts(orderBy, orderType)
      console.log(id)
    }
  }

}

</script>

<style>

</style>
