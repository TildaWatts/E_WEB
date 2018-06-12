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

    //商品表2
    $sql2 = "select * from dailyproduct";
    $result2 = $conn->query($sql2);

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
    $result3 = $conn->query($sql3);

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

        //商品表4
        $sql4 = "select * from dailyproduct2";
        $result4 = $conn->query($sql4);
    
        $p4arr = array();
        if ($result4->num_rows > 0) {
            // 输出数据
            while($row = $result4->fetch_assoc()) {
                $count=count($row);
                for($i=0;$i<$count;$i++){  
                    unset($row[$i]);//删除冗余数据  
                }
                array_push($p4arr,$row);
            }
        }
        //floor表1
        $sql5 = "select * from dailyproduct2";
        $result5 = $conn->query($sql5);
    
        $p5arr = array();
        if ($result5->num_rows > 0) {
            // 输出数据
            while($row = $result5->fetch_assoc()) {
                $count=count($row);
                for($i=0;$i<$count;$i++){  
                    unset($row[$i]);//删除冗余数据  
                }
                array_push($p5arr,$row);
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
    $index->proList4 = $p4arr;
    $index->floList1 = $p5arr;


    $str=json_encode($index);
    echo $str;
?>