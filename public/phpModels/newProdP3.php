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
$idt = $_POST["idT"];
$stock =$_POST["stok"];

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

$queryEx = "SELECT * FROM tienda_prod WHERE ID_Tienda=$idt AND ID_Producto=$idp";

if($conx->consultar($queryEx)){
        if($conx->numFilas()<1){
            $query ="INSERT INTO tienda_prod VALUES($idt,$idp,$stock)";
            if($conx->consultar($query)){
                $data = array(
                    'status' =>"OK" ,
                    'id' => $row[0]
                );
            }
        }else{
            $queryUp = "UPDATE tienda_prod SET $stock WHERE ID_Tienda=$idt AND ID_Producto=$idp";
            if($conx->consultar($queryUp)){
                $data = array(
                    'status' =>"OK" ,
                    'id' => $row[0]
                );
            }  
        }
}else{
$data = array(
  'status' =>"Error",
  'query' => $queryEx
);
$conx->closeCon();
echo json_encode($data, JSON_FORCE_OBJECT);
}

?>