<template>
  <v-card>
    <v-tabs
      v-model="tab"
      icons-and-text
      centered
    >
      <v-tab
        v-for="(cat, index) in categories"
        :key="index"
        :href="cat.href"
        class="pt-2"
        :class="cat.class"
        @click="emitCategory(index)"
      >
        {{ cat.name }}
        <v-icon>{{ cat.icon }}</v-icon>
      </v-tab>
    </v-tabs>
    <div
      style="position:absolute; left:76%; top:20%"
    >
      <ShopingCart />
    </div>
  </v-card>
</template>

<script>
import ShopingCart from './ShoppingCart'
export default {
  name: 'Profile',
  components: {
    ShopingCart
  },
  data () {
    return {
      tab: null,
      categories: [
        {
          href: '#tab-1',
          class: 'tab-electronics',
          name: 'Elektronika',
          icon: 'computer'
        },
        {
          href: '#tab-2',
          class: 'tab-toys',
          name: 'Hračky',
          icon: 'toys'
        },
        {
          href: '#tab-3',
          class: 'tab-sports',
          name: 'Sport',
          icon: 'fitness_center'
        },
        {
          href: '#tab-4',
          class: 'tab-chems',
          name: 'Drogerie',
          icon: 'sanitizer'
        },
        {
          href: '#tab-5',
          class: 'tab-books',
          name: 'Knihy',
          icon: 'menu_book'
        },
        {
          href: '#tab-6',
          class: 'tab-cars',
          name: 'Auto-moto',
          icon: 'directions_car'
        },
        {
          href: '#tab-7',
          class: 'tab-pets',
          name: 'Pet',
          icon: 'pets'
        }
      ]
    }
  },
  methods: {
    emitCategory (category) {
      this.$emit('selectCategory', category)
    }
  }

}
</script>

<style scope>
.v-tabs-slider-wrapper, .v-tab--active.tab-electronics {
  background-color: rgb(0, 191, 255) !important;
}
.v-tabs-slider-wrapper, .v-tab--active.tab-toys {
  background-color: orange !important;
}
.v-tabs-slider-wrapper, .v-tab--active.tab-sports {
  background-color: green !important;
}
.v-tabs-slider-wrapper, .v-tab--active.tab-chems {
  background-color: pink !important;
}
.v-tabs-slider-wrapper, .v-tab--active.tab-books {
  background-color: brown !important;
}
.v-tabs-slider-wrapper, .v-tab--active.tab-cars {
  background-color: darkblue !important;
}
.v-tabs-slider-wrapper, .v-tab--active.tab-pets {
  background-color: grey !important;
}
.v-tabs-slider-wrapper, .v-tab--active{
  color:white !important;
}

.v-tabs-slider-wrapper{
  display:none !important;
}

</style>
