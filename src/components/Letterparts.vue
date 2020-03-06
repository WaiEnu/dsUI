<template>
  <div class="graphparts">
    <div class="contents">
      <div>
        <ul class="list">
          <transition-group name="flip">
            <template v-for="item in letterX">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text">{{ item.text }}</div>
              </li>
            </template>
          </transition-group>
        </ul>
        <div><button>ロボット</button>
        <button>伝票</button></div>
      </div>
      <div class="vs-modal" style="display: block;">
        <ul class="list">
          <transition-group name="flip">
            <template v-for="item in letter">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text">{{ item.text }}</div>
              </li>
            </template>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import l_ from 'lodash'
export default {
  name: 'Letterparts',
  data() {
    return {
      dna: 'TACACCAGCATCACT',
      acd: ['A','G','T','C'],
      stt: 'TAC',
      stps: ['ATT','ATC','ACT'],
    }
  },
  computed: {
    letter(){
      const letters=this.$data.dna.split('');
      return this.newSeq(letters)
    },
    letterX(){
      const letters=this.$data.dna.split('');
      const index=Math.floor(Math.random()*letters.length);
      const flg=Math.floor(Math.random()*5);
      const lettersX=this.rndDNA(letters,index,flg);
      return this.newSeq(lettersX)
    }
  },
  methods: {
    rndDNA(arr,index,flg) {
      const letters=arr;
      if(flg==5){
        letters.splice(index, 1); 
      }else{
        letters.splice(index, 0, this.$data.acd[flg]);
      }
      return letters;
    },
    newSeq(letters) {
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        newseq.push( {'id':'id_'+i+1,'text':letters[i]});
      }
      return newseq
    },
  }
}
</script>