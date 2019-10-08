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
$nombre=$_POST["nombre"];
$app=$_POST["ap"];
$apm=$_POST["am"];
$calle = $_POST["calle"];
$numero = $_POST["numi"];
$numeroE = $_POST["nume"];
$municipio = $_POST["municipio"];
$estado = $_POST["estado"];
$cp = $_POST["cp"];
$calles1 = $_POST["calles1"];
$calles2 = $_POST["calles2"];
$referencias = $_POST["refer"];
$iduser=$_POST["id"];
$tel = $_POST["tel"];
$colonia = $_POST["colonia"];


$conx = mysqli_connect("localhost","root","","estores");
header('Content-Type: application/json');
if($conx==null){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}
$query = "INSERT INTO direnvios (Nombre,Apellido_P,Apellido_M,Calle,Numero,NumeroE,Municipio,
Estado,CodigoPostal,EntreCalle1,EntreCalle2,Referencias,TelContacto,ID_Usuario,Colonia) 
VALUES('$nombre','$app','$apm','$calle','$numero','$numeroE',
'$municipio','$estado','$cp','$calles1','$calles2','$referencias','$tel','$iduser','$colonia')";

if(mysqli_query($conx,utf8_decode($query))){
  $alters = mysqli_affected_rows($conx);
  if($alters==1){
    $data = array(
        'status' =>"success" 
    );
    mysqli_close($conx);
    echo json_encode($data, JSON_FORCE_OBJECT);
    return;
  }else{
    $data = array(
        'status' =>"empty" 
    );
    mysqli_close($conx);
    echo json_encode($data, JSON_FORCE_OBJECT);
    return;
  }
  return;
  

}else{
$data = array(
  'status' =>"NoI",
  "query"=>$query
 );
mysqli_close($conx);
echo json_encode($data, JSON_FORCE_OBJECT);
}


?>