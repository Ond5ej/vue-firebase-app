<template>
  <v-container
    fluid
  >
    <v-row>
      <v-col class="headline">
        Profil
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        Vzhled stránky:
      </v-col>
      <v-col
        cols="7"
        sm="7"
      >
        <v-switch
          class="theme-switch"
          inset
          :input-value="this.$vuetify.theme.dark"
          :label="selectedTheme"
          @change="darkMode"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Profile',
  data () {
    return {
      selectedTheme: this.$vuetify.theme.dark ? 'tmavý režim' : 'světlý režim'
    }
  },
  methods: {
    darkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark.toString())
      this.selectedTheme = this.$vuetify.theme.dark ? 'tmavý režim' : 'světlý režim'
    }
  }

}
</script>

<style scoped>
.header {
  padding: 10px 20px;
  margin-top: 5px;
}

.header-container {
  padding: 10px;
}

.skupinyNadpis{
  padding-bottom: 0px;
}

</style>
