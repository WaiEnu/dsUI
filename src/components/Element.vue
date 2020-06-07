<template>
  <v-card
    outlined=""
    :title="element.name"
    :class="`element element-${element.number} ${category[1]}`"
    @dblclick="showElem(element.number)"
  >
    <div class="number">{{ element.number }}</div>
    <div class="symbol">{{ element.symbol }}</div>
    <div class="element-name">{{ element.name }}</div>
  </v-card>
</template>

<script>
export default {
  name: "Element",
  props: {
    element: Object,
    category: Array,
  },
  data() {
    return {
    };
  },
  methods: {
    showElem: function(num) {
      this.$router.push({
        name: "ElementPage",
        params: { id: num - 1 },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
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
