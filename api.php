<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include "config.php";

if($_GET['act'] == 'product'){
    $sql = mysqli_query($koneksi,"select * from products");
    $rows = array();
    while($data = mysqli_fetch_assoc($sql)){
        $rows[] = $data;
    }
    echo json_encode($rows);
}
