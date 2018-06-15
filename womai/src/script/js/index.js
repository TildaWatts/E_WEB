


define(['jquery'],function($){

	var $lunboUl = $('.banner_mid ul');
	var $plist1Ul = $('.con_other');
	var $plist2li = $('.con_other2 li');
	var $plist3Ul = $('.con_other3');
	var $adListUl = $('.contentMain4 ul');
	var $floorUl = $('.frfoot ul');  

	$.ajax({
		url: "../../php/product.php",
		dataType:'json'//加这句可以json转对象

	}).done(function(indexData){

			//轮播列表
			$.each(indexData.lunbo,function(index,val){
				$lunboUl.append('<li rgb="'+val.bgcolor+'"><a><img src="'+val.imgurl +'"> </a></li>');
			});

			//商品列表1
			$.each(indexData.proList1,function(index,val){
				$plist1Ul.append('<li><a href="../html/details.html?pcode='+val.pcode+'"><img src="'+val.purl +'" alt=""></a><a href="../html/details.html?pcode='+val.pcode+'">'+val.pname+'</a><span>'+val.pinfo+'</span><i>'+val.pprice+'</i><a href="../html/details.html?pcode='+val.pcode+'">去看看</a></li>');
			});

			//商品列表2
			//jq不行用索引取值，要用eq
			$.each(indexData.proList2,function(index,val){
				if (index<3){
					$plist2li.eq(0).append('<a><img src="'+val.pUrl +'"></a>');
				}else{
					$plist2li.eq(1).append("<a><img src='"+val.pUrl +"'></a>");
				}
			});

			//商品列表3
			$.each(indexData.proList3,function(index,val){
				$plist3Ul.append('<li><a href="javascript:;"><img src="'+val.pUrl +'"> </a></li>');
			});

			//商品列表4
			$.each(indexData.proList4,function(index,val){
				$adListUl.append('<li><a href="javascript:;"><img src="'+val.adurl +'"> </a></li>');
			});

			//floor列表1
			$.each(indexData.floList1,function(index,val){
				
				if(val.fname == 'none'){
					$floorUl.append('<li><a href=""><img src="'+ val.furl+'" alt=""></li>');
				}else{
					$floorUl.append('<li><a href=""><img src="'+ val.furl+'" alt=""></a><a href="">'+val.fname+'</a><span>'+val.fprice+'</span></li>');
				}
			});
			
		})
		.fail(function(){
			console.log("error");
		});
		function addCookie(key, value, day) {
			var date = new Date(); //创建日期对象
			date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
			document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
		}
		function getCookie(key) {
			var str = decodeURI(document.cookie);
			var arr = str.split('; ');
			for (var i = 0; i < arr.length; i++) {
				var arr1 = arr[i].split('=');
				if (arr1[0] == key) {
					return arr1[1];
				}
			}
		}
		function delCookie(key) {
			addCookie(key, '', -1); //添加的函数,将时间设置为过去时间
		}
	
	
	
		//判断用户名是否存在,存在现实欢迎词
		if(getCookie('username')){
			$('.site_enter').hide();
			$('.site_out').show().find('span').html(getCookie('username')+', 您好！');//将获取的cookie值添加到span元素中
		}
	
		//点击退出按钮，清除cookie，现实请登录和请注册。
		$('.site_out a').on('click',function(){
			delCookie('username');
			$('.site_out').hide();
			$('.site_enter').show();
		});
		
});


