<template>
  <v-card
    class="fill-height"
    align="center"
    justify="center"
  >
    <v-card-title class="justify-center">
      <h2 class="display-1 font-weight-medium">
        Log in
      </h2>
      <v-btn
        v-if="withCloseBtn"
        x-small
        fab
        class="close-btn"
        @click="dialogClose"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="inputs">
      <v-form @submit.prevent>
        <v-text-field
          v-model="authData.email"
          label="E-mail"
          prepend-icon="mdi-account-circle"
          name="email"
          autocomplete="new-password"
        />
        <v-text-field
          v-model="authData.password"
          label="Password"
          placeholder="Heslo"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          name="password"
          autocomplete="new-password"
          @click:append="showPassword=!showPassword"
        />

        <v-btn
          block
          class="mt-3"
          color="primary"
          large
          value="login"
          name="dologin"
          type="submit"
          @click="login"
        >
          Log in
        </v-btn>
        <v-btn
          text
          block
          class="mt-7"
          @click="pwDialog = true"
        >
          Forgot your password?
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  props: {
    withCloseBtn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      authData: {
        email: null,
        password: null
      },
      pwDialog: false,
      showPassword: false
    }
  },
  methods: {
    ...mapActions(['signInAction']),
    login () {
      this.signInAction({ email: this.authData.email, password: this.authData.password })
    },
    dialogClose () {
      this.$emit('closeForm', true)
    },
    changeForm () {
      this.$emit('changeForm')
    }
  }
}
</script>
<style scoped>
.close-btn{
  position:absolute;
  top:10px;
  right:10px;
}
</style>
