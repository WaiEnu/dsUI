<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row>
      <v-col cols="2">
      <v-img
        :src="require('@/assets/letter/copy_ico.png')"
        contain
        alt=""
        class="Img">
      </v-img>
      </v-col>
      <v-col cols="10">
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
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
      <v-img
        :src="require('@/assets/letter/tape_ico.png')"
        contain
        alt=""
        class="Img">
      </v-img>
      </v-col>
      <v-col cols="10">
      <ul class="list">
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
    <v-row>
      <v-col cols="2">
      <v-img
        :src="require('@/assets/letter/tran_ico.png')"
        contain
        alt=""
        class="Img">
      </v-img>
      </v-col>
      <v-col cols="10">
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
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-btn>ロボット</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn>伝票</v-btn>
      </v-col>
      <v-col cols="4">
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
      stt: [2,0,3],
      stps: [[1,3,3],[1,3,4],[0,3,2]], 
      list: 3, 
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