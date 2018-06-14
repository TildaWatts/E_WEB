define(['jquery'],function($){

    var $url = window.location.search;
    $url = $url.substring(1,$url.length);
    var $param = $url.split('=')[0];
    var $val = $url.split('=')[1];
    

    $.ajax({
        url: "../../php/product.php",
        dataType:'json',//加这句可以json转对象
        data:{
            $param:$val
        }
    }).done(function(){

    }).fail(function () {

    });

    console.log('deatil js connect'+$url);
  });