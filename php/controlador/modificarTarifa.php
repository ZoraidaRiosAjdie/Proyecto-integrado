<?php
    require_once("../modelo/tarifa.php");
    var_dump($_POST['resultado']);
    $r = new Funcion($_POST['resultado']['idTipo'], $_POST['resultado']['nombre'], $_POST['resultado']['definicion'], $_POST['resultado']['precio']);
    $reserva =  $r -> updateTarifa();