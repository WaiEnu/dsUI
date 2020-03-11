<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-layout wrap align-center justify-space-around>
      <v-flex lg8 md10 xs10>
        <v-card>
          <v-img
            :src="item"
            position="left top"
            alt=""
            class="bgImg">
            <Aboutview/>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>           
</template>

<script>
// @ is an alias to /src
import Aboutview from '@/components/Aboutview.vue'

export default {
  name: 'About',
  components: {
    Aboutview,
  },
  data: function(){
      return {
        item:  require('@/assets/about/pagecnt.png')
      }
  },
}
</script>