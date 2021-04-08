<template>
  <v-app app>
    <Navbar />
    <v-main>
      <CategoriesBar />

      <TableOfProducts />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import CategoriesBar from './components/CategoriesBar'
import TableOfProducts from './components/TableOfProducts'

export default {
  name: 'App',

  components: {
    Navbar,
    CategoriesBar,
    TableOfProducts
  },

  data: () => ({
    //
  })
}
</script>
