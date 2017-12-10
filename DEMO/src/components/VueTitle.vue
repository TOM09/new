<template>
  <div class="vue_title">
    <!--顶部title栏-->
		<div id="title">
			<a href="index.html" id="douban">
				<h1><a href="/">豆瓣</a></h1>
			</a>
			<nav id="titleRt">
				<ul id="ulTit">
					<li><a href="/movie" class="movie_nav">电影</a></li>
					<li><a href="book.html" class="book_nav">图书</a></li>
					<li>
						<a href="broadcast.html" class="radio_nav">广播</a></li>
					<li><a href="team.html" class="team_nav">小组</a></li>
					<li class="searchLi"><a href="/search" class="search"></a></li>
				</ul>

			</nav>
		</div>

  
  </div>
</template>

<script>
export default {
  name: 'vue_title',
  data () {
    return {
      msg: '我是vue_title啊啊啊啊啊'
    }
  }
}
</script>

<style scoped>

	#title {
	border-bottom: 0.04rem solid #f2f2f2;
	overflow: hidden;
	position: fix;
	box-sizing: border-box;
	width:100%;
	height: 1.88rem;
}

#douban {
	float: left;
	display: block;
	text-decoration: none;
	font-size: 0.46rem;
	line-height: 1.84rem;
	color: #03b334;
	width: 2.56rem;
	height: 1.84rem;
	padding-left: 0.72rem;
}

#titleRt {
	height: 1.84rem;
	width: 9.6rem;
	float: right;
	overflow: hidden;
	position: relative;
}

#ulTit {
	float: left;
	overflow: hidden;
	height: 1.84rem;
}

#ulTit li {
	float: left;
	line-height: 1.84rem;
	font-size: 0.64rem;
	padding-left: 0.6rem;
}

.movie_nav {
	color: #5c8dec;
}

.book_nav {
	color: #a57a4d;
}

.radio_nav{
	color: #e1aa19;
}

.team_nav{
	color: #2bbae4;
}

.searchLi{
	width: 1.28rem;
	height: 1.28rem;
	padding-top: 0.6rem;
}

.search {
	display: block;
	width: 1rem;
	height: 0.72rem;
	background-image: url(../assets/search.png);
	background-position: 0 0;
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

</style>
