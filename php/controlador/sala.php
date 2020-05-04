<?php 
    require_once("../modelo/admin.php");
    $s = new Funcion();
    $sala =  $s -> sala();
    include_once('../vista/insertPelicula.php');