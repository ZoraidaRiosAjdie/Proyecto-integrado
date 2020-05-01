<?php 
    require_once("../modelo/usuario.php");
    $pelicula = new Funcion();
    $tarifa =  $pelicula -> tarifa();
    include_once('../vista/tarifa.php');