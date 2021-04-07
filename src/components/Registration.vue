<template>
  <v-card
    width="400"
    class="mx-auto"
  >
    <v-card-title class="justify-center">
      <h1 class="display-1 mt-4">
        Registration
      </h1>

      <v-btn
        x-small
        fab
        class="close-btn"
        @click="dialogClose"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="mt-2">
      <v-form @submit.prevent>
        <v-text-field
          v-model="authorization.email"
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
          v-model="authorization.passwordRepeat"
          label="Confirm password"
          :type="showPasswordVerification ? 'text' : 'password'"
          autocomplete="new-password"
          prepend-icon="mdi-lock"
          :append-icon="showPasswordVerification ? 'mdi-eye' : 'mdi-eye-off'"
          required
          @click:append="showPasswordVerification=!showPasswordVerification"
        />
        <v-btn
          large
          class="mt-3"
          block
          color="success"
          @click="validate"
        >
          Registr
        </v-btn>
        <p v-if="errors">
          {{ errors }}
        </p>

        <v-btn
          class="mt-7"
          text
          block
          @click="changeForm"
        >
          I am already registered
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data: () => ({
    showPassword: false,
    showPasswordVerification: false,
    errors: undefined,
    validationErrors: [],
    authorization: {
      password: '',
      passwordRepeat: '',
      email: ''
    },
    validForm: false
  }),
  computed: {
    ...mapGetters(['getUser', 'isUserAuth'])
  },
  methods: {
    ...mapActions(['signUpAction']),

    dialogClose () {
      this.$emit('closeForm', true)
    },
    changeForm () {
      this.$emit('changeForm')
    },
    resetError () {
      this.validationErrors = []
    },
    validate () {
      // Clear the errors before we validate again
      this.resetError()

      // email validation
      if (!this.authorization.email) {
        this.validationErrors.push('<strong>E-mail</strong> cannot be empty.')
      }
      if (/.+@.+/.test(this.authorization.email) !== true) {
        this.validationErrors.push('<strong>E-mail</strong> must be valid.')
      }
      // password validation
      if (!this.authorization.password) {
        this.validationErrors.push('<strong>Password</strong> cannot be empty')
      }
      if (/.{6,}/.test(this.authorization.password) !== true) {
        this.validationErrors.push(
          '<strong>Password</strong> must be at least 6 characters long'
        )
      }
      if (!(this.authorization.password === this.authorization.passwordRepeat)) {
        this.validationErrors.push('<strong>Passwords</strong> did not match')
      }

      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.registration()
      }
    },

    registration () {
      this.signUpAction({ email: this.authorization.email, password: this.authorization.password })
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
