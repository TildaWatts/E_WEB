<?php

    require "conn.php";
    
    $sql = "select * from bigimg";
    $result = $conn->query($sql);

    $jarr = array();
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
            $count=count($row);
            for($i=0;$i<$count;$i++){  
                unset($row[$i]);//删除冗余数据  
            }
            array_push($jarr,$row);
        }
    }
    $str=json_encode($jarr);
    echo $str;
?>