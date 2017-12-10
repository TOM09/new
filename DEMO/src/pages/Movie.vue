<template>
  <div class="home">
  	<VueTitle></VueTitle>
    <ReYing></ReYing>
    <Top100></Top100>
    <New></New>
    
  </div>
</template>

<script>
import VueTitle from '../components/VueTitle'
import ReYing from '../components/ReYing'
import Top100 from '../components/Top100'
import New from '../components/New'


export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    VueTitle,ReYing,Top100,New
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
