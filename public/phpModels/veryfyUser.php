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
$user = $_POST["user"];
header('Content-Type: application/json');
$cnx = new eConnection;

if($cnx->conectar()){
    /*Buscamos credenciales en Usuarios*/
    if($cnx->consultar("SELECT * FROM usuarios WHERE Usuario='$user'" )){
        if($cnx->numFilas()>0){
              $data = array(
                'status' =>"Exist" );
            echo json_encode($data, JSON_FORCE_OBJECT);
            return;
            }else{
                if($cnx->consultar("SELECT * FROM administrador WHERE Usuario='$user'" )){
                    if($cnx->numFilas()>0){
                          $data = array(
                            'status' =>"Exist"
                          );
                        echo json_encode($data, JSON_FORCE_OBJECT);
                        return;
                        }else{
                          $data = array(
                            'status' =>"OK" ,
                            "user"=>$user
                        );
                        echo json_encode($data, JSON_FORCE_OBJECT);
                        return;
                        }
                    }
                  
            }
        }
}else{
    $data = array(
        'status' =>"Error" 
    );
    echo json_encode($data, JSON_FORCE_OBJECT);
}



?>