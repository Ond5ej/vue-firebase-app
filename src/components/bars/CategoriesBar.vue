<template>
  <v-card>
    <v-tabs
      v-model="tab"
      icons-and-text
      centered
      @change="emitCategory"
    >
      <v-tab
        v-for="(cat, index) in categories"
        :key="index"
        :to="cat.href"
        class="pt-2 tab-width"
        :class="cat.class"
        height="100"
      >
        {{ cat.name }}
        <v-icon>{{ cat.icon }}</v-icon>
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
      tab: null,
      categories: [
        {
          href: 'electronics',
          class: 'tab-electronics',
          name: 'Elektronika',
          icon: 'computer'
        },
        {
          href: 'toys',
          class: 'tab-toys',
          name: 'Hračky',
          icon: 'toys'
        },
        {
          href: 'sport',
          class: 'tab-sports',
          name: 'Sport',
          icon: 'fitness_center'
        },
        {
          href: 'drugstore',
          class: 'tab-drugstore',
          name: 'Drogerie',
          icon: 'sanitizer'
        },
        {
          href: 'books',
          class: 'tab-books',
          name: 'Knihy',
          icon: 'menu_book'
        },
        {
          href: 'cars',
          class: 'tab-cars',
          name: 'Auto-moto',
          icon: 'directions_car'
        },
        {
          href: 'pets',
          class: 'tab-pets',
          name: 'Pet',
          icon: 'pets'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['setCategory']),
    emitCategory () {
      this.setCategory(this.tab)
      this.$emit('updateCategory', this.tab)
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
  width:10%;
}

</style>
