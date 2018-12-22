<template>
  <div class="row">
    <div class="col-md-6">
      <card :title="table1.title">
        <div class="table-responsive" style="overflow: hidden;">
          <table class="table tablesorter">
            <thead class="text-primary">
              <tr>
                <slot name="columns">
                  <th v-for="column in table1.columns" :key="column">{{column}}</th>
                </slot>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in table1.data" :key="index">
                <slot :row="item">
                  <td
                    v-for="(column, index) in table1.columns"
                    :key="index"
                  >{{itemValue(item, column)}}</td>
                  <button class="btn btn-success btn-sm mt-2" @click="addToTable2(table1.data[index], index)">-></button>
                </slot>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
    <div class="col-md-6">
      <card :title="table2.title">
        <button class="btn btn-primary btn-sm" @click="saveTableToStore(table2.data)">Speichern</button>
        <div class="table-responsive" style="overflow: hidden;">
          <table class="table tablesorter">
            <thead class="text-primary">
              <tr>
                <slot name="columns">
                  <th v-for="column in table2.columns" :key="column">{{column}}</th>
                </slot>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in table2.data" :key="index">
                <slot :row="item">
                  <td
                    v-for="(column, index) in table2.columns"
                    :key="index"
                  >{{itemValue(item, column)}}</td>
                  <button class="btn btn-danger btn-sm mt-2" @click="addToTable1(table2.data[index], index)">X</button>
                </slot>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
const tableColumns = ['Name', 'Anwesend', 'Abwesend']
const tableData = [
  {
    id: 1,
    name: 'Kilian Stallinger',
    anwesend: '3',
    abwesend: '0'
  },
  {
    id: 2,
    name: 'Pucher Tobias',
    anwesend: '3',
    abwesend: '0'
  },
  {
    id: 3,
    name: 'Uwe Highthouser',
    anwesend: '0',
    abwesend: '3'
  },
  {
    id: 4,
    name: 'Gorgy Piper',
    anwesend: '1',
    abwesend: '2'
  },
  {
    id: 3,
    name: 'Matcheo Stalllginger',
    anwesend: '0',
    abwesend: '3'
  },
  {
    id: 3,
    name: 'Uwe Highthouser',
    anwesend: '0',
    abwesend: '3'
  },
  {
    id: 3,
    name: 'Uwe Highthouser',
    anwesend: '0',
    abwesend: '3'
  }
]

export default {
  data () {
    return {
      table1: {
        title: 'Alle Spieler',
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: 'Table on Plain Background',
        columns: [...tableColumns],
        data: []
      },
      alert: null
    }
  },
  computed: {
    tableClass () {
      return this.type && `table-${this.type}`
    }
  },
  methods: {
    hasValue (item, column) {
      return item[column.toLowerCase()] !== 'undefined'
    },
    itemValue (item, column) {
      return item[column.toLowerCase()]
    },
    notifyVue (verticalAlign, horizontalAlign) {
      this.$notify({
        message: this.alert,
        icon: 'tim-icons icon-alert-circle-exc',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: 'danger',
        timeout: 0
      })
    }
  }
}
</script>
