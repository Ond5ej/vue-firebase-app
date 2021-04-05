<template>
  <v-app-bar
    app
    short
    class="navbar"
    color="primary"
  >
    <v-toolbar-title
      class="display-1"
    >
      <router-link
        :to="'/'"
        class="color-app-title"
      >
        App
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items class="hidden-md-and-down">
      <v-menu
        :close-on-content-click="false"
        :nudge-width="300"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            Login
          </v-btn>
        </template>
        <v-list clas="pa-0">
          <LoginForm />
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            <v-icon>settings</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            :to="{ name: 'profile' }"
            @click.prevent=""
          >
            <v-list-item-icon>
              <v-icon>face</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item>
          <v-list-item @click.prevent="logout">
            <v-list-item-icon>
              <v-icon>power_settings_new</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Odhlásit</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        icon
        @click.prevent="logout"
      >
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
import LoginForm from './LoginForm'
export default {
  name: 'Navbar',
  components: {
    LoginForm

  },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$emit('logout')
    },
    reloadPage () {
      location.reload()
    }
  }
}
</script>

<style scoped>
.v-list{
  padding:0px !important;
}
.color-app-title{
  color:white !important;
}

.theme--light.v-btn,
.theme--dark.v-btn {
  text-transform: none;
  font-size: 18px;
  border-radius: 0;
  background-color: transparent;
  box-shadow:none;
  cursor:pointer ;

}

.v-application a {
  text-decoration: none;
}
</style>
