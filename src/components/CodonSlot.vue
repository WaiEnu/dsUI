<template>
<div>
  <div>
    <v-row no-gutters="">
      <v-col
        cols="4"
        class="text-center pa-2"
        v-for="index in 3"
        :key="index">
        <v-select
          class="select-center"
          v-model="selections[index - 1]"
          :items="dna"
          outlined></v-select>
      </v-col>
    </v-row>
    <transition name="flip">
    <v-row no-gutters="" v-if="completed()">
      <v-col
        cols="4"
        class="text-center pa-2"
        v-for="chosen in selections"
        :key="chosen.index">
        <div class="selectedT pa-4">{{getRNA(chosen)}}</div>
      </v-col>
    </v-row>
    </transition>
    <transition name="flip">
    <v-row no-gutters="" v-if="completed()">
      <v-col cols="12"
        class="text-center pa-2 mx-auto">
        <div class="selectedT pa-4">{{getCodon(selections)}}</div>
      </v-col>
    </v-row>
    </transition>
  </div>
  <div>
  </div>
  <div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CodonSlot',
  data: function(){
    return {
      dna: this.$store.getters['dna'],
      rna: this.$store.getters['rna'],
      cdn: this.$store.getters['cdn'],
      selections: [],
    }
  },
  methods: {
    completed: function(){
      return (this.$data.selections.length==3);
    },
    getRNA: function(i){
      return this.$data.rna[this.$data.dna.indexOf(i)];
    },
    getCodon: function(arr){
      let c = '';
      if (this.completed()){
        const l=this.$data.dna.indexOf(arr[0]);
        const n=this.$data.dna.indexOf(arr[1]);
        const m=this.$data.dna.indexOf(arr[2]);
        c = this.$data.cdn[l][m][n];
      }
      return  c;
    }
  }
}
</script>