<?php include('config.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $sql = "SELECT * FROM `products`";
    $result = mysqli_query($config, $sql);
    while($row = mysqli_fetch_assoc($result)){
        echo $row['name'];
    }
    ?>
    <button onclick="window.location.href = 'pemesanan.php';">Buy Now</button>
</body>
</html>