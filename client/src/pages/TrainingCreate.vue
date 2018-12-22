<template>
  <div class="row">
    <div class="col-12">
      <card>
        <h5 slot="header" class="title">Trainingstag hinzufügen</h5>
        <div class="row">
          <div class="col-md-4 offset-md-4 pt-5">
            <base-input
                  label="Trainingstag"
                  type="date"
                  v-model="trainingDate"
                  >
            </base-input>
            <button class="btn btn-primary mb-5" @click="startTraining(trainingDate)">Start</button>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-training',
  data () {
    return {
      trainingDate: null
    }
  },
  methods: {
    startTraining (date) {
      this.$store.commit('SET_TRAINING_DATE', date)
      this.$router.push('../training')
    }
  }
}
</script>
