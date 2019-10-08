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
$id=$_POST["id"];
$cnx = new eConnection;
header('Content-Type: application/json');
if($cnx->conectar()){
    $query="SELECT ID_Carrito FROM usuarios WHERE ID=$id" ;
    if($cnx->consultar($query)){
        if($cnx->numFilas()>0){
            $matri;
            $conta=0;
            while($row = mysqli_fetch_array($cnx->getRes())){
                $matri[$conta]['id']= $row[0];
                $conta++;
            }
            echo json_encode($matri, JSON_FORCE_OBJECT);
            return;
        }
        return;
    }
    $data = array(
        'status' =>"NoE" 
    );
    echo json_encode($data, JSON_FORCE_OBJECT);
}else{
    $data = array(
        'status' =>"Error" 
    );
    echo json_encode($data, JSON_FORCE_OBJECT);
}



?>