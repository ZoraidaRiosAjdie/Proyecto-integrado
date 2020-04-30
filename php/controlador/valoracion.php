<?php
    require_once("../modelo/valoracion.php");
    $peli = new Funcion();
    $mostrar =  $peli -> pelicula();
    $lista= array();
    while ($todo = $mostrar -> fetch()){
        $pelicula = ["titulo"=>$todo['titulo'],"idPelicula"=>$todo['idPelicula']];
        array_push($lista,$pelicula);
    }
    echo json_encode($lista);