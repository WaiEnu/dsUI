<template>
  <div class="form">
    <Formparts/>
    <Resultview/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formparts from '@/components/Formparts.vue'
import Resultview from '@/components/Resultview.vue'

export default {
  name: 'Form',
  components: {
    Formparts,
    Resultview,
  },
}
</script>