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
$id = $_POST["id"];
header('Content-Type: application/json');
$conx = mysqli_connect("localhost","root","","estores");
if($conx==null){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}

$query="SELECT  * FROM compras WHERE ID_Usuario=$id";
if($res = mysqli_query($conx,$query)){
    $dires=null;
            $conta=0;
            while($row = mysqli_fetch_array($res)){
    $dires[$conta]['id']=utf8_encode($row[0]);
    $dires[$conta]['tipo']=utf8_encode($row[1]);
    $dires[$conta]['status']=utf8_encode($row[2]);
    $dires[$conta]['fechaPed']=utf8_encode($row[3]);
    $dires[$conta]['fechaEnt']=utf8_encode($row[4]);
    $dires[$conta]['total']=utf8_encode($row[5]);
    $dires[$conta]['iduser']=utf8_encode($row[6]);
    $dires[$conta]['idadmin']=utf8_encode($row[7]);
    $queryNumProds = "SELECT COUNT(*) FROM compras_producto WHERE ID_Compra=$row[0]";
    if( $resc = mysqli_query($conx,$queryNumProds)){
        $resc = mysqli_query($conx,$queryNumProds);
        $rowP = mysqli_fetch_row($resc);
        $dires[$conta]["nump"] = $rowP[0];
    }
    $conta++;
            }
            if($conta==0){
                $data = array(
                    'status' =>"NoH" 
                );
                mysqli_close($conx);
                echo json_encode($data,JSON_FORCE_OBJECT);
            return;
            }
            mysqli_close($conx);
            echo json_encode($dires,JSON_FORCE_OBJECT);

            return;
  }else{
    $data = array(
      'status' =>"NoE" 
  );
  mysqli_close($conx);
  echo json_encode($data, JSON_FORCE_OBJECT);
  return;
  }

?>
   
    