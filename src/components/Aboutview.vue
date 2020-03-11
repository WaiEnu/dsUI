<template>
<v-carousel
  height="100%"
  hide-delimiter-background
  show-arrows-on-hover
>
  <v-carousel-item
    v-for="slide in slides"
    :key="slide.id"
  >
    <v-sheet
      light=""
      color="transparent"
    >
      <v-container
        class="fill-height">
        <v-row>
          <v-col cols="12">
            <div class="display-3 slideH">
              {{ slide.title }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
          <v-img
            :src="slide.src"
            contain
            alt=""
            class="bgImg">
          </v-img>
          </v-col>
          <v-col cols="8">
            <div class="display-1">
              {{ slide.text }}
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-carousel-item>
</v-carousel>
</template>

<style lang="scss">
.slideH{
  background-image: url('../assets/about/titleLine.png') ;
  background-position: bottom center;
	background-size:contain;
}
.slideH::before{
	content:"";
	display:inline-block;
	width:1em;
	height:1em;
	background:url('../assets/about/titleP.png') no-repeat;
	background-size:contain;
}
</style>
<script>
export default {
  name: 'Aboutview',
  data () {
    return {
      slides: [
        {'id':1,'title':'First Slide','text':'this is First','src':require('@/assets/about/tape.png')}
        ,{'id':2,'title':'Second Slide','text':'this is Second','src':require('@/assets/about/copy.png')}
        ,{'id':3,'title':'Third Slide','text':'this is Third','src':require('@/assets/about/transfar.png')}
      ],
    }
  },
}
/***
../assets/about/ATCG.png
../assets/about/next.png
../assets/about/pagecnt.png
..


../assets/about/UACG.png
 */
</script>
