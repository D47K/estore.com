<?php
class eConnection{
    /* Variable de conexion */
    var $Conn;
    /* Variable de resultado de consulta */
    var $Res;
    /* Variable boleana en caso de que exista un error */
    var $errExists=false;
    /* Variable de identificador de error */
    var $errString ="";

    /*
     *@ $bd Nombre de la base de datos
     *@ $host Nombre del host
     *@ $user Nombre del usuario
     *@ $password Contraseña de usuario 
     */
    function conectar(){
       if(!$this->Conn = mysqli_connect("localhost","root","","estores")){
        $this->errExists = true;
        $this->errString="No se pudo realizar la conexion";
        return false;
       }
       return true;     
    }

    function consultar($query){
        if($query ==""){
            $this->errExists = true;
            $this->errString="Consulta vacia";
            return false;
            
        }
         $this->res = mysqli_query($this->Conn,$query);
      
        if(!$this->res){
            $this->errExists = true;
            $this->errString="Hubo un error con la consulta";
            return $this->errExists;
        }else{
            return true;
        }
    }
    function InsertData($query){
        if (!$this->errExists){
           if(mysqli_query($this->Conn,$query)){
               return true;
           }else{
               return false;
           }
        }
    }
    function numFilas(){
        if($this->errExists){
            return 0;
        }
        return mysqli_num_rows($this->res);
    }
    function affected(){
        if($this->errExists){
            return 0;
        }
        return  mysqli_affected_rows($this->Conn);
    }
    function numCols(){
        if($this->errExists){
            return 0;
        }
        return  mysqli_num_fields($this->res);
    }
    function getNameField($numCol){
        if(!is_numeric($numCol)){
            $this->errExists = true;
            $this->errString="Se necesita un numero";
            return false;
        }
        return $this->mysqli_field_name($this->res,$numCol);
    }
    /**
     * Existia una funcion para obtener el nombre de la columna pero
     * por alguna razon ya no esta en esta en version mas actual de php
     * asi que se crea esta funcion local que cumpla con dicho objetivo
     */
    function mysqli_field_name($result, $field_offset)
{
    $properties = mysqli_fetch_field_direct($result, $field_offset);
    return is_object($properties) ? $properties->name : null;
}
    function getRes(){
        if($this->errExists){
            return null;
        }
        return $this->res;
    }
    /**
     * Pretende crear un JSON del resultado de la consulta (incompleto)
     */
    function getJSONData(){
        if(!$this->errExists){
            $rawdata = array(); //creamos un array
    //guardamos en un array multidimensional todos los datos de la consulta
    $i=0;
    while($row = mysqli_fetch_array($this->getRes()))
    {
        $rawdata[$i] = $row;
        $i++;
    }
    echo json_encode($rawdata, JSON_FORCE_OBJECT);           
        }
    }
    function closeCon(){
        if (!$this->errExists){
            return "No hay errores";
        }
        return mysqli_close($this->Conn);
    }
    function getError(){
        if (!$this->errExists){
            return "No hay errores";
        }
        return $this->errString;
    }
    function isError(){
        return $this->errExists;
    }
  
}


    ?>