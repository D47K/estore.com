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
header('Content-Type: application/json');
$cnx = new eConnection;

if($cnx->conectar()){
    $query="SELECT * FROM producto WHERE ID=$id" ;
    if($cnx->consultar($query)){
        if($cnx->numFilas()>0){
            $row = mysqli_fetch_array($cnx->getRes());
             $data = array(
                 'status' =>"OK" ,
                 'id' =>utf8_encode($row[0]),
                 'nombre' => utf8_encode($row[1]),
                 'precio'=> utf8_encode($row[5])
             );
            
             echo json_encode($data, JSON_FORCE_OBJECT);
            return;
        }
    }
    $data = array(
        'status' =>"NoE",
        'code' =>$id
    );
    echo json_encode($data, JSON_FORCE_OBJECT);
}else{
    $data = array(
        'status' =>"Error" 
    );
    echo json_encode($data, JSON_FORCE_OBJECT);
}



?>