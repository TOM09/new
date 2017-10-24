//此处React引自 node_modulse文件夹,不需要声明路径就能被找到
//所以他是npm安装,他使用的时候也不是被html所引用的
import React from "react";
//或者 import React, {component} from "react";则下面的React.Component可以写成Component.{}可以自动解构


//我们定义一个叫App的组件,在html中可以用<App></App>来使用它
//必须是大写字母开头
//这个类想成为一个组件的话,react要求必须继承于React.Component类
//而组件就是继承自引进来的react文件中的Component

//之后react将被直接编译到all.js里面,因为引包了,require了.
class App extends React.Component{
	haha(xiangmu){
		if(xiangmu == "篮球"){
			return(
				<ul>
					<li>你好</li>
				</ul>
			)
		}else if(xiangmu == "足球"){
			return(
				<ul>
					<li>我好</li>
				</ul>
			)
		}
		
	}
	//组件中最重要的方法是render方法,render是渲染的意思
	render(){
		let arr = [1,2,3,4,5].map((item,index)=>{
			return <li key={index}>{item}</li>
		});
		
		//返回一个jsx语法,非常牛逼的语法
		//jsx语法不能直接运行,是被babel-loader中的react这个preset翻译的 
		//注意:必须被一个大元素包裹,比如div或者section
		//return后面不能回车 会自动补分号,可以用括号补一下
		//标签必须封闭  因为正则在分析
		//class要写成classname  for写成htmlfor
		//不能用html注释  必须用js 注释
		//jsx中可以用{}表示临时插入一个js简单表达式,不能是if,for等复杂语句,可以是||&&短路语法和三元运算
		//可以随便写一个haha函数,用{this.haha()}来调用它
		//可以使用数组,如果是jsx语法,数组会被自动展开,定义的jsx项目上有要求必须加 key属性,只要是重复的数组项目,都要有不能重复的key属性,所以用index的下标来当做key.
		//小写字母是原声标签,大写字母是react组件
		return (
			<div>
				<h1>我是react,很高兴遇见!{500+5000}</h1>
				
				<h2>jsx可以设置样式哦</h2>
			
				<div style = {{"width":"100px"}}></div>
				
				{this.haha("足球")}
				
				<ul>
					{arr}
				</ul>
				
			</div>
			
		)
	}
}

//向外暴漏
export default App;
