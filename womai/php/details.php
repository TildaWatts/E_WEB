<?php

    require "conn.php";

    
    $str = @$_GET['pcode'];
    if (isset($_GET['pcode'])) {
        $pcode = @$_GET['pcode'];
    }else{
        exit('非法操作');
        //或者返回错误码
    }

       //商品
       $sql1 = "select * from allproduntlist where (pcode='$pcode')";
       $result1 = $conn->query($sql1);
   
       $p1arr = array();
       if ($result1->num_rows > 0) {
           // 输出数据
           while($row = $result1->fetch_assoc()) {
               $count=count($row);
               for($i=0;$i<$count;$i++){  
                   unset($row[$i]);//删除冗余数据  
               }
               array_push($p1arr,$row);
           }
       }

           //首页接口
    class productData{

    }
    $productData = new productData();
    $productData->proData = $p1arr[0];


    $str=json_encode($productData);
    echo $str;
?>