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
$encrypted = password_hash($pass, PASSWORD_DEFAULT);

$cnx = new eConnection;
$conx = mysqli_connect("localhost","root","","estores");
header('Content-Type: application/json');
if($conx==null){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}
$query = "INSERT INTO usuarios (Nombre,ApellidoP,ApellidoM,Email,Contrasena) VALUES('$name','$app','$apm','$mail','$encrypted')";
if(mysqli_query($conx,$query)){
session_start([
  'cookie_lifetime' => 86400,
]);
  
  $quer="SELECT * FROM usuarios WHERE Email='$mail'";
  if($res = mysqli_query($conx,$quer)){
    $row = mysqli_fetch_array($res);
    $data = array(
        'status' =>"OK" ,
        'rol' =>"cliente",
        'id' => $row[0],
        'nombre' => $row[1],
        'apellidop'=> $row[2], 
        'apellidom'=> $row[3],
        'foto' =>$row[8]
    );
    $queryNewCarrito = "INSERT INTO carritocompras(ID_Usuario) values($row[0])";
    
    if(mysqli_query($conx,$queryNewCarrito)){
      $qw ="SELECT ID FROM carritocompras WHERE ID_Usuario=$row[0]";
      if($ress = mysqli_query($conx,$qw)){
         $rows = mysqli_fetch_array($ress);
         $querrr = "UPDATE usuarios SET ID_Carrito=$rows[0] WHERE ID=$row[0]";
         mysqli_query($conx,$querrr);
      }

    }
    $_SESSION['sesini']=true;
    $_SESSION["rol"]="cliente";
    $_SESSION["id"]=$row[0];
    mysqli_close($conx);
    echo json_encode($data, JSON_FORCE_OBJECT);
   return;
  }else{
    $data = array(
      'status' =>"Error" 
  );
  mysqli_close($conx);
  echo json_encode($data, JSON_FORCE_OBJECT);
  return;
  }
  

}else{
$data = array(
  'status' =>"NoI "."INSERT INTO usuarios(Nombre, ApellidoP, ApellidoM, Email,Contrasena) VALUES('$name','$app','$apm','$mail','$encrypted')" 
);
mysqli_close($conx);
echo json_encode($data, JSON_FORCE_OBJECT);
}


?>