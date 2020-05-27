<template>
<v-card
  outlined=""
  :title="element.name"
  :class='`element element-${element.number} ${element.category}`'
  @dblclick="showElem(element.number)">
    <div class="number">{{ element.number }}</div>
    <div class="symbol">{{ element.symbol }}</div>
    <div class="element-name">{{ element.name }}</div>
  </v-card>
</template>

<script>
export default {
  name: 'Element',
  props:{
    element:Object,
  },
  data() {
    return {
    }
  },
  methods:{
    showElem:function(num){
      this.$router.push({ name: 'ElementPage', params: { id: num-1 } })
    }
  },
}
</script>