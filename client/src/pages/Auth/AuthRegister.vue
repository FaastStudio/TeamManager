<template>
  <card class="col-md-4 col-12 col-sm-12 offset-md-4 offset-md-1">
    <h3 slot="header" class="title">Registrieren</h3>
    <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Vorname"
                  type="text"
                  v-model="model.first"
                  placeholder="Max">
        </base-input>
      </div>
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Nachname"
                  type="text"
                  v-model="model.last"
                  placeholder="Muster">
        </base-input>
      </div>
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Email Addresse"
                  type="email"
                  v-model="model.email"
                  placeholder="team@email.com">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 pl-md-1 pr-md-1">
        <base-input label="Passwort"
                  type="password"
                  v-model="model.password"
                  placeholder="Passwort">
        </base-input>
      </div>
    </div>
    <div class="row align-items-center">
      <base-button @click="register()" slot="footer" type="primary" fill>Registrieren</base-button>
      <router-link to="/auth/login" slot="footer" class="ml-4">Schon dabei?</router-link>
    </div>
  </card>
</template>

<script>
import router from '@/router/index.js'
import AuthService from '@/services/AuthService'
export default {
  props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    data () {
      return {
        form: null,
        response: null,
        resStatus: null,
      }
    },
    computed: {
      input() {
        this.form = this.model
        return this.model
      }
    },
    methods: {
      async register () {
        try {
          const response = await AuthService.register({
            first: this.input.first,
            last: this.input.last,
            email: this.input.email,
            password: this.input.password
          })
          this.response = response.data.data
          this.resStatus = String(response.data.status)
          if(this.resStatus === '201') {
            this.authenticate()
          } else if (this.resStatus === '406') {
            alert('Email already exists')
          }
        } catch (e) {
          console.error(e)
        }
      },
      async authenticate () {
        try {
          const response = await AuthService.authenticate({
            email: this.input.email,
            password: this.input.password
          })
          this.response = response.data.data
          this.resStatus = String(response.status)
          this.$store.commit('setToken', this.response.token)
          let uid = this.response.user._id
          this.$store.commit('setUserId', uid)
          console.log(response.data)
          if(this.resStatus === '201') {
            console.log('201 auth')
            this.$router.push('/dashboard')
          }
        } catch (e) {
          alert('Authentication Error: ' + e)
        }
      }
    }
}
</script>
