<template>
  <div class="graphparts">
    <div class="contents" v-if="activePageName == 'origin'">
      <div id="graph_origin">
        ## graph_o ##
      </div>
      <div id="graph_mutate">
        ## graph_m ##
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Graphparts',
}
</script>