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

    <v-toolbar-items>
      <!-- REGISTR & LOGIN FORM -->
      <v-dialog
        v-if="!isUserAuth"
        v-model="dialogRegistration"
        persistent
        max-width="400px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            @click="formRegistration=true"
          >
            Registration
          </v-btn>
        </template>

        <Registration
          v-if="formRegistration"
          @closeForm="closeForm"
          @changeForm="changeForm"
        />
        <Login
          v-if="!formRegistration"
          :with-close-btn="true"
          @closeForm="closeForm"
          @changeForm="changeForm"
        />
      </v-dialog>

      <v-divider
        v-if="!isUserAuth"
        vertical
      />

      <!-- LOGIN FORM -->
      <v-menu
        v-if="!isUserAuth"
        :close-on-content-click="false"
        :nudge-width="300"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            Log in
          </v-btn>
        </template>
        <v-list class="pa-0">
          <Login />
        </v-list>
      </v-menu>

      <!-- EMAIL PRIHLASENEHO UZIVATELE -->
      <p
        v-if="isUserAuth"
        class="subtitle-1 mt-4 mr-5"
      >
        {{ getUser.email }}
      </p>
      <v-divider
        v-if="isUserAuth"
        vertical
      />

      <!-- SETTINGS & LOGOUT -->
      <v-menu
        v-if="isUserAuth"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            title="Settings"
            v-on="on"
          >
            <v-icon>settings</v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <Profile />
        </v-list>
      </v-menu>

      <v-divider
        v-if="isUserAuth"
        vertical
      />

      <v-btn
        v-if="isUserAuth"
        style="min-width: 64px"
        right
        icon
        title="Log out"
        @click.prevent="logout"
      >
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
import Login from './Login'
import Registration from './Registration'
import Profile from './Profile'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  components: {
    Login,
    Registration,
    Profile

  },
  data () {
    return {
      dialogRegistration: false,
      formRegistration: true
    }
  },
  computed: {
    ...mapGetters(['getUser', 'isUserAuth'])
  },
  methods: {
    ...mapActions(['signOutAction']),
    logout () {
      this.signOutAction()
    },
    reloadPage () {
      location.reload()
    },
    closeForm () {
      this.dialogRegistration = false
    },
    changeForm () {
      this.formRegistration = !this.formRegistration
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
