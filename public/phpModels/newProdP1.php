<?php 

if(!isset($_POST["permit"])){
  ?>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="../css/bootstrap.min.css" />
      <title>Acceso restringido</title>
    </head>
    <body class="d-flex justify-content-center align-items-center">
      <div class="jumbotron mt-5 " style="
      background-color:rgba(255, 0, 0, 0.301);
      ">
        <h1 class="display-4">ACCESSO RESTRINGIDO</h1>
    
        <hr class="my-4" />
        <p>
          <a href="../index.html">
            Volver a inicio
          </a>
        </p>
      </div>
    </body>
  </html>
  <?php
  return;
  }
include "conn.php";
$name = $_POST["nombre"];
$model = $_POST["modelo"];
$now = new DateTime();
 $date= $now->format('Y-m-d H:i:s');    // MySQL datetime format
$realp = $_POST["realp"];
$pubp = $_POST["pubp"];
$desc = $_POST["desc"];
$idm = $_POST["idm"];
$idp = $_POST["idp"];

$cnx = new eConnection;
$conx = mysqli_connect("localhost","root","","estores");
header('Content-Type: application/json');
if($conx==null){
$data = array(
  'status' =>"Error" ,
  'msg' =>"Conexion"
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}
$query = "INSERT INTO producto VALUES(NULL,'$name','$model','$date','$realp','$pubp','$desc','$idm','$idp')";
if(mysqli_query($conx,utf8_decode($query))){
  $quer="SELECT * FROM producto ORDER BY ID DESC LIMIT 1";
  if($res = mysqli_query($conx,$quer)){
    $row = mysqli_fetch_array($res);
    $data = array(
        'status' =>"OK" ,
        'id' => $row[0]
    );
    mysqli_close($conx);
    echo json_encode($data, JSON_FORCE_OBJECT);
   return;
  }else{
    $data = array(
      'status' =>"Error",
      'msg' =>"Consulta",
      'query' =>$quer
  );
  mysqli_close($conx);
  echo json_encode($data, JSON_FORCE_OBJECT);
  return;
  }
  

}else{
$data = array(
  'status' =>"Error",
      'msg' =>"Consulta",
      'query' =>$query
);
mysqli_close($conx);
echo json_encode($data, JSON_FORCE_OBJECT);
}


?>