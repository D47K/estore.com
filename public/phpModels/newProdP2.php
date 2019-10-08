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
$idp = $_POST["idP"];
$idc = $_POST["idC"];

$conx = new eConnection;

header('Content-Type: application/json');
if(!$conx->conectar()){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}

$queryEx = "SELECT * FROM categoria_prod WHERE ID_Producto=$idp AND ID_Categoria=$idc";

if($conx->consultar($queryEx)){
        if($conx->numFilas()<1){
            $query ="INSERT INTO categoria_prod VALUES($idp,$idc)";
            if($conx->consultar($query)){
                $data = array(
                    'status' =>"OK" 
                );
            }else{
                $data = array(
                  'status' =>"OK"
                );
                $cnx->closeCon();
                echo json_encode($data, JSON_FORCE_OBJECT);
                }
        }
}else{
$data = array(
  'status' =>"Error"
);
$conx->closeCon();
echo json_encode($data, JSON_FORCE_OBJECT);
}

?>