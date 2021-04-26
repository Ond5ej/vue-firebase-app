<template>
  <div class="text-center">
    <v-menu
      :close-on-content-click="false"
      open-on-hover
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>

      <div>AAAAAAAAAA</div>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    hover: false

  })
}
</script>
