<template>
  <card>
    <h5 slot="header" class="title">Profil bearbeiten</h5>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label="Team/Club"
                  placeholder="Team/Club"
                  v-model="input.team">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label="Email"
                  v-model="input.email"
                  type="email"
                  placeholder="team@email.com">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label="Vorname"
                  v-model="input.first"
                  placeholder="Max">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label="Nachname"
                  v-model="input.last"
                  placeholder="Mustermann">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input label="Addresse"
                  v-model="input.adress"
                  placeholder="Addresse">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Stadt"
                  v-model="input.city"
                  placeholder="Stadt">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1 pr-md-1">
        <base-input label="PLZ"
                  v-model="input.zip"
                  placeholder="PLZ">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Land"
                  v-model="input.country"
                  placeholder="Land">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Über Uns</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Hier können Sie sich und Ihr Team beschreiben..."
                    v-model="input.about">
              </textarea>
        </base-input>
      </div>
    </div>
    <base-button @click="saveUserData()" slot="footer" type="primary" fill>Speichern</base-button>
  </card>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style>
</style>
