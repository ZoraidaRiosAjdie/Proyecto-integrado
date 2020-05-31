<?php session_start();?>
<?php
require_once("../modelo/usuario.php");
$usuario = new Funcion();
$validacion = $usuario->usuario();
$lista= array();
while ($todo = $validacion -> fetch()){
    $usuario = [
    'idUsuario'=>$todo['idUsuario'],
    'nombre'=>$todo['nombre'],
    'pwd'=>$todo['pws'],
    'email'=>$todo['email'],
    'admin'=>$todo['admin'],
    'imagen'=>$todo['imagen']];
    array_push($lista,$usuario);
}
echo json_encode($lista);