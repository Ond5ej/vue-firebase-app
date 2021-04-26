<template>
  <v-row
    align="center"
    justify="center"
    class="mb-0"
    style="width:100%; margin:0px 0px;"
  >
    <v-btn-toggle
      v-model="toggle_exclusive"
      mandatory
      align="center"
      justify="center"
    >
      <v-btn
        v-for="(btn, index) in btnData"
        :key="index"
        style="border-radius:0px;"
        text
        @click="emitOrder(btn.orderId)"
      >
        {{ btn.text }}
      </v-btn>
    </v-btn-toggle>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      toggle_exclusive: undefined,
      btnData: [
        {
          text: 'TOP',
          icon: '',
          orderId: 'top'
        },
        {
          text: 'Best Sellers',
          icon: '',
          orderId: 'sellers'
        },
        {
          text: 'Price High to Low',
          icon: '',
          orderId: 'price_high_to_low'
        },
        {
          text: 'Price Low to High',
          icon: '',
          orderId: 'price_low_to_high'
        }
      ]
    }
  },
  methods: {
    emitOrder (id) {
      this.$emit('sortBy', id)
    }
  }

}
</script>

<style scope>
.v-btn--active{
  background-color: var(--v-primary-base) !important;
  color:white !important;
  /* border-bottom:4px solid var(--v-primary-base) !important;*/
  border: none !important;
  border-top:3px solid var(--v-primary-base) !important;

}

</style>
