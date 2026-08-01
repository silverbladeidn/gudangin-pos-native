<?php
include "config.php";

if($_GET['act'] == 'product'){
    $sql = mysqli_query($koneksi,"select * from products");
    $rows = array();
    while($data = mysqli_fetch_array($sql)){
        $rows[] = $data;
    }
    echo json_encode($rows);
}
