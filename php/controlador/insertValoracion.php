<?php
    require_once("../modelo/valoracion.php");
    var_dump($_POST['valoracion']);
    $usuario = new Funcion($_POST['valoracion']['idUsuario'],$_POST['valoracion']['idPelicula'],$_POST['valoracion']['valoracion']);
    $insert =  $usuario -> insert();