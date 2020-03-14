<template>
  <v-container
    class="fill-height pa-5"
    fluid
  >
    <v-row no-gutters="" class="pa-2">
      <v-col cols="2">
        <v-img
          :src="require('@/assets/about/tape.png')"
          width="60"
          height="60"
          contain
          alt=""
          class="mx-auto Img">
        </v-img>
      </v-col>
      <v-col cols="10">
        <ul class="list pl-0">
          <transition-group name="flip">
            <template v-for="item in letterX">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text">{{ item.text }}</div>
                <div class="item__delete" @click="onDeleteClick(item.id)"></div>
                <div class="item__add"></div>
              </li>
            </template>
          </transition-group>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters="" class="pa-2">
      <v-col cols="2">
        <v-img
          :src="require('@/assets/about/copy.png')"
          width="60"
          height="60"
          contain
          alt=""
          class="mx-auto Img">
      </v-img>
      </v-col>
      <v-col cols="10">
        <ul class="list pl-0">
          <transition-group name="flip">
            <template v-for="item in copyX">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text">{{ item.text }}</div>
              </li>
            </template>
          </transition-group>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters="" class="pa-2">
      <v-col cols="2">
        <v-img
          :src="require('@/assets/about/transfar.png')"
          width="60"
          height="60"
          contain
          alt=""
        class="mx-auto Img">
      </v-img>
      </v-col>
      <v-col cols="10">
        <ul class="list pl-0">
          <transition-group name="flip">
            <template v-for="item in codonX">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text">{{ item.text }}</div>
                <div class="item__"></div>
              </li>
            </template>
          </transition-group>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters="">
      <v-col cols="4" class="text-center pa-2">
        <v-btn @click="onRobotClick()">ロボット</v-btn>
      </v-col>
      <v-col cols="4" class="text-center pa-2">
        <v-btn>伝票</v-btn>
      </v-col>
      <v-col cols="4" class="text-center pa-2">
        <v-btn @click="reset()">リセット</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import l_ from 'lodash'
export default {
  name: 'Letterparts',
  data() {
    return {
      rnk: 0,
      ali: [[2,0,3,0,3,3,0,1,3,0,2,3,0,3,2]],
      alX: [[2,0,3,0,3,3,0,1,3,0,2,3,3,0,3,2]],
      tmp: [[2,0,3,0,3,3,0,1,3,0,2,3,3,0,3,2]],
      dna: ['A','G','T','C'],
      rna: ['U','C','A','G'],
      cdn:[[['F','F','L','L'],['S','S','S','S'],['Y','Y','x','x'],['C','C','x','W']],[['L','L','L','L'],['P','P','P','P'],['H','H','Q','Q'],['R','R','R','R']],[['I','I','I','M'],['T','T','T','T'],['N','N','K','K'],['S','S','R','R']],[['V','V','V','V'],['A','A','A','A'],['D','D','E','E'],['G','G','G','G']],],
    }
  },
  computed: {
    alignX: function (){
      return this.$data.alX[this.$data.rnk]
    },
    letterX: function (){
      return this.newSeq(this.alignX)
    },
    copyX: function (){
      return this.tranSeq(this.alignX)
    },
    codonX: function (){
      return this.makecodon(this.alignX)
    },
    alignI: function (){
      return this.$data.ali[this.$data.rnk]
    },
    codonI: function (){
      return this.makecodon(this.alignI)
    },
  },
  methods: {
    newSeq: function (letters) {
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        const num=letters[i]
        newseq.push( {'id':i,'text':this.$data.dna[num]});
      }
      return newseq
    },
    tranSeq: function (letters) {
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        const num=letters[i]
        newseq.push( {'id':i,'text':this.$data.rna[num]});
      }
      return newseq
    },
    makecodon(letters){
      const n = 3;
      let codon = [];
      let i = 1;
      let d = 3;
      while(d < letters.length){
        codon.push({'id':i,'text':this.$data.cdn[letters[d-n]][letters[d-n+1]][letters[d-n+2]]});
        d += n;
        i ++;
      }
      return codon;
    },
    onDeleteClick: function (item) {
      const index = item;
      this.alignX.splice(index, 1);
    },
    onRobotClick: function () {
      if(JSON.stringify(this.codonX) === JSON.stringify(this.codonI)){
        alert('sucsess');
        this.next();
      }else{
        alert('failed')
      }
      return ;
    },
    next: function () {
      if(this.$data.rnk+1<this.$data.ali.length){
        this.$data.rnk++
      }else{
        this.$router.go({path: this.$router.currentRoute.path, force: true})
      }
    },
    reset: function () {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>