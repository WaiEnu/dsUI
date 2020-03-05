<template>
  <div class="result">
    <Graphparts/>
  </div>
</template>

<script>
// @ is an alias to /src
import Graphparts from '@/components/Graphparts.vue'

export default {
  name: 'Graph',
  components: {
    Graphparts,
  }
}
</script>