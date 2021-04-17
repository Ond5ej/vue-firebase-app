<template>
  <v-navigation-drawer
    width="100%"
  >
    <v-list class="pa-0">
      <v-list-item-group>
        <template
          v-for="(item, index) in navLinks"
        >
          <v-list-item
            :key="index"
            :to="'/'+getCategory+'/'+index"
            :value="item.text"
            class="pl-6"
            :active-class="getCategory + ' list-item-category list-item-' + getCategory + ' text--accent-4'"

            @change="storeSubCategory(index)"
          >
            <!--  -->
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="item.text" />
              </v-list-item-content>

              <v-list-item-action>
                <v-icon small>
                  arrow_forward_ios
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider
            :key="`divider-${index}`"
            :class="getCategory"
            style="max-height:2px !important; height:2px;"
          />
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { firestore } from '../../firebase'

export default {
  name: 'CategoriesLeft',
  data () {
    return {
      navLinks: []
    }
  },
  computed: {
    ...mapGetters(['getCategory'])
  },
  watch: {
    getCategory () {
      this.getSubCategory()
    }
  },
  mounted () {
    this.getSubCategory()
  },
  methods: {
    ...mapMutations(['setSubCategory']),
    getSubCategory () {
      if (this.getCategory === 0) return 0
      this.navLinks = []
      firestore.collection('sub-category').doc(this.getCategory).get().then((doc) => {
        if (doc.exists) {
          this.navLinks = doc.data()
        } else {
        // doc.data() will be undefined in this case
          console.log('No such sub-category document!')
        }
      }).catch((error) => {
        console.log('Error getting sub-category document:', error)
      })
    },
    storeSubCategory (index) {
      localStorage.setItem('subCategory', index)
      this.setSubCategory(index)
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

</style>
