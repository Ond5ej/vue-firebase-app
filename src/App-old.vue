<template>
  <v-app app>
    <Navbar />

    <v-main>
      <CategoriesBar />
      <div
        style="display:flex; "
      >
        <!-- LEFT PANEL BAR -> SUB CATEGORIES -->
        <div
          v-if="category!==0"
          style="    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);"
          class="border-top-category "
          :class="'border-top-'+category"
        >
          <CategoriesLeft :category="category" />
        </div>

        <!-- VSE OSTATNI PRES ROUTER -->
        <div
          class="pl-0 pb-0 "
          style="width:100%;"
        >
          <router-view :key="$route.path" />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/bars/Navbar'
import CategoriesLeft from './components/bars/CategoriesLeft'
import CategoriesBar from './components/bars/CategoriesBar'

export default {
  name: 'App',

  components: {
    Navbar,
    CategoriesLeft,
    CategoriesBar
  },

  data: () => ({
    classColorTop: undefined

  }),
  computed: {
    // Hlavni nastaveni Hlavni Kategorie :D
    category () {
      if (this.$route.params.category) {
        return this.$route.params.category
      } else {
        return this.$route.matched[0].name
        // return this.$route.name
      }
    }
  },
  watch: {
    $route () {
      console.log('%c App component watch...', 'color:green; font-weight:bold;')
      console.log('path: ' + this.$route.path)
      console.log(this.$route)
      console.log('%c subCategory: ' + this.$route.params.subCategory, 'color:red;')
      console.log('%c category: ' + this.$route.params.category, 'color:green;')
    }
  }

}
</script>
<style scoped>
.border-top-category{
  min-width:250px !important;
  border-top: 0px solid;
  position:relative;
}
.border-top-electronics{
  border-top-color: rgb(0, 191, 255) !important;
}
.border-top-toys {
  border-top-color: orange !important;
}
.border-top-sport {
  border-top-color: green !important;
}
.border-top-drugstore {
  border-top-color: pink !important;
}
.border-top-books {
  border-top-color: brown !important;
}
.border-top-cars {
  border-top-color: darkblue !important;
}
.border-top-pets {
  border-top-color: grey !important;
}

</style>
