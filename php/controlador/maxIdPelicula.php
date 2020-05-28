<?php    
    require_once("../modelo/admin.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> maxIdPelicula();
    $todo = $mostrar -> fetch();
    $peli = ['idPelicula' => $todo['MAX(idPelicula)']];
    echo json_encode($peli);