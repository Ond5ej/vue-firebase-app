
<template>
  <div style="max-width:300px;">
    <v-menu
      v-for="item in navLinks"
      :key="item.key"
      :close-on-content-click="false"
      open-on-hover
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
          style="min-width:300px; min-height:55px;"
          :style="'border:1px solid var(--v-' + category + '-base) !important;'"
          class="pl-9 pr-6 "
          :to="{ name: category, params: { subCategory: item.key, category: category } }"
          text
          tile
          v-on="on"
        >
          {{ item.text }}
          <v-spacer />
          <v-icon small>
            arrow_forward_ios
          </v-icon>
        </v-btn>
      </template>
      <!-- SUBCATEGORY ++ -->
      <v-card
        style="width:600px; height:400px;"
        :style="'border:1px solid var(--v-' + category + '-base) !important;'"
      >
        <v-row
          v-for="(filtr, index) in specificCategories[item.key]"
          :key="index"
          align="center"
          justify="center"
        >
          <v-col>
            {{ filtr.text }}
          </v-col>
        </v-row>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { firestore } from '../../firebase'

export default {
  name: 'CategoriesLeft',
  props: {
    category: { type: String, default: undefined }
  },
  data () {
    return {
      navLinks: [],
      subCategory: this.$route.params.subCategory,
      hover: false,

      specificCategories: {

        televisions: [
          {
            text: 'Accessories'

          },
          {
            text: 'QLED'
          },
          {
            text: 'OLED'
          }
        ],
        appliances: [
          {
            text: 'Accessories'

          },
          {
            text: 'Coffie'
          },
          {
            text: 'Vaccum'
          }
        ]
      }
    }
  },

  watch: {
    category () {
      this.getListOfSubCategory()
    }
  },

  mounted () {
    this.getListOfSubCategory()
  },
  methods: {

    getListOfSubCategory () {
      if (this.category === 0) return 0
      this.navLinks = []
      firestore.collection('sub-category').doc(this.category).get().then((doc) => {
        if (doc.exists) {
          // razeni objektu z dotazu
          const ordered = Object.keys(doc.data()).sort().reduce(
            (obj, key) => {
              obj[key] = { ...doc.data()[key], ...{ key: key } }
              return obj
            },
            {}
          )

          this.navLinks = ordered
        } else {
        // doc.data() will be undefined in this case
          console.log('No such sub-category document!')
        }
      }).catch((error) => {
        console.log('Error getting sub-category document:', error)
      })
    }
  }

}

</script>

<style scope>
.list-item-electronics.v-list-item--active {
  color:white !important;
  /*background-color: rgba(0, 191, 255,1) !important;*/
}
.list-item-toys.v-list-item--active {
  color:white !important;
  /*background-color:rgba(255, 165, 0, 0.4) !important;*/
}
.list-item-sport.v-list-item--active {
  color:white !important;
  /*background-color:rgba(0, 128, 0, 0.4) !important;*/
}
.list-item-drugstore.v-list-item--active {
  color:white !important;
  /*background-color:rgba(255, 192, 203, 0.4) !important;*/
}
.list-item-books.v-list-item--active {
  color:white !important;

}
.list-item-cars.v-list-item--active {
  color:white !important;

}
.list-item-pets.v-list-item--active {
  color:white !important;
}

.list-item-category{
  border-bottom: 2px solid red !important;
}

.menu_able_content{

}

</style>
