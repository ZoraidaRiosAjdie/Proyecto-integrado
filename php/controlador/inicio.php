<?php
    require_once("../modelo/cartelera.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> mostrar();
    // var_dump($mostrar);
    include('../vista/inicio.php');
    