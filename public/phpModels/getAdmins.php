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
$cnx = new eConnection;
header('Content-Type: application/json');
if($cnx->conectar()){
    //Buscamos credenciales en Admins
    $query="SELECT * FROM administrador ORDER BY Nombre" ;
    if($cnx->consultar($query)){
        if($cnx->numFilas()>0){
            $matri;
            $conta=0;
            while($row = mysqli_fetch_array($cnx->getRes())){
                $matri[$conta]['status']="OK";
                $matri[$conta]['rol']="administrador";
                $matri[$conta]['id']= $row[0];
                $matri[$conta]['nombre']=  $row[1];
                $matri[$conta]['apellidop']=  $row[2];
                $matri[$conta]['apellidom']= $row[3];
                $matri[$conta]['foto']=$row[7];
                $matri[$conta]['ver']=$row[9];
                $matri[$conta]['mod']=$row[10];
                
                $matri[$conta]['tienda']=$row[11];
                
               
        $conta++;
            }
            echo json_encode($matri, JSON_FORCE_OBJECT);
            return;
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