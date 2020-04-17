<?php session_start();?>
<?php
require_once("../modelo/usuario.php");
// var_dump($_SESSION['nombre']);
$usuario = new Funcion();
$validacion = $usuario->usuario($_SESSION['nombre'],$_SESSION['pwd']); // Verificación de usuario en la base de datos
$usuario = ["resultado"=>$validacion];
session_destroy();
echo json_encode($usuario);