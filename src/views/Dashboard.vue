<template>
  <div
    class="dashboard"
    style="display:flex; "
  >
    <!-- LEFT PANEL BAR -> SUB CATEGORIES -->
    <div
      v-if="category!==0 && this.$route.params.id===undefined"
      style="box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);"
      class="border-top-category "
      :class="'border-top-'+category"
    >
      <CategoriesLeft
        v-if="true"
        :category="category"
      />
    </div>

    <ProductDetail
      v-if="productId"
      :category="category"
      :sub-category="subCategory"
      :product-id="productId"
    />
    <Products
      v-if="subCategory && productId===undefined"
      :category="category"
    />
  </div>
</template>

<script>
import Products from './Products'
import ProductDetail from '../components/shopping/ProductDetail'
import CategoriesLeft from '../components/bars/CategoriesLeft'

export default {
  name: 'Dashboard',
  components: {
    Products,
    CategoriesLeft,
    ProductDetail
  },
  computed: {
    // Hlavni nastaveni Hlavni Kategorie :D
    category () {
      return this.$route.params.category
    },
    subCategory () {
      return this.$route.params.subCategory
    },
    productId () {
      return this.$route.params.id
    }

  }

}
</script>
