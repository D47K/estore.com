<?php 
/**
 * $now = new DateTime();
 $date= $now->format('Y-m-d H:i:s');    // MySQL datetime format
echo $date;

$dir = "../media/img/ff.png";
if(file_exists($dir)){
    echo "Existe";
}
echo "_";
echo rand(10, 30);

function getName($n) { 
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    $randomString = ''; 
  
    for ($i = 0; $i < $n; $i++) { 
        $index = rand(0, strlen($characters) - 1); 
        $randomString .= $characters[$index]; 
    } 
  
    return $randomString; 
} 
  
echo getName(10); 
 */

$dir = "../media/img/";
$dir_file = $dir . basename($_FILES["imagenP"]['name']);
$ext = strtolower(pathinfo($dir_file,PATHINFO_EXTENSION));
$nuevo = getName(10);
$absoultedir = $dir.$nuevo.".".$ext;
    if($ext != "jpg" && $ext != "jpeg" && $ext != "png"){
      $data = array(
        'status' =>"InvalidFile",
        'ext' => $ext 
      );
      echo json_encode($data, JSON_FORCE_OBJECT);
      return;
    }
    if ($_FILES["imagenP"]["size"] > 2000000 || $_FILES["imagenP"]["size"]==0) {
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
              $data = array(
                  'status' =>"OK",
                  'ruta'=>$absoultedir
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