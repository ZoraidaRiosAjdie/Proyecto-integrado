<?php session_start();?>
<?php
    require_once '../modelo/funciones.php'; 
    // include '../vista/registro.php';
    $funcion = new Funcion();
    $usuario = $funcion -> usuario($_SESSION["nombre"], $_SESSION["contraseña"]);
    // $registro = $usuario -> fetch();
    // echo json_encode($registro);
    // var_dump($registro);
    
    if($usuario == "noo existe"){
        echo "no existe";
    }
    else{
        echo "bien";
    } 
?>