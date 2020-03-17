<template>
  <v-dialog v-model="table" width="60vw" max-width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        暗号表
      </v-card-title>
      <v-card-text class="px-2 py-0">
        <v-simple-table dense>
          <thead>
            <tr>
              <td></td><td colspan="2">U</td><td colspan="2">C</td><td colspan="2">A</td><td colspan="2">G</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="4">U</td><td>UUU</td><td>F</td><td>UCU</td><td>S</td><td>UAU</td><td>Y</td><td>UGU</td><td>C</td>
            </tr>
            <tr>
              <td>UUC</td><td>F</td><td>UCC</td><td>S</td><td>UAC</td><td>Y</td><td>UGC</td><td>C</td>
            </tr>
            <tr>
              <td>UUA</td><td>L</td><td>UCA</td><td>S</td><td>UAA</td><td>x</td><td>UGA</td><td>x</td>
            </tr>
            <tr>
              <td>UUG</td><td>L</td><td>UCG</td><td>S</td><td>UAG</td><td>x</td><td>UGG</td><td>W</td>
            </tr>
            <tr>
              <td rowspan="4">C</td><td>CUU</td><td>L</td><td>CCU</td><td>P</td><td>CAU</td><td>H</td><td>CGU</td><td>R</td>
            </tr>
            <tr>
              <td>CUC</td><td>L</td><td>CCC</td><td>P</td><td>CAC</td><td>H</td><td>CGC</td><td>R</td>
            </tr>
            <tr>
              <td>CUA</td><td>L</td><td>CCA</td><td>P</td><td>CAA</td><td>Q</td><td>CGA</td><td>R</td>
            </tr>
            <tr>
              <td>CUG</td><td>L</td><td>CCG</td><td>P</td><td>CAG</td><td>Q</td><td>CGG</td><td>R</td>
            </tr>
            <tr>
              <td rowspan="4">A</td><td>AUU</td><td>I</td><td>ACU</td><td>T</td><td>AAU</td><td>N</td><td>AGU</td><td>S</td>
            </tr>
            <tr>
              <td>AUC</td><td>I</td><td>ACC</td><td>T</td><td>AAC</td><td>N</td><td>AGC</td><td>S</td>
            </tr>
            <tr>
              <td>AUA</td><td>I</td><td>ACA</td><td>T</td><td>AAA</td><td>K</td><td>AGA</td><td>R</td>
            </tr>
            <tr>
              <td>AUG</td><td>M</td><td>ACG</td><td>T</td><td>AAG</td><td>K</td><td>AGG</td><td>R</td>
            </tr>
            <tr>
              <td rowspan="4">G</td><td>GUU</td><td>V</td><td>GCU</td><td>A</td><td>GAU</td><td>D</td><td>GGU</td><td>G</td>
            </tr>
            <tr>
              <td>GUC</td><td>V</td><td>GCC</td><td>A</td><td>GAC</td><td>D</td><td>GGC</td><td>G</td>
            </tr>
            <tr>
              <td>GUA</td><td>V</td><td>GCA</td><td>A</td><td>GAA</td><td>E</td><td>GGA</td><td>G</td>
            </tr>
            <tr>
              <td>GUG</td><td>V</td><td>GCG</td><td>A</td><td>GAG</td><td>E</td><td>GGG</td><td>G</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="close()">
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      table: false
    };
  },
  methods: {
    open() {
      this.table = true;
    },
    close() {
      this.table = false;
    }
  }
}
</script>
