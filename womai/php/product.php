<?php

    require "conn.php";
    
    //轮播数据
    $sql = "select * from bigimg";
    $result = $conn->query($sql);

    $larr = array();
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
            $count=count($row);
            for($i=0;$i<$count;$i++){  
                unset($row[$i]);//删除冗余数据  
            }
            array_push($larr,$row);
        }
    }
  

    //商品表1
    $sql1 = "select * from productInfo";
    $result1 = $conn->query($sql);

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

    //商品表2
    $sql2 = "select * from dailyproduct";
    $result2 = $conn->query($sql);

    $p2arr = array();
    if ($result2->num_rows > 0) {
        // 输出数据
        while($row = $result2->fetch_assoc()) {
            $count=count($row);
            for($i=0;$i<$count;$i++){  
                unset($row[$i]);//删除冗余数据  
            }
            array_push($p2arr,$row);
        }
    }

    //商品表3
    $sql3 = "select * from dailyproduct1";
    $result3 = $conn->query($sql);

    $p3arr = array();
    if ($result3->num_rows > 0) {
        // 输出数据
        while($row = $result3->fetch_assoc()) {
            $count=count($row);
            for($i=0;$i<$count;$i++){  
                unset($row[$i]);//删除冗余数据  
            }
            array_push($p3arr,$row);
        }
    }

    //首页接口
    class indexData{

    }
    $index = new indexData();
    $index->lunbo = $larr;
    $index->proList1 = $p1arr;
    $index->proList2 = $p2arr;
    $index->proList3 = $p3arr;

    $str=json_encode($index);
    echo $str;
?>