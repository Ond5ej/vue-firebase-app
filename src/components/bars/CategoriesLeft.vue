<template>
  <v-navigation-drawer
    width="100%"
  >
    <v-list class="pa-0">
      <v-list-item-group v-model="selectedCategory">
        <template
          v-for="(item, index) in navLinks"
        >
          <v-list-item
            :key="index"
            :value="item.text"

            :active-class="getCategory + ' list-item-category list-item-'+getCategory + ' text--accent-4'"
          >
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
          <v-divider :key="`divider-${index}`" />
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CategoriesLeft',
  data () {
    return {
      selectedCategory: undefined,
      navLinks: [
        {
          text: 'Mobile Phones',
          route: '/mobile_phones'
        },
        {
          text: 'Computers',
          route: '/computers'
        },
        {
          text: 'Laptops and Tablets',
          route: '/laptops_tablets'
        },
        {
          text: 'Monitors',
          route: '/monitors'
        },
        {
          text: 'Hardware',
          route: '/hardware'
        },
        {
          text: 'Televisions',
          route: '/televisions'
        },
        {
          text: 'Photo Audio Video',
          route: '/photo_audio_video'
        },
        {
          text: 'Home Appliances',
          route: '/home_appliances'
        },
        {
          text: 'Appliances',
          route: '/appliances'
        },
        {
          text: 'Health & Beauty',
          route: '/health_beauty'
        },
        {
          text: 'Printers & Office',
          route: '/printers_office'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getCategory'])
  }

}

</script>

<style scope>
.list-item-category.v-list-item--active{

}

.list-item-electronics.v-list-item--active {
  color:black !important;
  background-color: rgba(0, 191, 255,1) !important;
}
.list-item-toys.v-list-item--active {
  color:black !important;
  background-color:rgba(255, 165, 0, 0.4) !important;
}
.list-item-sport.v-list-item--active {
  color:black !important;
  background-color:rgba(0, 128, 0, 0.4) !important;
}
.list-item-drugstore.v-list-item--active {
  color:black !important;
  background-color:rgba(255, 192, 203, 0.4) !important;
}
.list-item-books.v-list-item--active {
  color:white !important;

}
.list-item-cars.v-list-item--active {
  color:white !important;

}
.list-item-pets.v-list-item--active {
  color:black !important;
}
</style>
