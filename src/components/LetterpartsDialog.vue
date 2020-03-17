<template>
  <v-dialog v-model="dialog" width="60vw" max-width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        <span v-if="success">せいこう！</span>
        <span v-else>しっぱい…</span>
      </v-card-title>
      <v-card-text class="px-2 py-0">
        <span v-if="success">せいこう！</span>
        <span v-else>しっぱい…</span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="success"
          color="primary"
          @click="goesNext()">
          OK
        </v-btn>
        <v-btn
          v-else
          color="primary"
          @click="close()">
          もう一回
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:["success"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    open: function () {
      this.dialog = true;
    },
    close: function () {
      this.dialog = false;
    },
    goesNext: function () {
      this.dialog = false;
      this.$emit('call-next')
    },
  }
}
</script>
