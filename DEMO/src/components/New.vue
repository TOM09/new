<template>
  <div class="new">
    <MovieApi v-bind:blogs="shuju"></MovieApi>
  </div>
</template>

<script>
import MovieApi from '../components/MovieApi'

export default {
  name: 'new',
  data () {
    return {
    	shuju:[]
    }
  },
  components: {
    MovieApi
  },
   created(){
  	this.$http.get('/api/movie/coming_soon').then(function(asdf){
  			this.shuju = asdf.body.subjects;
  	})
  }
}
</script>

<style scoped>
.new{
	margin-top: 1rem;
}
</style>
