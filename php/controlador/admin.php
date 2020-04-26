<?php session_start();?>
<?php 
    require_once("../modelo/usuario.php");
    var_dump($_POST['resultado']);
    $_SESSION['admin']=$_POST['resultado'];
    header('location:../vista/principal.php');
