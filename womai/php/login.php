<?php

    require "conn.php";
    
    if (isset($_POST['account']) && isset($_POST['password'])) {
        $username = @$_POST['account'];
        $password = md5(@$_POST['password']);
    }else{
        exit('非法操作');
        //或者返回错误码
    }

    //账户密码匹配
    
// $sql = "select * from userinfo where username = '$username' or phoneNumber = '$phoneNumber' or email = '$email' ";
// $result = $conn->query($sql);
// if ($result->fetch_assoc()) {

    $sql = "select * from userinfo where (username = '$username' or phoneNumber = '$username' or email = '$username' ) and password = '$password'";
    $result = $conn->query($sql);
    if ($result->fetch_assoc()) {
     echo true;
        // exit( "false" ); //用户名已存在
    } else {
        echo false;
        // exit( "true" ); //用户名不存在，验证通过，输出“true”，并结束程序
    }

?>