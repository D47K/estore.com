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
$id = $_POST["id"];

$conx = new eConnection;

header('Content-Type: application/json');
if(!$conx->conectar()){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}
$queryEx = "DELETE FROM tienda WHERE IdTienda=$id";
if($conx->consultar($queryEx)){
                $data = array(
                  'status' =>"OK"
                );
                echo json_encode($data, JSON_FORCE_OBJECT);  
                $conx->closeCon();
                return;
}else{
$data = array(
  'status' =>"Error"
);
$conx->closeCon();
echo json_encode($data, JSON_FORCE_OBJECT);
}

?>