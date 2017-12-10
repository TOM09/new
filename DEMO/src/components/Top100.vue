<template>
  <div class="top100">
    <MovieApi v-bind:blogs="shuju"></MovieApi>
  </div>
</template>

<script>
import MovieApi from '../components/MovieApi'

export default {
  name: 'top100',
  data () {
    return {
    	shuju:[]
    }
  },
  components: {
    MovieApi
  },
   created(){
  	this.$http.get('/api/movie/top250').then(function(asdf){
  			this.shuju = asdf.body.subjects;
  	})
  }
}
</script>

<style scoped>
.top100{
	margin-top: 1rem;
}
</style>
