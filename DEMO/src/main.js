// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import  VueResource  from 'vue-resource'
import Movie from './pages/Movie'
import Index from './pages/Index'
import Search from './pages/Search'
//import star2 from './components/star2'
//中间件
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* 使用中间件之后 配置路由 */
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
  routes:[
  	{ path: '/', component: Index },
  	{ path: '/movie', component: Movie },
		{ path: '/search', component: Search }
//	{ path: '/star2', component: star2 }
		
		
  ]
})
new Vue({
	router,
  el: '#apps',
  template: '<App/>',
  components: { App }
})
