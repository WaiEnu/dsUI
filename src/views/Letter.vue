<template>
  <div class="letter">
    <Letterparts/>
  </div>
</template>

<script>
// @ is an alias to /src
import Letterparts from '@/components/Letterparts.vue'

export default {
  name: 'Letter',
  components: {
    Letterparts,
  }
}
</script>