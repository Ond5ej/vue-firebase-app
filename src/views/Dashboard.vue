<template>
  <div class="dashboard">
    <TableOfProducts :category="category" />
  </div>
</template>

<script>

import TableOfProducts from '../components/shopping/TableOfProducts'

export default {
  name: 'Dashboard',
  components: {
    TableOfProducts
  },

  data () {
    return {
      category: this.$route.name
    }
  },
  watch: {
    '$route' (to, from) {
      this.category = to.name
    }
  }
}
</script>
