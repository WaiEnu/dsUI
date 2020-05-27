<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row class="text-center">
        <v-col cols="12">
          <v-sheet>
            <Page :element="elements[id]" />
          </v-sheet>
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