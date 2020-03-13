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
            <template v-for="item in codon">
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
        <v-btn>ロボット</v-btn>
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
      ali: [2,0,3,0,3,3,0,1,3,0,2,3,0,3,2],
      alX: [2,0,3,0,3,3,0,1,3,0,2,2,3,0,3,2],
      dna: ['A','G','T','C'],
      rna: ['U','C','A','G'],
      cdn: [
        {amino:'F',codon:['000','001']},
        {amino:'L',codon:['002','003','100','101','102','103']},
        {amino:'I',codon:['200','201','202']},
        {amino:'M',codon:['203']},
        {amino:'V',codon:['300','301','302','303']},
        {amino:'S',codon:['010','011','012','013','230','231']},
        {amino:'P',codon:['110','111','112','113']},
        {amino:'T',codon:['210','211','212','213']},
        {amino:'A',codon:['310','311','312','313']},
        {amino:'Y',codon:['020','021']},
        {amino:'H',codon:['120','121']},
        {amino:'Q',codon:['122','123']},
        {amino:'N',codon:['220','221']},
        {amino:'K',codon:['222','223']},
        {amino:'D',codon:['320','321']},
        {amino:'E',codon:['322','323']},
        {amino:'C',codon:['030','031']},
        {amino:'W',codon:['033']},
        {amino:'R',codon:['130','131','132','133','232','233']},
        {amino:'G',codon:['330','331','332','333']},
        {amino:'STOP',codon:['022','023','032']}
      ],
    }
  },
  computed: {
    letter: function (){
      return this.newSeq(this.$data.ali)
    },
    letterX: function (){
      return this.newSeq(this.$data.alX)
    },
    copyX: function (){
      return this.tranSeq(this.$data.alX)
    },
    codon: function (){
      return this.makecodon(this.$data.alX)
    }
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
      let idx = 3;
      while(idx < letters.length){
        let val=[letters[idx-n],letters[idx-n+1],letters[idx-n+2]].join('');
        codon.push({'id':i,'text':this.transcodon(val)});
        idx += n;
        i ++;
      }
      return codon;
    },
    transcodon(val){
      let key = this.$data.cdn.filter(e => e.codon == val);
      return key.amino;
    },
    onDeleteClick: function (item) {
      const index = item;
       this.$data.alX.splice(index, 1);
    },
    reset: function () {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>