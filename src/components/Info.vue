<template>
  <v-card class="d-flex flex-row justify-space-around text-center">
    <v-card
      outlined=""
      :title="element.name"
      :class="`einfo element element-${element.number} ${category[1]}`">
      <div class="number">{{ element.number }}</div>
      <div class="symbol">{{ element.symbol }}</div>
      <div class="element-name">{{ element.name }}</div>
    </v-card>
    <v-card class="infoCard d-flex flex-column justify-space-around text-center">
      <div class="d-flex flex-column justify-space-around">
        <div class="info_data" >{{ element.number }} - {{ element.name }}</div>
        <span :class='`txt-${category[1]}`'>{{ category[0] }}</span>
      </div>
      <div class="d-flex flex-row justify-space-around align-center">
        <div>
          <span>phase:</span>
          <div class="info_data">{{ fixed(element.phase) }}</div>
        </div>
        <div>
          <span>density:</span>
          <div class="info_data">{{ fixed(element.density) }}</div>
        </div>
        <div>
          <span>atomic mass:</span>
          <div class="info_data">{{ fixed(element.atomic_mass) }}</div>
        </div>
      </div>
    </v-card>
  </v-card>
</template>    

<script>
export default {
  name: 'Info',
  props:{
    element:Object,
    category: Array,
  },
  data() {
    return {
    }
  },
  methods:{
    fixed:function(num){
      if(!num){
        return "unknown";
      }else{
        return isNaN(num) ? num : num.toFixed(3)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.txt-alkali {
  color: rgba(114, 47, 61, 0.8);
}
.txt-alkaliEarth {
  color: rgba(95, 70, 55, 0.8);
}
.txt-transitionMetal {
  color: rgba(58, 70, 90, 0.8);
}
.txt-noble {
  color: rgba(87, 49, 126, 0.8);
}
.txt-halogen {
  color: rgba(77, 74, 150, 0.8);
}
.txt-nonMetal {
  color: rgba(53, 54, 119, 0.8);
}
.txt-metalloid {
  color: rgba(21, 84, 100, 0.8);
}
.txt-postTransition {
  color: rgba(28, 100, 73, 0.8);
}
.txt-lanthanoid {
  color: rgba(74, 57, 110, 0.8);
}
.txt-actinoid {
  color: rgba(64, 37, 80, 0.8);
}
.alkali {
  background-color: rgba(114, 47, 61, 0.8);
  &:hover {
    background-color: rgba(100, 50, 60, 0.5);
  }
}
.alkaliEarth {
  background-color: rgba(95, 70, 55, 0.8);
  &:hover {
    background-color: rgba(93, 73, 61, 0.5);
  }
}
.transitionMetal {
  background-color: rgba(58, 70, 90, 0.8);
  &:hover {
    background-color: rgba(59, 73, 98, 0.5);
  }
}
.noble {
  background-color: rgba(87, 49, 126, 0.8);
  &:hover {
    background-color: rgba(96, 60, 130, 0.5);
  }
}
.halogen {
  background-color: rgba(77, 74, 150, 0.8);
  &:hover {
    background-color: rgba(102, 100, 161, 0.5);
  }
}
.nonMetal {
  background-color: rgba(53, 54, 119, 0.8);
  &:hover {
    background-color: rgba(46, 48, 108, 0.5);
  }
}
.metalloid {
  background-color: rgba(21, 84, 100, 0.8);
  &:hover {
    background-color: rgba(34, 74, 106, 0.5);
  }
}
.postTransition {
  background-color: rgba(28, 100, 73, 0.8);
  &:hover {
    background-color: rgba(34, 94, 79, 0.5);
  }
}
.lanthanoid {
  background-color: rgba(74, 57, 110, 0.8);
  &:hover {
    background-color: rgba(80, 67, 111, 0.5);
  }
}
.actinoid {
  background-color: rgba(64, 37, 80, 0.8);
  &:hover {
    background-color: rgba(62, 41, 73, 0.5);
  }
}
</style>