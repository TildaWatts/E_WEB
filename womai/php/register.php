<?php

require "conn.php";//引入数据库连接

//检测用户名是否存在
if (isset($_POST['username']) || isset($_POST['submit']) || isset($_POST['phoneNumber'])) {
    $username = @$_POST['username'];
    $phoneNumber = @$_POST['phoneNumber'];
}else{
    exit('非法操作');
}

//查询字段
$sql = "select * from userinfo where username = '$username' or phoneNumber = '$phoneNumber' ";
$result = $conn->query($sql);
if ($result->fetch_assoc()) {
    echo true;
} else {
    echo false;
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
            echo $uid;
        // header('location:../html/login.html');
        $conn->query($query);
        // mysqli_query($conn,$query);

    }else{
        echo '1000';
    }

}

?>