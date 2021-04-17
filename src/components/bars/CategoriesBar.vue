<template>
  <v-card>
    <!--@change="emitCategory"-->
    <v-tabs
      v-model="tab"
      icons-and-text
      centered
      height="90"
    >
      <v-tab
        v-for="cat in categories"
        :key="cat.id"
        :to="'/'+cat.id"
        class="pt-2 tab-width"
        :class="cat.class"
        @click="manualChangeCategory"
      >
        {{ cat.name }}
        <v-icon large>
          {{ cat.icon }}
        </v-icon>
      </v-tab>
    </v-tabs>
    <div
      class="guide-line"
      :class="tab"
    />
    <div
      style="position:absolute; right:1%; top:20%"
    >
      <ShoppingCart />
    </div>
  </v-card>
</template>

<script>
import ShoppingCart from '../shopping/ShoppingCart'
import { mapMutations } from 'vuex'

export default {
  name: 'CategoriesBar',
  components: {
    ShoppingCart
  },
  data () {
    return {
      tab: localStorage.getItem('category'),

      categories: [
        {
          id: 'electronics',
          class: 'tab-electronics',
          name: 'Elektronika',
          icon: 'computer'
        },
        {
          id: 'toys',
          class: 'tab-toys',
          name: 'Hračky',
          icon: 'toys'
        },
        {
          id: 'sport',
          class: 'tab-sports',
          name: 'Sport',
          icon: 'fitness_center'
        },
        {
          id: 'drugstore',
          class: 'tab-drugstore',
          name: 'Drogerie',
          icon: 'sanitizer'
        },
        {
          id: 'books',
          class: 'tab-books',
          name: 'Knihy',
          icon: 'menu_book'
        },
        {
          id: 'cars',
          class: 'tab-cars',
          name: 'Auto-moto',
          icon: 'directions_car'
        },
        {
          id: 'pets',
          class: 'tab-pets',
          name: 'Pet',
          icon: 'pets'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['setCategory', 'setSubCategory']),
    emitCategory () {
      localStorage.setItem('category', this.tab.replace('/', ''))
      this.setCategory(this.tab.replace('/', ''))
    },
    manualChangeCategory () {
      alert('Manual')
      localStorage.setItem('subCategory', '')
      this.setSubCategory(null)
      localStorage.setItem('category', this.tab.replace('/', ''))
      this.setCategory(this.tab.replace('/', ''))
    }

  }
}
</script>

<style scope>

.v-tabs-slider-wrapper{
  display:none !important;
}
.guide-line{
   width:100%;
   height:5px;
}

.tab-width{
  width:10% !important;
}
.v-tab:hover .v-icon, .v-tab:hover {
  color:white !important;
}

.tab-toys:hover {
  background-color: var(--v-toys-base)!important;
}

.tab-electronics:hover {
  background-color: var(--v-electronics-base) !important;
}
.tab-toys:hover {
  background-color: var(--v-toys-base)!important;
}

.tab-sports:hover {
  background-color: var(--v-sport-base) !important;
}

.tab-drugstore:hover {
  background-color: var(--v-drugstore-base) !important;
}

.tab-books:hover {
  background-color: var(--v-books-base) !important;
}

.tab-cars:hover {
  background-color: var(--v-cars-base) !important;
}

.tab-pets:hover {
  background-color: var(--v-pets-base) !important;
}

</style>
