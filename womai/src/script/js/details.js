define(['jquery'],function($){

    var $url = window.location.search;
    $url = $url.substring(1,$url.length);
    var $param = $url.split('=')[0];
    var $val = $url.split('=')[1];
    
    var $pagetitle = $('head title');


    $.ajax({
        url: "../../php/details.php",
        dataType:'json',
        data:{
            pcode:$val
        }
    }).done(function(data){
        //标题
        $pagetitle.html(data.proData.pname);


    }).fail(function () {
        console.log("error");
    });
  });