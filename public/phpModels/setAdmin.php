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
$name=$_POST["nombre"];
$app=$_POST["ap"];
$apm=$_POST["am"];
$mail = $_POST["mail"];
$pass = $_POST["pass"];
$tel = $_POST["tel"];
$id=$_POST["id"];
$user = $_POST["user"];

if($pass!=""){
  $encrypted = password_hash($pass, PASSWORD_DEFAULT);
  $query = "UPDATE administrador SET Nombre='$name', Apellido_P='$app',Apellido_M='$apm',Email='$mail', Telefono='$tel', Contrasena='$encrypted',Usuario='$user' WHERE IdAdministrador=$id";
}else{
  $query = "UPDATE administrador SET Nombre='$name', Apellido_P='$app',  Apellido_M='$apm',Email='$mail', Telefono='$tel',Usuario='$user' WHERE IdAdministrador=$id";
}
$conx = mysqli_connect("localhost","root","","estores");
header('Content-Type: application/json');
if($conx==null){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}
if(mysqli_query($conx,$query)){
  $data=null;
    if(mysqli_affected_rows($conx)==1){
        $data = array(
            'status' =>"success",
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
mysqli_close($conx);
echo json_encode($data, JSON_FORCE_OBJECT);
}


?>