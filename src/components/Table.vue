<template>
<v-sheet class="table">
  <div
    v-for="element in elements"
    :key="element.number"
    :style='`grid-column-start:${element.xpos}; grid-row-start:${element.ypos};`'
    @mouseenter="getCurrent(element)"
    @mouseleave="clearCurrent()">
    <Element
      :category="setClassify(element)"
      :element="element"/>
  </div>
  <div class="elemInfo">
    <div class="d-flex flex-row justify-space-between" v-if="current">
      <Info
        :category="setClassify(current)"
        :element="current"/>
    </div>
    <div class="d-flex flex-row" v-else>
      <v-card class="infoi">ホバーorクリックで表示、ダブルクリックで詳細</v-card>
    </div>
  </div>
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
      nonMetal: [1, 6, 7, 8, 15, 16, 34],
      alkali: [3, 11, 19, 37, 55, 87],
      akaliEarth: [4, 12, 20, 38, 56, 88],
      transitionMetal: [21, 22,23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 72, 73, 74, 75, 76, 77, 78, 79, 80, 104, 105, 106, 107, 108, 109, 110, 111, 112],
      postTransition: [13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116],
      metalloid: [5, 14, 32, 33, 51, 52, 84],
      halogen: [9, 17, 35, 53, 85, 117],
      noble: [2, 10, 18, 36, 54, 86, 118],
      lanthanoid: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
      actinoid: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103],
      elements: elements,
      current: null,
      currentForTrend: null,
    }
  },
  methods:{
    classify: function (n){
      if (this.nonMetal.includes(n)) {
          if ([7, 8].indexOf(n) > -1) {
              return [
                  "Diatomic Nonmetal",
                  "nonMetal",
                  "rgba(91, 93, 153, 0.9)",
                  "rgba(51, 53, 113, 1)"
              ];
          } else {
              return [
                  "Polyatomic Nonmetal",
                  "nonMetal",
                  "rgba(86, 88, 148, 0.9)",
                  "rgba(56, 58, 118, 1)"
              ];
          }
      } else if (this.alkali.includes(n)) {
          return [
              "Alkali Metal",
              "alkali",
              "rgba(120, 80, 90, 0.9)",
              "rgba(85, 45, 55, 1)"
          ];
      } else if (this.akaliEarth.includes(n)) {
          return [
              "Alkali Earth Metal",
              "alkaliEarth",
              "rgba(133, 113, 101, 0.9)",
              "rgba(83, 63, 51, 1)"
          ];
      } else if (this.transitionMetal.includes(n)) {
          return [
              "Transition Metal",
              "transitionMetal",
              "rgba(99, 113, 138, 0.9)",
              "rgba(54, 68, 93, 1)"
          ];
      } else if (this.postTransition.includes(n)) {
          return [
              "Post Transition Metal",
              "postTransition",
              "rgba(74, 134, 119, 0.9)",
              "rgba(34, 84, 79, 1)"
          ];
      } else if (this.halogen.includes(n)) {
          return [
              "Halogen",
              "halogen",
              "rgba(122, 120, 181, 0.9)",
              "rgba(57, 55, 106, 1)"
          ];
      } else if (this.noble.includes(n)) {
          return [
              "Noble Gas",
              "noble",
              "rgba(136, 100, 170, 0.9)",
              "rgba(76, 40, 110, 1)"
          ];
      } else if (this.lanthanoid.includes(n)) {
          return [
              "Lanthanoid",
              "lanthanoid",
              "rgba(120, 107, 151, 0.9)",
              "rgba(70, 57, 101, 1)"
          ];
      } else if (this.actinoid.includes(n)) {
          return [
              "Actinoid",
              "actinoid",
              "rgba(110, 89, 121, 0.9)",
              "rgba(62, 41, 73, 1)"
          ];
      } else if (this.metalloid.includes(n)) {
          return [
              "Metalloid",
              "metalloid",
              "rgba(74, 114, 146, 0.9)",
              "rgba(27, 67, 99, 1)"
          ];
      }
    },
    setClassify:function (element){
      let classify = this.classify(element.number);
      return classify;
    },
    getCurrent: function (element){
      this.current = element;
      this.currentForTrend = element;
    },
    clearCurrent: function (){
      this.currentForTrend = null;
    },
  },
}
</script>
