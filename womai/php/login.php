<?php

    require "conn.php";
    
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = md5($_POST['password']);
    }else{
        exit('非法操作');
        //或者返回错误码
    }

    //账户密码匹配
    $sql = "select * from userinfo where username = '$username' and password = '$password'";
    $result = $conn->query($sql);
    if ($result->fetch-assoc()) {
        echo true;
    }else{
        echo false;
    }

?>