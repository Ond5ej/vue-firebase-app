<template>
  <v-app app>
    <Navbar />

    <v-main>
      <CategoriesBar />

      <!-- VSE OSTATNI PRES ROUTER -->
      <div
        class="pl-0 pb-0 "
        style="width:100%;"
      >
        <router-view :key="$route.path" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/bars/Navbar'
import CategoriesBar from './components/bars/CategoriesBar'

export default {
  name: 'App',

  components: {
    Navbar,
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
      }
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
