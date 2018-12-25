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
      <router-link to="/login" slot="footer" class="ml-4">Schon dabei?</router-link>
    </div>
  </card>
</template>

<script>
import router from '@/router/index.js'
import axios from 'axios'
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
      register () {
        const requestBody = {
          ...this.model
        }
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        axios.post('http://localhost:3000/api/auth/register', requestBody, config)
          .then((result) => {
            console.log(result)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    }
}
</script>
