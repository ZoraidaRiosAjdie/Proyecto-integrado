<?php
    require_once("../modelo/usuario.php");
    $pelicula = new Funcion();
    $tarifa =  $pelicula -> tarifa();
    $lista= array();
    while ($todo = $tarifa -> fetch()){
        $peli = [
            "idTipo"=>$todo['idTipo'],
            "nombre"=>$todo['nombre'],
            "definicion"=>$todo['definicion'],
            "precio"=>$todo['precio']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);