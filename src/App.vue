<template>
  <v-app>
    <Navbar />
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './views/Home'

export default {
  name: 'App',

  components: {
    Navbar,
    Home
  },

  data: () => ({
    //
  })
}
</script>
