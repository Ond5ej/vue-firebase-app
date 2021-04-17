<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-select
            v-model="type"
            :items="fsItems"
            label="Type"
            required
            @change="selectBluePrint"
          />
        </v-col>
      </v-row>
      <!-- THERE STARTS FUN -->
      <v-row>
        <v-col
          v-for="(data, index) in bpData"
          :key="index"
          cols="12"
          md="3"
        >
          <v-text-field
            v-if="data && data.type==='string'"
            v-model="vModelData[index]"
            :label="index"
          />

          <v-text-field
            v-else-if="data && data.type==='number'"
            v-model="vModelData[index]"
            :label="index"
            type="number"
            :min="data.positive ? 0 : false"
          />

          <v-select
            v-else-if="typeof data === 'object'"
            v-model="vModelData[index]"

            :items="data"
            :label="index"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn
            color="success"
            @click="save"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { firestore } from '../../firebase'

export default {
  data () {
    return {
      type: undefined,
      valid: false,
      bpData: {},
      vModelData: {},
      fsItems: []

    }
  },
  mounted () {
    this.getSubCategory()
  },
  methods: {
    save () {
      this.vModelData = Object.assign(this.vModelData, { type: this.type })
      console.log('2')
      console.log(this.vModelData)

      this.$emit('save', this.vModelData)
    },
    // nahraje se blueprint z fire storu a podle neho se vytvori ve formulari imputy
    selectBluePrint () {
      firestore.collection('bp-electronics').doc(this.type).get().then((doc) => {
        if (doc.exists) {
          for (const x in doc.data()) {
            this.vModelData = Object.assign(this.vModelData, { [x]: undefined })
          }
          console.log(this.vModelData)
          this.bpData = doc.data()
        } else {
        // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      }).catch((error) => {
        console.log('Error getting document:', error)
      })
    },
    // dostanu vse z bp-electronics
    getSubCategory () {
      firestore.collection('bp-electronics').get().then((query) => {
        query.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data())
          this.fsItems.push(doc.id)
        })
      })
    }

  }

}
</script>

<style>

</style>
