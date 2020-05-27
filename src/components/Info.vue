<template>
<div class="elemInfo">
  <div class="d-flex flex-row justify-space-between" v-if="element">
    <Element class="einfo" :element="element" />
    <div class="infoCard text-left">
      <div class="info_data" :class="element.category">{{element.category}}</div>
      <div class="info_data">atomic mass:{{element.atomic_mass}}</div>
      <div class="info_data">density:{{element.density}}</div>
      <div class="info_data">phase:{{element.phase}}</div>
    </div>
    <v-card class="einfo shell">
      shell:{{element.shells}}
    </v-card>
  </div>
  <div class="d-flex flex-row" v-else>
    <v-card class="infoi">ホバーorクリックで表示、ダブルクリックで詳細</v-card>
  </div>
</div>
</template>    

<script>
import Element from '@/components/Element';

export default {
  name: 'Info',
  props:["element"],
  components: {
    Element,
  },
  data() {
    return {
    }
  },
  methods:{
  },
}
</script>