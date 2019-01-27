<template>
  <div class="home">
    <welcome />
    <single-decode />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import SingleDecode from '@/components/SingleDecode.vue'

export default {
  name: 'home',
  components: {
    Welcome,
    SingleDecode
  }
}
</script>
