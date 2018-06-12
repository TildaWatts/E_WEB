

define(['jquery'],function($){

    return {

        //tab效果
        // tab: (function() {
        //     var $divs = $('#tab div');
        //     $('#tab button').click(function() {
        //         $(this).addClass('active').siblings('button').removeClass('active');
        //         $divs.eq($(this).index()).show().siblings('#tab div').hide();
        //     });
        // })(),
        lunbo:(function(){
            var $baidu = $('.banner_mid');
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

            $baidu.on('mouseover',function(){
                $left.show();
                $right.show();
            });
            $baidu.on('mouseout',function(){
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
        
            $baidu.hover(function() {
                clearInterval(timer);
            }, function() {
                timer = setInterval(function() {
                    $right.click();
                }, 2000);
            });
        })()

    }
});