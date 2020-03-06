<template>
  <div class="graphparts">
    <div class="contents vs">
      <div class="vs-cnt">
        <ul class="list">
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
      </div>
      <div class="vs-modal" style="display: block;">
        <ul class="list">
          <transition-group name="flip">
            <template v-for="item in letter">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text">{{ item.text }}</div>
                <div class="item__"></div>
              </li>
            </template>
          </transition-group>
        </ul>
      </div>
      <div class="vs-button">
        <button>ロボット</button>
        <button>伝票</button>
        <button @click="reset()">リセット</button>
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
      list: 3, 
    }
  },
  computed: { 
    align: function (){ 
      return this.$data.stt + this.makeDNA(this.$data.list*3,this.$data.GC) + this.$data.stps[Math.floor(this.$data.stps.length * Math.random())] 
    }, 
    alignX: function (){
      const index=Math.floor(rnd()*this.align.length);
      const flg=Math.floor(rnd()*4);
      const lettersX=this.rndDNA(this.align,index,flg);
      return lettersX
    },
    letter: function (){
      const letters=this.align.split('');
      return this.newSeq(letters)
    },
    letterX: function (){
      const lettersX=this.alignX.split('');
      return this.newSeq(lettersX)
    }
  },
  methods: {
    makeDNA: function (size,GC=0.50) { 
      var newseq=""; 
      var letter=""; 
      for (var i = 0; i < size; i++) { 
        if (rnd() < GC) { 
          letter=(rnd()<0.5) ? this.$data.acd[3] : this.$data.acd[1]; 
        } else { 
          letter=(rnd()<0.5) ? this.$data.acd[2] : this.$data.acd[0]; 
        }
        newseq+=letter; 
      } 
      return newseq; 
    },
    rndDNA: function (str, index, ins) {
      if(ins==4){
        return str.slice(0, index)  + str.slice(index+1, str.length);
      }else{
        return str.slice(0, index) + this.$data.acd[ins] + str.slice(index, str.length);
      }
    },
    newSeq: function (letters) {
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        const num=i+1
        newseq.push( {'id':'id_'+num,'text':letters[i]});
      }
      return newseq
    },
    onDeleteClick: function (item) {
      const index = this.letterX.indexOf(item);
      this.letterX.splice(index, 1);
    },
    reset: function () {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
rnd.today=new Date(); 
rnd.seed=rnd.today.getTime(); 
function rnd() { 
  rnd.seed = (rnd.seed*9301+49297) % 233280; 
  return rnd.seed/(233280.0); 
} 
</script>