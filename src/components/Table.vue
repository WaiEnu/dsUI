<template>
<v-sheet class="table">
  <div
    v-for="element in elements"
    :key="element.number"
    :style='`grid-column-start:${element.xpos}; grid-row-start:${element.ypos};`'
    @mouseenter="getCurrent(element)"
    @mouseleave="clearCurrent()">
    <Element :element="element"/>
  </div>
  <Info :element="current"/>
</v-sheet>
</template>

<script>
import elements from '@/assets/elements.json';
import Element from '@/components/Element';
import Info from '@/components/Info';

export default {
  name: 'Table',
  components: {
    Element,
    Info,
  },
  data() {
    return {
      elements: elements,
      current: null,
      currentForTrend: null,
    }
  },
  methods:{
    getCurrent: function (element){
      this.current = element;
      this.currentForTrend = element;
    },
    clearCurrent: function (){
      this.currentForTrend = null;
    }
  },
}
</script>
