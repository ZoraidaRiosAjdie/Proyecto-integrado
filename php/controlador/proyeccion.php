<?php
    require_once("../modelo/usuario.php");
    $s = new Funcion();
    $proyeccion =  $s -> proyeccion();
    $lista= array();
    while ($todo = $proyeccion -> fetch()){
        $peli = [
            "titulo"=>$todo['titulo'],
            "idProyeccion"=>$todo['idProyeccion'],
            "idPelicula"=>$todo['idPelicula'],
            "idSala"=>$todo['idSala'],
            "idTipo"=>$todo['idTipo'],
            "nombre"=>$todo['nombre'],
            "fecha"=>$todo['fecha'],
            "hora"=>$todo['hora']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);