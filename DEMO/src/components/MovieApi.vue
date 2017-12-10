<template>
  <div class="re_ying">
    <!--影院热映-->
		<div class="contentMovie">
			<div class="contentMtitle">
				<h3>影院热映</h3>
				<span>
					<a href="more/moviemore.html">更多</a>
				</span>
			</div>
				<div class="ulBox">
						<ul class="moveUl">
							<!--v-for="blog in blogs"-->  
								<li class="move_li" v-for="(blog,i) in blogs">

									<!--<div v-for="(val,key) in blog">-->
										<img :src="blog.images.medium" class="vue_img"></img>
										<p class="title">{{blog.title}}</p>
											
										<p class="starBox">
                        	<!--循环5个span 即n分别为12345,用传入的分数和n做5次比较,如果分数大于n 则class名字为真,颜色为黄色,小于则为透明色-->
                            <span :class="{rankColor:blog.rating.average>((i-0.5)*2)}" class="iconfont" v-for="i in 5">★</span>
                            <span class="smallP">{{blog.rating.average}}</span>
                            
                        </p>

							  </li>
						</ul>
				</div>
							
									
				
		</div>							

  </div>
</template>

<script>
import Star2 from '../components/star2'

export default {
  name: 're_ying',
  props:["blogs"],
  data:function(){
  	return{
  		val:""
  	}
  },
	
	 methods: {
    randomValue: function () {
      return this.val = (Math.random()*4+1).toFixed(2)
    }
//  ,
//  showStar:function (n){
//      var boxStar=document.getElementById("boxStar").offsetWidth;
//      var star2=document.getElementById("star2");
//      var boxW=(n*boxStar)/10;
//      
//      star2.style.backgroundPosition=-boxW+"px 0px";
//      star2.style.left=boxW+"px";
//  }
},
  components:{
	}
}
</script>

<style scoped>
.smallP{
	
}
.starBox{
	width: 2.4rem;
}
.star{
	width: 4rem;
	height: 0.74rem;
}
.star12345{
	display: inline-block;
	width: 2.2rem;
	height: 0.6rem;
}
.star_point{
	font-size: 0.4rem;
}



.title{
	font-size: 0.38rem;
	text-align: center;
}
.ulBox{
	height: 200px;
	margin-left: 1.12rem;
	width: 100%; 
	/*overflow: auto;*/
}
.vue_img{
	width: 100%;
	height: 5.7136rem;
}
.movieUls {
	font-size: 0;
	white-space: nowrap;
	overflow: hidden;
	display: flex;
   	flex-direction: row;
	overflow: hidden;
	/*position: absolute;*/
	left: 0;
}
.contentMtitle {
	height: 1.8rem;
	overflow: hidden;
	padding: 0 1.12rem;
}

.contentBook .contentBtitle {
	padding: 0;
}

.contentMtitle h3 {
	font-size: 0.64rem;
	color: #05131c;
	height: 1.8rem;
	line-height: 1.8rem;
	float: left;
}

.contentMtitle span {
	font-size: 0.48rem;
	color: #48b562;
	height: 1.8rem;
	line-height: 1.8rem;
	float: right;
}

.moveUl{
	overflow: hidden;
	white-space: nowrap;
}
.move_li{
	/*height:100%;*/
	width: 4rem;
	display: inline-block; 
	margin-right:0.4rem;
}

.rankColor{
   color:orange;
 }
 
 .iconfont{
     color: #999;
     width: 0.4rem;
     height: 0.4rem;
     float: left;
     display: inline-block;
 }
.rankColor{
  color:orange;
}
</style>
