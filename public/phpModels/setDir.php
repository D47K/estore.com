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
$nombre=utf8_encode($_POST["nombre"]);
$app=utf8_encode($_POST["ap"]);
$apm=utf8_encode($_POST["am"]);
$calle = utf8_encode($_POST["calle"]);
$numero = utf8_encode($_POST["numi"]);
$numeroE = utf8_encode($_POST["nume"]);
$municipio =utf8_encode( $_POST["municipio"]);
$estado = utf8_encode($_POST["estado"]);
$cp = utf8_encode($_POST["cp"]);
$calles1 = utf8_encode($_POST["calles1"]);
$calles2 = utf8_encode($_POST["calles2"]);
$referencias = utf8_encode($_POST["refer"]);
$id=utf8_encode($_POST["id"]);
$tel = utf8_encode($_POST["tel"]);
$colonia = utf8_encode($_POST["colonia"]);
$conx = mysqli_connect("localhost","root","","estores");
  
header('Content-Type: application/json');
if($conx==null){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}
$query = "UPDATE direnvios SET Nombre='$nombre',Apellido_P='$app',Apellido_M='$apm',Calle='$calle',
Numero ='$numero',NumeroE='$numeroE',Municipio='$municipio',
Estado='$estado',CodigoPostal='$cp',EntreCalle1='$calles1',EntreCalle2='$calles2',
Referencias='$referencias',TelContacto='$tel', Colonia='$colonia' WHERE ID='$id'";
$query=utf8_decode($query);
if(mysqli_query($conx,utf8_decode($query))){
  $alters = mysqli_affected_rows($conx);
  if($alters==1){
    $data = array(
        'status' =>"success",
        'query'=> $query
    );
    echo json_encode($data, JSON_FORCE_OBJECT);
  }else{
    $data = array(
        'status' =>"empty" ,
        'query'=>$query
    );
    echo json_encode($data, JSON_FORCE_OBJECT);
  }
  mysqli_close($conx);
  return;
  

}else{
$data = array(
  'status' =>"NoI"
);
mysqli_close($conx);
echo json_encode($data, JSON_FORCE_OBJECT);
}

?>