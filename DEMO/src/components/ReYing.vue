<template>
  <div class="reying">
    <MovieApi v-bind:blogs="shuju"></MovieApi>
    <!--<star2 :size="size"  :score="score"></star2>-->
  </div>
</template>

<script>
import MovieApi from '../components/MovieApi'
//import star2 from '../components/star2'

export default {
  name: 'reying',
  data () {
    return {
    	shuju:[]
    }
  },
  components: {
    MovieApi
  },
   created(){
  	this.$http.get('/api/movie/in_theaters').then(function(asdf){
  			this.shuju = asdf.body.subjects;
  			console.log(asdf.body.subjects[1].rating.average)
  	})
  }
}
</script>

<style scoped>
.reying{
}
</style>
