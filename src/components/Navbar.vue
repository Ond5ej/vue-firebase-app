<template>
  <v-app-bar
    app
    short
    class="navbar"
  >
    <v-toolbar-title
      class="font-weight-medium main-title"
    >
      <router-link :to="'/'">
        App
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items class="hidden-md-and-down">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            <v-icon>settings</v-icon>
            Administrace
            <v-icon>expand_more</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item :to="{ name: 'triggers' }">
            <v-list-item-icon>
              <v-icon>trending_up</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Triggery</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'providers' }">
            <v-list-item-icon>
              <v-icon>devices</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Zdroje dat</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'sensors' }">
            <v-list-item-icon>
              <v-icon>memory</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Senzory</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            <v-icon>account_circle</v-icon>
            testtest
            <v-icon>expand_more</v-icon>
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

    <LoginForm />
  </v-app-bar>
</template>
<script>
import LoginForm from './LoginForm'
export default {
  name: 'Navbar',
  components: {
    LoginForm

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
.main-title {
  color: var(--v-primary-base);
}
.theme--light.v-btn,
.theme--dark.v-btn {
  text-transform: none;
  font-size: 18px;
  border-radius: 0;
  /*color: rgba(0, 0, 0, 0.5);*/
}
.tab-items .v-btn {
  border-bottom: solid white 2px;
}
.tab-items .v-btn--active {
  color: var(--v-primary-base);
  border-color: var(--v-primary-base);
}
.tab-items .v-btn--active::before {
  background-color: inherit;
}
.tab-items .v-btn:hover::before {
  background-color: var(--v-primary-base);
}
.tab-items .v-btn:hover {
  border-color: var(--v-primary-base);
}
.v-toolbar__title {
  overflow: visible;
}
.v-list-item__action {
  min-width: inherit;
  margin: 0;
}
.v-btn .v-chip {
  cursor: inherit;
}
.v-application a {
  text-decoration: none;
}
</style>
