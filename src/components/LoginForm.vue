<template>
  <v-card
    class="fill-height"
    align="center"
    justify="center"
  >
    <v-progress-linear
      :indeterminate="loginProgress"
      color="primary"
      :value="loginProgress ? 0 : 100"
    />
    <v-card-title class="justify-center">
      <h2 class="display-3 font-weight-medium">
        App
      </h2>
    </v-card-title>
    <v-card-text class="inputs">
      <v-form @submit.prevent>
        <v-text-field
          v-model="authData.username"
          label="Přihlašovací jméno"
          prepend-icon="mdi-account-circle"
          name="username"
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
          color="primary"
          large
          value="login"
          name="dologin"
          type="submit"
          :disabled="loginProgress"
          @click="login"
        >
          Přihlásit
        </v-btn>
        <v-btn
          text
          block
          class="mt-12 mb-2"
          @click="pwDialog = true"
        >
          Zapomněli jste heslo?
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      authData: {
        username: null,
        password: null
      },
      pwDialog: false,
      loginProgress: false,
      showPassword: false
    }
  },
  methods: {
    login () {
      this.loginProgress = true
      this.$emit('login', this.authData, (result) => { this.loginProgress = false })
      this.authData.password = null // zapomenout heslo
    }
  }
}
</script>
