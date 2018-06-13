<?php

require "conn.php";//引入数据库连接

//检测用户名是否存在
if (isset($_POST['username']) || isset($_POST['submit']) || isset($_POST['phoneNumber'] )|| isset($_POST['email'])) {
    $username = @$_POST['username'];
    $phoneNumber = @$_POST['phoneNumber'];
    $email = @$_POST['email'];
}else{
    exit('非法操作');
}


//查询字段
$sql = "select * from userinfo where username = '$username' or phoneNumber = '$phoneNumber' or email = '$email' ";
$result = $conn->query($sql);
if ($result->fetch_assoc()) {
    // echo true;
    exit( "false" ); //用户名已存在
} else {
    // echo false;
    exit( "true" ); //用户名不存在，验证通过，输出“true”，并结束程序
}

//点击submit注册按钮
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = md5( $_POST['password']);
    $email = $_POST['email'];
    $phoneNumber = $_POST['phonenumber'];

    if ($username && $password && $email && $phoneNumber) {
        $query="INSERT INTO userinfo(username, password, email,phoneNumber) VALUES ('$username','$password','$email','$phoneNumber')";
       

        $uid = mysqli_insert_id($conn);
            echo 'success';
        // header('location:../html/login.html');
        $conn->query($query);
        // mysqli_query($conn,$query);

    }else{
        echo '1000';
    }

}

?>