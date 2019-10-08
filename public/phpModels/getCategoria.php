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
$idCat = $_POST["idC"];
header('Content-Type: application/json');
$conx = mysqli_connect("localhost","root","","estores");
if($conx==null){
$data = array(
  'status' =>"Error" 
);
echo json_encode($data, JSON_FORCE_OBJECT);
return;
}

$query="SELECT * FROM producto INNER JOIN mediars ON mediars.ID_Producto = producto.ID INNER JOIN categoria_prod ON categoria_prod.ID_Producto = producto.ID INNER JOIN categorias ON categoria_prod.ID_Categoria = categorias.ID WHERE categorias.ID =$idCat ORDER BY producto.Nombre";
if($res = mysqli_query($conx,$query)){
    $matri=null;
            $conta=0;
            while($row = mysqli_fetch_array($res)){
                
    $matri[$conta]['id']=utf8_encode($row[0]);
    $matri[$conta]['nombre']=  utf8_encode($row[1]);
    $matri[$conta]['nombrec']= utf8_encode($row[16]);
    $matri[$conta]['foto'] =utf8_encode($row[11]);
    $matri[$conta]['precio'] =utf8_encode($row[5]);
    $matri[$conta]['descr'] =utf8_encode($row[6]);
    $conta++;
            }
            echo json_encode($matri,JSON_FORCE_OBJECT);
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
   
    