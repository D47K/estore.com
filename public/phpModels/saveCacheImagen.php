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
    header('Content-Type: application/json');
$dir = "../media/img/";
$dir_file = $dir . basename($_FILES["imagenP"]['name']);
$ext = strtolower(pathinfo($dir_file,PATHINFO_EXTENSION));
$nuevo = getName(10);
$absoultedir = $dir."Producto_".$nuevo.".".$ext;
    if($ext != "jpg" && $ext != "jpeg" && $ext != "png"){
      $data = array(
        'status' =>"InvalidFile",
        'ext' => $ext 
      );
      echo json_encode($data, JSON_FORCE_OBJECT);
      return;
    }
    if ($_FILES["imagenP"]["size"] > 3000000 || $_FILES["imagenP"]["size"]==0) {
        $data = array(
              'status' =>"ExcededSize" 
              );
        echo json_encode($data, JSON_FORCE_OBJECT);
        return;
}
function getName($n) { 
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    $randomString = ''; 
  
    for ($i = 0; $i < $n; $i++) { 
        $index = rand(0, strlen($characters) - 1); 
        $randomString .= $characters[$index]; 
    } 
  
    return $randomString; 
} 

while(file_exists($absoultedir)) {
    $nuevo = getName(10);
    $absoultedir = $dir.$nuevo.".".$ext;
}
    if (move_uploaded_file($_FILES["imagenP"]['tmp_name'], $absoultedir)) {
        $dirA = "media/img/";
        $absoultedirA = $dirA."Producto_".$nuevo.".".$ext;
              $data = array(
                  'status' =>"OK",
                  'ruta'=>$absoultedirA,
                  "ext"=>$ext
              );
          echo json_encode($data, JSON_FORCE_OBJECT);
         return;
    } else {
      $data = array(
        'status' =>"Error" 
        );
  echo json_encode($data, JSON_FORCE_OBJECT);
  return;
    }


?>