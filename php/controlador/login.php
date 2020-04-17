<?php session_start();?>
<?php
require_once("../modelo/funciones.php");
// var_dump($_SESSION['nombre']);
$usuario = new Funcion();
$validacion = $usuario->usuario($_SESSION['nombre'],$_SESSION['pwd']); // Verificación de usuario en la base de datos
$usuario = ["resultado"=>$validacion];
echo json_encode($usuario);
session_destroy();
