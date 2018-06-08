<?php

    header('content-type:text/html;charset=utf-8');

    define('SERVER','127.0.0.1');
    define('USERNAME','root');
    define('PASSWORD','88888888');
    define('DBNAME','womai');
    $conn = @mysqli_connect(SERVER,USERNAME,PASSWORD,DBNAME);//连接服务器,选中数据库

    if (!$conn){
        die('服务器连接失败'.mysqli_error());
    }
    
    //选这数据库和字符集
    mysqli_query($conn,'SET NAMES UTF8');
?>