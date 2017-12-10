<template>
  <div class="Index">
  	<VueTitle></VueTitle>
  	我是Index
  </div>
</template>

<script>
import VueTitle from '../components/VueTitle'

export default {
  name: 'Index',
  data () {
    return {
    	blogs:[]
    }
  },
  components: {
  	VueTitle
  }
}
</script>

<style scoped>
</style>
