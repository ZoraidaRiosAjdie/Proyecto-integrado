<?php
    require_once("../modelo/usuario.php");
    var_dump($_POST['usuario']);
    $nombre;
    $email;
    $pwd;
    $usuario = new Funcion('',$_POST['usuario'][0]['nombre'],$_POST['usuario'][1]['email'],$_POST['usuario'][2]['pwd'],'',$_POST['usuario'][3]);
    var_dump($usuario);
    $insert =  $usuario -> insert();
    var_dump($insert);