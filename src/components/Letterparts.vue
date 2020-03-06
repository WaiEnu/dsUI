<template>
  <div class="graphparts">
    <div class="contents">
      <div>
        <ul class="list">
          <transition-group name="flip">
            <template v-for="item in letter(align)">
              <li :key="item.id" class="item" :id="item.id">
                <div class="item__text">{{ item.text }}</div>
              </li>
            </template>
          </transition-group>
        </ul>
        <div><button>ロボット</button>
        <button>伝票</button></div>
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
      dna: ['A','G','C','T'],
      stt: 'TAC',
      stps: ['ATT','ATC','ACT'],
      list: 3,
      GC: 0.50,
    }
  },
  computed: {
    align(){
      return this.$data.stt + makeDNA(this.$data.list*3,this.$data.GC) + this.$data.stps[Math.floor(this.$data.stps.length * Math.random())]
    } 
  },
  methods: {
    letter(str){
      const letters=str.split('');
      let newseq=[]
      for (var i = 0; i < letters.length; i++) {
        newseq.push( {'id':'id_'+i,'text':letters[i]});
      }
      return newseq
    }
  }
}
function makeDNA(size,GC) {
	var newseq="";
	var letter="";
	for (var i = 0; i < size; i++) {
    if (rnd() < GC) {
      letter=(rnd()<0.5) ? "C" : "G";
    } else {
      letter=(rnd()<0.5) ? "T" : "A";
    }
    newseq+=letter;
	}
	return newseq;
}
rnd.today=new Date();
rnd.seed=rnd.today.getTime();
function rnd() {
  rnd.seed = (rnd.seed*9301+49297) % 233280;
  return rnd.seed/(233280.0);
}
</script>