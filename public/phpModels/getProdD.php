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
$conx = mysqli_connect("localhost","root","","estores");
if($conx==null){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}

$query="SELECT  * FROM producto ORDER BY Nombre";
if($res = mysqli_query($conx,$query)){
    $prods=null;
            $conta=0;
            while($row = mysqli_fetch_array($res)){
    $prods[$conta]['id']=utf8_encode($row[0]);
    $prods[$conta]['nombre']=utf8_encode($row[1]);
    $prods[$conta]['modelo']=utf8_encode($row[2]);
    $prods[$conta]['fechapub']=utf8_encode($row[3]);
    $prods[$conta]['precioreal']=utf8_encode($row[4]);
    $prods[$conta]['preciopub']=utf8_encode($row[5]);
    $prods[$conta]['desc']=utf8_encode($row[6]);
    $prods[$conta]['idmarca']=utf8_encode($row[7]);
    $prods[$conta]['idproveedor']=utf8_encode($row[8]);
                //Obtenemos marca 
                $queryM = "SELECT Nombre FROM marcas WHERE ID=$row[7]";
                if($resM = mysqli_query($conx,$queryM)){
                    while($rowM = mysqli_fetch_array($resM)){
                        $prods[$conta]['marca']=utf8_encode($rowM[0]);
                    }
                }
                //obtenemos proveedor
                $queryP = "SELECT Nombre FROM proveedores WHERE ID=$row[0]";
                if($resP = mysqli_query($conx,$queryP)){
                    while($rowP = mysqli_fetch_array($resP)){
                        $prods[$conta]['proveedor']=utf8_encode($rowP[0]);
                    }
                }
                //obtenemos imagen
                $queryI = "SELECT * FROM mediars WHERE ID_Producto=$row[0] LIMIT 1";
                if($resI = mysqli_query($conx,$queryI)){
                    while($rowI = mysqli_fetch_array($resI)){
                        $prods[$conta]['foto']=$rowI[2];
                    }
                }
    $conta++;
            }
            if($conta==0){
                $data = array(
                    'status' =>"NoH" 
                );
                echo json_encode($data,JSON_FORCE_OBJECT);
            return;
            }
            echo json_encode($prods,JSON_FORCE_OBJECT);
            return;
  }else{
    $data = array(
      'status' =>"NoE" 
  );
  echo json_encode($data, JSON_FORCE_OBJECT);
  return;
  }
  mysqli_close($conx);
?>
   
    