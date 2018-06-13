
define(['jquery','jqvali'],function($){
    
    // console.log("register js test");

    // ,'jqvali_mes','jqvali'
    

        var $inputList = $('input');
        var $wrongBox = $('.wrong-tip');
        var $wrongTips = $('i');
        var $phoneBox = $('.phoneBox');

        //增加自定义校验方法 $.validator.addMethod.addMethod('方法名',方法函数,'错误message回调');
        jQuery.validator.addMethod("mobile", function(value, element) {
            var length = value.length;
            var mobile = /^1[3|5|8]{1}[0-9]{9}$/;
            return this.optional(element) || (length == 11 && mobile.test(value));
        }, "请正确填写您的手机号码");

        $('#register_form').validate({
            
            rules:{
                email:{
                    required:true,
                    email:true,
                    remote: {
                        url: "../../php/register.php",     //后台处理程序
                        type: "post",               //数据发送方式
                        dataType: "json",           //接受数据格式   
                        data: {                     //要传递的数据
                            email: function() {
                                return $("#email").val();
                            }
                        }
                    } 
                },
                username:{
                    required:true,
                    remote: {
                        url: "../../php/register.php",     //后台处理程序
                        type: "post",               //数据发送方式
                        dataType: "json",           //接受数据格式   
                        data: {                     //要传递的数据
                            username: function() {
                                return $("#username").val();
                            }
                        }
                    }  
                },
                password:{
                    required:true,
                    minlength:6
                },
                repassword: {
                    required:true,
                    equalTo: "#password"
                },
                phonenumber: {
                    required:true,
                    minlength : 11,
                    mobile:true,
                    remote: {
                        url: "../../php/register.php",     //后台处理程序
                        type: "post",               //数据发送方式
                        dataType: "json",           //接受数据格式   
                        data: {                     //要传递的数据
                            phoneNumber: function() {
                                return $("#phonenumber").val();
                            }
                        }
                    } 
                }           
            },
            messages: {
                email:{
                    required:'请您输入正确的邮箱',
                    email:'邮箱格式不正确',
                    remote: "该邮箱已存在"
                },
                username: {
                    required:'用户名不能为空',
                    remote: "该用户名已存在"
                },
                password: {
                    required:'密码不能为空',
                    minlength:'密码长度不能小于6位'
                },
                repassword: {
                    required:'确认密码不能为空',
                    minlength:'确认密码长度不能小于6位',
                    equalTo:'确认密码不一致'
                },
                phonenumber: {
                    required:'手机号码不能为空',
                    mobile:'请输入正确的手机号码',
                    minlength:'手机号码不能少于11位',
                    remote: "该电话号码已存在"
                },
                
            },errorPlacement: function(error, element){
                error.appendTo(element.parent().find(" i"));
                element.prev('div').show();
                element.show();
            }
        });


});