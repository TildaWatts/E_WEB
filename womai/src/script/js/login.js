
define(['jquery','jqvali'],function($){
    
    function addCookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }

    $('#btn').on('click', function() {

        $.ajax({
            type: 'post',
            url: '../../php/login.php',
            data: {
                account: $('#account').val(),
                password: $('#password').val()
            }
        }).done(function(d) {
            if (!d) {
                $('#error').html('用户名或者密码错误');
            } else {
                location.href = 'index.html';
                addCookie('username',$('#account').val(),7);
            }
        })
    });


});