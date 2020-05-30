<?php
    require_once("../modelo/tarifa.php");
    var_dump($_POST['resultado']);
    $r = new Funcion(null, $_POST['resultado']['nombre'], $_POST['resultado']['definicion'], $_POST['resultado']['precio']);
    $reserva =  $r -> insertTarifa();