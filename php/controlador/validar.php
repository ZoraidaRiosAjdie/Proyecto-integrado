<?php
    require_once("../modelo/usuario.php");
    $usuario = new Funcion();
    $mostrar =  $usuario -> validar();
    $lista1= array();
    while ($todo = $mostrar -> fetch()){
        $usuario = ["nombre"=>$todo['nombre'],
                    "email"=>$todo['email'],
                    "pwd"=>$todo['pws'],
                    "imagen"=>$todo['imagen']
                ];
        array_push($lista1,$usuario);
    }
    // $lista = ['registro'=>$lista1];
    // var_dump($lista);
    echo json_encode($lista1);