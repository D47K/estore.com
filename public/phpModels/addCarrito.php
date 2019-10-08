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
$idc=$_POST["idc"];
$idp= $_POST["idp"];
$conx = new eConnection;

header('Content-Type: application/json');
if(!$conx->conectar()){
$data = array(
  'status' =>"Error",
  'tipo'=>'conexion',
  "err"=>$conx->getError()
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}

$querc = "SELECT * FROM carrito_producto WHERE ID_Carrito=$idc AND ID_Producto =$idp";

if($conx->consultar($querc)){
    if($conx->numFilas()>0){
        $data = array(
            'status' =>"OK");
            echo json_encode($data, JSON_FORCE_OBJECT);
    }else{

        $queryEx = "INSERT INTO carrito_producto VALUES($idc,$idp) ";
        $data = null;
        if($conx->consultar($queryEx)){
            $data = array(
                'status' =>"OK");
                echo json_encode($data, JSON_FORCE_OBJECT);
        }else{
        $data = array(
          'status' =>"Error",
          'query' => $queryEx
        );
    } 
}

}else{
        $data = array(
          'status' =>"Error",
          'query' => $querc
        );
}

$conx->closeCon();
echo json_encode($data, JSON_FORCE_OBJECT);


?>