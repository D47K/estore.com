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

    $tipo =$_POST["tip"];
    $id =$_POST["id"];
    $user =$_POST["user"];
    $dir = "../media/img/users/";
    $dir_file = $dir . basename($_FILES["userF"]['name']);
    $ext = strtolower(pathinfo($dir_file,PATHINFO_EXTENSION));
    $absoultedir = $dir.$user.$ext;
    header('Content-Type: application/json');
        if($ext != "jpg" && $ext != "jpeg" && $ext != "png"){
          $data = array(
            'status' =>"InvalidFile",
            'ext' => $ext 
          );
          echo json_encode($data, JSON_FORCE_OBJECT);
          return;
        }
        if ($_FILES["userF"]["size"] > 2000000 || $_FILES["userF"]["size"]==0) {
            $data = array(
                  'status' =>"ExcededSize" 
                  );
            echo json_encode($data, JSON_FORCE_OBJECT);
            return;
}
$absoultedir = $dir.$user.".".$ext;
    if (move_uploaded_file($_FILES["userF"]['tmp_name'], $absoultedir)) {
      $conx = mysqli_connect("localhost","root","","estores");
      $query ="";
      if($tipo=="user"){
        $query = "UPDATE usuarios SET PhotoURL ='$absoultedir' WHERE ID=$id";
      }else if($tipo=="admin"){
        $query = "UPDATE administrador SET PhotoURL ='$absoultedir' WHERE IdAdministrador=$id";
      }
     
      if(mysqli_query($conx,$query)){
        $data=null;
          if(mysqli_affected_rows($conx)==1){
              $data = array(
                  'status' =>"OK",
                  "query" =>$query
              );
          }else{
            $data = array(
              'status' =>"empty",
              "query" =>$query
          );
          }
          mysqli_close($conx);
          echo json_encode($data, JSON_FORCE_OBJECT);
         return;
      }else{
      $data = array(
        'status' =>"NoI "
      );
      echo json_encode($data, JSON_FORCE_OBJECT);
      return;
       }
    } else {
      $data = array(
        'status' =>"Error" 
        );
  echo json_encode($data, JSON_FORCE_OBJECT);
  return;
    }
    ?>