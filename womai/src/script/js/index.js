

define(['jquery'],function($){

	$.ajax({
		url: "../../php/product.php",
		// type: get

	}).done(function(data){

		$lunboArr = JSON.parse(data);
			

		})
		.fail(function(){
			console.log("error");
		});

});