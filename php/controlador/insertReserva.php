<?php
    require_once("../modelo/reserva.php");
    var_dump($_POST['resultado']);
    $r = new Funcion(null, $_POST['resultado']['idUsuario'], $_POST['resultado']['idProyeccion'], $_POST['resultado']['butaca']);
    $reserva =  $r -> reserva();
