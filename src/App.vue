<template>
<v-app id="app">
  <v-app-bar app color="primary" dark>
    <router-link :to="{ name: 'Home', path: '/'}">
      <v-icon medium dark>mdi-widgets</v-icon>
    </router-link>
    <v-toolbar-title class="px-3">Periodic Table</v-toolbar-title>
  </v-app-bar>
  <router-view/>
</v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>