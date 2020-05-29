<?php
    require_once("../modelo/admin.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> proyeccion();
    $lista= array();
    while ($todo = $mostrar -> fetch()){
        $peli = [
            "idProyeccion"=>$todo['idProyeccion'],
            "idSala"=>$todo['idSala'],
            "idPelicula"=>$todo['idPelicula'],
            "idTipo"=>$todo['idTipo'],
            "fecha"=>$todo['fecha'],
            "hora"=>$todo['hora']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);