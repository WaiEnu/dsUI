<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-layout wrap align-center justify-space-around>
      <v-flex lg6 md8 xs10>
        <v-card>
          <v-img
            :src="item"
            alt=""
            position="left top"
            class="bgImg">
            <Letterparts/>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Letterparts from '@/components/Letterparts.vue'

export default {
  name: 'Letter',
  components: {
    Letterparts,
  },
  data: function(){
      return {
        item:  require('@/assets/letter/caset.png')
      }
  },
}
</script>