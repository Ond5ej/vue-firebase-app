<template>
  <v-main>
    <v-card
      width="400"
      class="mx-auto mt-5"
    >
      <v-card-title class="justify-center">
        <h1 class="display-1">
          Registration
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form
          v-model="validForm"
          method="post"
          action="/form"
          autocomplete="off"
        >
          <v-text-field
            ref="login"
            v-model="authorization.login"
            type="text"
            label="E-mail"
            prepend-icon="mdi-account-circle"
            required
          />
          <v-text-field
            v-model="authorization.password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="new-password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            required
            @click:append="showPassword=!showPassword"
          />
          <v-text-field
            v-model="authorization.passwordCheck"
            label="Password verification"
            :type="showPasswordVerification ? 'text' : 'password'"
            autocomplete="new-password"
            prepend-icon="mdi-lock"
            :append-icon="showPasswordVerification ? 'mdi-eye' : 'mdi-eye-off'"
            required
            @click:append="showPasswordVerification=!showPasswordVerification"
          />
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="success">
          Registration
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>

<script>

export default {
  name: 'LoginForm',
  data: () => ({
    showPassword: false,
    showPasswordVerification: false,
    authorization: {
      password: '',
      passwordCheck: '',
      login: ''

    },
    validForm: false
  }),
  methods: {
    submit () {
      alert(this.authorization.login)
      alert(this.validForm)
    }
  }

}
</script>

<style scoped>

.my-text-style >>> .v-input__slot {
    color: red !important;
    background-color:green !important;
}
</style>
