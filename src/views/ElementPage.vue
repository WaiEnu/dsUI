<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row class="text-center" justify="start" align="start">
        <v-col cols="12">
          <Page :element="elements[id]" class="pa-0 mx-auto"/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import elements from '@/assets/elements.json';
import Page from '@/components/Page';

export default {
  name: 'ElementPage',
  components: {
    Page
  },
  data: () => ({
    id: null,
    elements:elements,
  }),
  created:  function(){
    this.id = this.$route.params.id
  },
}
</script>