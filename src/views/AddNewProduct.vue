<template>
  <v-container>
    <v-row align="center">
      <v-col
        class="d-flex mt-10 ml-10 mr-10"
      >
        <v-select
          v-model="category"
          :items="selItems"
          label="Category"
          required
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="productData.modelName"
          label="Model name"
          placeholder="e.g. QE85Q60T"
          required
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="productData.price"
          label="Price"
          type="number"
          min="0"
          required
        />
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="productData.rating"
          label="Rating"
          readonly
        />
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="productData.img"
          label="Image"
          required
        />
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col
        class="d-flex"
      >
        <v-textarea
          v-model="productData.description"
          label="Description"
          rows="3"
          required
        />
      </v-col>
    </v-row>

    <v-divider />

    <AddElectronic
      v-if="category==='Electronics'"
      @save="save($event)"
    />
  </v-container>
</template>

<script>
import { firestore } from '../firebase'

// import AddElectronic from '../components/addProducts/electronics/AddElectronics'
import AddElectronic from '../components/addProducts/AddProductByBluePrint'
export default {
  name: 'AddNewProduct',
  components: {
    AddElectronic

  },
  data () {
    return {
      selItems: ['Electronics', 'Toys', 'Sport'],
      category: undefined,
      productData: {
        modelName: undefined,
        rating: 5,
        description: undefined,
        img: undefined,
        price: undefined
      }
    }
  },
  methods: {
    clearForm () {
      this.category = undefined
      this.productData = {
        modelName: undefined,
        rating: 5,
        description: undefined,
        img: undefined,
        price: undefined
      }
    },
    save (emitData) {
      console.log('1')
      console.log(emitData)

      this.productData = Object.assign(this.productData, emitData)
      firestore.collection(this.category.toLowerCase()).doc(this.productData.modelName).set(this.productData)
        .then(() => {
          console.log('Document successfully written!')
          this.clearForm()
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
    }
  }

}
</script>

<style>

</style>
