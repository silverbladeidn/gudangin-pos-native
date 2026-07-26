<?php 
include('config.php');
    $sql = "SELECT * FROM `products` where id = 4";
    $result = mysqli_query($config, $sql);
    $row = mysqli_fetch_assoc($result);
    echo $row['name'];
    ?>