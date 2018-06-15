define(['jquery'],function($){

    var $url = window.location.search;
    $url = $url.substring(1,$url.length);
    var $param = $url.split('=')[0];
    var $val = $url.split('=')[1];
    
    var $pagetitle = $('head title');
    var $c_title = $('.d_title span');
    var $c_price = $('.d_price span');
    var $showPicUl = $('#list ul');
    var $spic = $('#spic');
    var $bf = $('#bf');

    $.ajax({
        url: "../../php/details.php",
        dataType:'json',
        data:{
            pcode:$val
        }
    }).done(function(data){
        //标题
        $pagetitle.html(data.proData.pname);
        $c_title.html(data.proData.pname);
        //内容
        $c_price.html(data.proData.pprice);
        //图片
        $.each(data.proData.purl.split(','),function(index,value){
            if(index == 0){
                $showPicUl.append(`<li><img src="${value}" alt="" class="active"></li>`);
                $spic.append(`<img src="${value}" alt="">`)
                $bf.append(`<img src="${value}" alt="" id="bpic">`);                
            }else if(index<5){
                $showPicUl.append(`<li><img src="${value}" alt=""></li>`);
            }
        });
    }).fail(function () {
        console.log("error");
    });








  });