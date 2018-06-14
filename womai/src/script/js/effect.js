

define(['jquery'],function($){

    return {

        fixedSeach:(function () {
            var $xuanfubg = $('.xuanfuseach');
            $(window).on('scroll',function(){
                
                var $scrollTop = $(this).scrollTop(); 
                console.log(); 
                if($scrollTop>800){
                    $xuanfubg.show(200).offset({top:$scrollTop}); 
                    // $xuanfubg.show();
                    // $xuannfubg.animate({
                    //     top: $scrollTop
                    // }).show();
                }else{
                    $xuanfubg.hide(200).offset({top:0}); 
                    // $xuanfubg.hide();
                    // $xuannfubg.animate({
                    //     top: 0
                    // }).hide();
                }
            });
          })(),

        //tab效果
        tab: (function() {
            var $divs = $('.br_tab div');
            $('.br_tab a').mouseover(function() {
                $(this).addClass('active').siblings('a').removeClass('active');
                $divs.eq($(this).index()).show().siblings('.br_tab div').hide();
            });
        })(),
        lunbo:(function(){
            var $lunboDiv = $('.banner_mid');
            var $picli = $('.banner_mid ul li');
            var $btnli = $('.banner_mid ol li');
            var $left = $('#left');
            var $right = $('#right');
            var $rgb = $('.banner_mid ul li').attr('rgb');
            var num = 0; //当前点击的索引
            var $piclilength = $picli.size();
            var timer = null;

            $(document).one("click",".banner_mid", function(){
                num = $(this).index();
                $picli = $(this).find('ul li');
                $left = $(this).find("#left");
                $right = $(this).find('#right');
                $piclilength = $picli.size();
            });

            $lunboDiv.on('mouseover',function(){
                $left.show();
                $right.show();
            });
            $lunboDiv.on('mouseout',function(){
                $left.hide();
                $right.hide();
            });
            $btnli.on('mouseover', function() {
                num = $(this).index();
                tabswitch();
            });

            $right.on('click', function() {
                
                num++;
                if (num > $piclilength - 1) {
                    num = 0;
                }
                tabswitch();
            });
        
            $left.on('click', function() {
                num--;
                if (num < 0) {
                    num = $piclilength - 1;
                }
                tabswitch();
            });
        
            function tabswitch() {
                $btnli.eq(num).addClass('active').siblings($btnli).removeClass('active');
                $picli.eq(num).show().siblings($picli).hide();
                $('.banner').css("background",$picli.eq(num).attr('rgb'));
            }
        
        
            timer = setInterval(function() {
                // clearInterval(timer);
                $right.click();
            }, 2000);
        
            $lunboDiv.hover(function() {
                clearInterval(timer);
            }, function() {
                timer = setInterval(function() {
                    $right.click();
                }, 2000);
            });
        })(),

        louti:(function(){
            var $diantiNav = $('#loutinav');
            var $dianti = $('#loutinav ul li').not('.last');
            var $floor = $('.louti');
            var $goback = $('.last');
        $(window).on('scroll',function(){
        
            var $scrollTop = $(this).scrollTop();  
            if($scrollTop>800){
                $diantiNav.show();
            }else{
                $diantiNav.hide();
            }
            
            $floor.each(function(index,element){
                var $top=$(this).offset().top+400;

                if($top>$scrollTop){
                    $dianti.removeClass('active');
                    //不能直接用index
                    $dianti.eq($('.louti').index(this)).addClass('active');
                    // console.log($('.louti').index(this)+1);
                    return false;
                }
            });
        });

            $dianti.on('click',function () {
                $(this).addClass('active').siblings('#loutinav ul li').removeClass('active');
                var $top = $floor.eq($(this).index()).offset().top;

                $('html,body').animate({
                    scrollTop:$top
                });
            });

            $goback.on('click',function () {
                $('html,body').animate({
                    scrollTop:0
                });
            });
        })(),
//-----------
        scale:(function(){
            var $wrap = $('.main_pshow');
            var $spic = $('#spic');
            var $sf = $('#sf');
            var $bpic = $('#bpic');
            var $bf = $('#bf');
            var $picul = $('#list ul');
            var $picli = $('#list ul li');

            $spic.hover(function(){
                $bf.css('visibility','visible');
                $sf.css('visibility','visible');
                $sf.css({
                    width:$spic.width()*$bf.width()/$bpic.width(),
                    height:$spic.height()*$bf.height()/$bpic.height()
                });
                var $scale = $bf.width()/$sf.width();

                $(this).on('mousemove',function (ev) {
                    var $left = ev.pageX - $wrap.offset().left - $sf.width()/2;
                    var $top = ev.pageY - $wrap.offset().top - $sf.height()/2;
            
                    if($left < 0){
                        $left = 0;
                    }else if ($left >= ($spic.width()-$sf.width())){
                        $left = ($spic.width()-$sf.width());
                    }
                    if ($top < 0){
                        $top = 0;
                    }else if($top >= $spic.height()-$sf.height()){
                        $top = $spic.height()-$sf.height();
                    }
                    $sf.css({
                        left:$left,
                        top:$top
                    });
                    $bpic.css({
                        left:-$left*$scale,
                        top:-$top*$scale
                    });
                });
            },function(){
                $bf.css('visibility','hidden');
                $sf.css('visibility','hidden');
            });

            $picli.on('click',function(){
                var $url = $(this).find('img').attr('src');
                $spic.find('img').attr('src',$url);//attr可读可写，第二个参数为写入的值
                $bpic.attr('src',$url);
                $(this).addClass('active').siblings('#list ul li').removeClass('active');

            });

            var $liWidthLength = $picli.size();
            var $liWidth = $picli.eq(0).outerWidth();

            // $picul.css({
            //     width:$liWidthLength*$liWidth
            // });
        })()
    //------------------,
    }
});