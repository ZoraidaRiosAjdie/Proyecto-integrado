<?php
    require_once("../modelo/usuario.php");
    $s = new Funcion();
    $tarifa =  $s -> tarifaRe();
    $lista= array();
    while ($todo = $tarifa -> fetch()){
        $peli = [
            "idProyeccion"=>$todo['idProyeccion'],
            "idTipo"=>$todo['idTipo'],
            "nombre"=>$todo['nombre'],
            "definicion"=>$todo['definicion'],
            "precio"=>$todo['precio'],
            "fecha"=>$todo['fecha'],
            "hora"=>$todo['hora']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);