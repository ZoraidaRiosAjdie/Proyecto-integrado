<?php
    require_once("../modelo/reserva.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> todoReserva();
    $lista= array();
    // $i = 3 ;
    // while ($i > 0){
    while ($todo = $mostrar -> fetch()){
        // $todo = $mostrar -> fetch();
        $peli = [
            "idReserva"=>$todo['idReserva'],
            "idUsuario"=>$todo['idUsuario'],
            "idProyeccion"=>$todo['idProyeccion'],
            "butaca"=>$todo['butaca']
        ];
        array_push($lista,$peli);
        // $i--;
    }
    echo json_encode($lista);