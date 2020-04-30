<?php session_start();?>
<?php
require_once("../modelo/usuario.php");
// // var_dump($_SESSION['nombre']);
// $usuario = new Funcion();
// $validacion = $usuario->usuario($_SESSION['nombre'],$_SESSION['pwd']); // Verificación de usuario en la base de datos
// $todo = $validacion -> fetch();
// $lista=['resultado' =>$todo['idUsuario']];
// // session_destroy();
// echo json_encode($lista);
$usuario = new Funcion();
$validacion = $usuario->usuario();
$lista= array();
while ($todo = $validacion -> fetch()){
    $usuario = ['idUsuario'=>$todo['idUsuario'],'nombre'=>$todo['nombre'],'pwd'=>$todo['pws'],'admin'=>$todo['admin']];
    array_push($lista,$usuario);
}
echo json_encode($lista);