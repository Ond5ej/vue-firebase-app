<template>
  <div class="dashboard">
    <Home />
    <FiltrForProducts />
    <TableOfProducts />
  </div>
</template>

<script>

import TableOfProducts from '../components/shopping/TableOfProducts'
import Home from '../components/Home'
import FiltrForProducts from '../components/FiltrForProducts'

export default {
  name: 'Dashboard',
  components: {
    TableOfProducts,
    Home,
    FiltrForProducts
  },
  data () {
    return {}
  }
}
</script>
