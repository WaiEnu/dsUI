<template>
  <div class="graphparts">
    <div class="contents">
      <div>
        <button @click="onShuffleClick">shuffle</button>
        <button @click="onAddButtonClick">add</button>
        <br>
        <ul class="list">
          <transition-group name="flip">
            <template v-for="item in $data.list">
              <li :key="item" class="item">
                <div class="item__text">{{ item }}</div>
                <div class="item__delete" @click="onDeleteClick(item)"></div>
              </li>
            </template>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import l_ from 'lodash'
export default {
  name: 'Letterparts',
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    onShuffleClick() {
      this.$data.list = l_.shuffle(this.$data.list);
    },
    onAddButtonClick() {
      const value = Math.max(...this.$data.list) + 1;
      const index = Math.floor(this.$data.list.length * Math.random());
      this.$data.list.splice(index, 0, value);
    },
    onDeleteClick(item) {
      const index = this.$data.list.indexOf(item);
      this.$data.list.splice(index, 1);
    }
  }
}
</script>