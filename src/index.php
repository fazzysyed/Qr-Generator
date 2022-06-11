<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_GET["url"])){
    $prefill_url = $_GET["url"];
}else{
    $prefill_url = "";
}





?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Censuble - QR Generator</title>
    <!-- Meta -->
    <meta charset="UTF-8">
    <meta name="description" content="Censuble - Survey Builder">
    <meta name="author" content="Censuble, LLC">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" type="image/png" href="../assets/img/favicon-32x32.png"/>
    <!-- Favicon -->
    <!-- <link rel="icon" href="favicon.png"> -->
    <!-- Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- CSS Links -->
    <link rel="stylesheet" href="../assets/css/fontawesome-all.min.css">

	<script>
    //request to proxy api:
    //primary API request to middleware
 
	var url = "<?=$prefill_url;?>";

	</script>

</head>

<body>
    <!--[if lt IE 8]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
         your browser</a> to improve your experience.
      </p>
      <![endif]-->

      <script src="QrCode.js"></script>
    
</body>

</html>
