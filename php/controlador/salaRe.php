<?php
    require_once("../modelo/usuario.php");
    $s = new Funcion();
    $sala =  $s -> sala();
    $lista= array();
    while ($todo = $sala -> fetch()){
        $peli = [
            "idSala"=>$todo['idSala'],
            "butaca"=>$todo['butaca'],
            "tipo"=>$todo['tipo']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);