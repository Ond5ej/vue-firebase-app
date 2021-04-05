<template>
  <v-app>
    <Navbar />
    <Registration />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Registration from './components/Registration.vue'

export default {
  name: 'App',

  components: {
    Navbar,
    Registration
  },

  data: () => ({
    //
  })
}
</script>
