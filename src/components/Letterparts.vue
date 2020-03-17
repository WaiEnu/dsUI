<template>
  <v-container
    class="fill-height pa-4"
    fluid
  >
    <v-row no-gutters="">
      <v-col cols="2">
        <v-img
          :src="require('@/assets/about/tape.png')"
          width="80"
          height="80"
          contain
          alt=""
          class="mx-auto">
        </v-img>
      </v-col>
      <v-col cols="10">
        <ul class="list pl-0">
          <transition-group name="flip">
            <template v-for="item in letterX">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text dna" :class="getDna(item.text)"></div>
              </li>
            </template>
          </transition-group>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters="">
      <v-col cols="2">
        <v-img
          :src="require('@/assets/about/copy.png')"
          width="80"
          height="80"
          contain
          alt=""
          class="mx-auto">
      </v-img>
      </v-col>
      <v-col cols="10">
        <ul class="list pl-0">
          <transition-group name="flip">
            <template v-for="item in copyX">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text rna" :class="getRna(item.text)" @click="onIndexClick(item.id)"></div>
              </li>
            </template>
          </transition-group>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters="">
      <v-col cols="2">
        <v-img
          :src="require('@/assets/about/transfar.png')"
          width="60"
          height="60"
          contain
          alt=""
          class="mx-auto">
      </v-img>
      </v-col>
      <v-col cols="10">
        <ul class="list pl-0">
          <transition-group name="flip">
            <template v-for="item in codonX">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text trna">{{ item.text }}</div>
              </li>
            </template>
          </transition-group>
        </ul>
      </v-col>
    </v-row>
    <v-row no-gutters="">
      <v-col cols="4" class="text-center pa-2">
        <v-btn @click="showDialog()">ロボット</v-btn>
        <app-dialog :success="isRobot" v-on:call-next="next" ref="dialog"></app-dialog>
      </v-col>
      <v-col cols="4" class="text-center pa-2">
        <v-btn @click="showTable()">ヒント</v-btn>
        <app-table ref="table"></app-table>
      </v-col>
      <v-col cols="4" class="text-center pa-2">
        <v-btn @click="reset()">リセット</v-btn>
      </v-col>
    </v-row>
    <template>
      <div>
      </div>
    </template>
  </v-container>
</template>
<style lang="scss">
.dna{
	background-size: 100% 100%;
  &.A{background-image:url('../assets/data/D_Adenin.png')}
  &.G{background-image:url('../assets/data/D_Guanin.png')}
  &.T{background-image:url('../assets/data/D_Timin.png')}
  &.C{background-image:url('../assets/data/D_Citosin.png')}
}
.rna{
	background-size: 100% 100%;
  &.U{background-image:url('../assets/data/R_Urasil.png')}
  &.C{background-image:url('../assets/data/R_Citosin.png')}
  &.A{background-image:url('../assets/data/R_Adenin.png')}
  &.G{background-image:url('../assets/data/R_Guanin.png')}
}
.trna{
	background-size: 100% 100%;
  background-image:url('../assets/data/tRNA.png');
}
</style>
<script>
// import l_ from 'lodash'
  import LetterpartsTable from "@/components/LetterpartsTable.vue";
  import LetterpartsDialog from "@/components/LetterpartsDialog.vue";
  export default {
  name: 'Letterparts',
  components: {
    appTable: LetterpartsTable,
    appDialog: LetterpartsDialog,
  },
  data() {
    return {
      ali: [[2,0,3,0,3,3,0,1,3,3,0,2,0,3,2]],
      alX: [[2,0,3,0,3,3,0,1,3,3,0,3,0,2,2,2,3]],
      rnk: 0,
      index:100000,
      dna: ['A','G','T','C'],
      rna: ['U','C','A','G'],
      cdn:[[['F','F','L','L'],['S','S','S','S'],['Y','Y','x','x'],['C','C','x','W']],[['L','L','L','L'],['P','P','P','P'],['H','H','Q','Q'],['R','R','R','R']],[['I','I','I','M'],['T','T','T','T'],['N','N','K','K'],['S','S','R','R']],[['V','V','V','V'],['A','A','A','A'],['D','D','E','E'],['G','G','G','G']]],
    }
  },
  computed: {
    alignX: function (){
      return this.$data.alX[this.$data.rnk]
    },
    letterX: function (){
      return this.Seq(this.alignX)
    },
    copyX: function (){
      return this.Seq(this.alignX)
    },
    codonX: function (){
      return this.makecodon(this.$data.index)
    },
    isRobot: function () {
      return this.Robot();
    },
  },
  methods: {
    Seq: function (letters) {
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        const num=letters[i]
        newseq.push( {'id':i,'text':num});
      }
      return newseq
    },
    getDna: function (l) {
      return this.$data.dna[l]
    },
    getRna: function (l) {
      return this.$data.rna[l]
    },
    getAmino: function (l,m,n) {
      return this.$data.cdn[l][m][n]
    },
    Robot: function () {
      let letters=this.makecodon(this.$data.index);
      let flg=false;
      if(letters.length>1){
        flg = (letters[0].text === "M" &&  letters[letters.length-1].text === "x");
      }
      return flg;
    },
    makecodon: function (s){
      let letters = this.alignX;
      const n = 2;
      let codon = [];
      let i = 1;
      let d = s + n;
      // if((s<letters.length-2) && (this.getAmino(letters[s],letters[s+1],letters[s+2])=="M")){
        while(d < letters.length){
          let val=this.getAmino(letters[d-n],letters[d-n+1],letters[d-n+2]);
          codon.push({'id':i,'text':val});
          if(val=="x"){break;}
          d += 3;
          i ++;
        }
      // }
      return codon;
    },
    onIndexClick: function (item) {
      this.$data.index=item;
    },
    showTable: function () {
      this.$refs.table.open();
    },
    showDialog: function () {
      this.$refs.dialog.open();
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
    },
  }
}
</script>