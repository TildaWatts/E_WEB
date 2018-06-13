// require 调用模块，接收二个参数。
// 第1个参数是一个数组，表示所依赖的模块  
// 第2个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
//可以存在多个require



//配置模块:路径都是以requir文件为基准
require.config({
	baseUrl:'../script/lib/',//基本路径,每一模块都要添加路径
	paths:{//不允许添加扩展名
		'jquery':'jquery.min',
		'jqvali':'jquery.validate',
		'jqcookie':'http://apps.bdimg.com/libs/jquery.cookie/1.4.1/jquery.cookie'
	}
});

//调用模块
/*require(['js/module1.js','js/module2.js','js/module3.js'],function(m1){//m1:module1模块
	console.log(m1.num);
	console.log(m1.ranNum(5,8));
});*/

//调用模块
/*require(['js/module1.js']);
require(['js/module2.js']);
require(['js/module3.js']);*/
require([
	'../script/js/index.js',
	'../script/js/effect.js',
	'../script/js/register.js'
]);//异步加载