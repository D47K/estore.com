
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
session_start();
header('Content-Type: application/json');
    if(isset( $_SESSION['sesini'])){
        if( $_SESSION['sesini']){
            $data = array(
                'status' =>"OK" ,
                'rol' => $_SESSION["rol"],
                'id' => $_SESSION["id"]
            );
            echo json_encode($data, JSON_FORCE_OBJECT);
            return;
        }
    }else{
        $data = array(
            'status' =>"NO" 
        );
        echo json_encode($data, JSON_FORCE_OBJECT);
            return;
    }



?>

