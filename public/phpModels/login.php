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
$pass = $_POST["pass"];
header('Content-Type: application/json');
$cnx = new eConnection;

if($cnx->conectar()){
    /*Buscamos credenciales en Usuarios*/
    if($cnx->consultar("SELECT * FROM usuarios WHERE (Usuario='$user') OR (Email='$user')" )){
        if($cnx->numFilas()>0){
          session_start([
            'cookie_lifetime' => 86400,
          ]);
            
            $row = mysqli_fetch_array($cnx->getRes());
            $pasHash = $row[6];
            if(password_verify($_POST["pass"],$pasHash)){
              $data = array(
                'status' =>"OK" ,
                'rol' =>"cliente",
                'id' => $row[0],
                'nombre' => $row[1],
                'apellidop'=> $row[2], 
                'apellidom'=> $row[3],
                'foto' =>$row[8]
            );
            $_SESSION['sesini']=true;
            $_SESSION["rol"]="cliente";
            $_SESSION["id"]=$row[0];
            echo json_encode($data, JSON_FORCE_OBJECT);
            return;
            }else{
              $data = array(
                'status' =>"NoES" 
            );
            echo json_encode($data, JSON_FORCE_OBJECT);
            return;
            }
            
             
        }
    }
    if($cnx->consultar("SELECT * FROM administrador WHERE (Usuario='$user') OR (Email='$user')" )){
      if($cnx->numFilas()>0){
        session_start([
          'cookie_lifetime' => 86400,
        ]);
          
          $row = mysqli_fetch_array($cnx->getRes());
          $pasHash = $row[5];
          if(password_verify($_POST["pass"],$pasHash)){
            $data = array(
              'status' =>"OK" ,
              'rol' =>"administrador",
              'id' => $row[0],
              'nombre' => $row[1],
              'apellidop'=> $row[2], 
              'apellidom'=> $row[3],
              'foto' =>$row[7]
          );
          $_SESSION['sesini']=true;
          $_SESSION["rol"]="administrador";
          $_SESSION["id"]=$row[0];
          echo json_encode($data, JSON_FORCE_OBJECT);
          return;
          }else{
            $data = array(
              'status' =>"NoES" 
          );
          echo json_encode($data, JSON_FORCE_OBJECT);
          return;
          }
      }
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