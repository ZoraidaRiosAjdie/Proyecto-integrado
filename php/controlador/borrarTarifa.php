<?php
    require_once("../modelo/tarifa.php");
    var_dump($_POST['resultado']);
    $r = new Funcion($_POST['resultado']['idTipo']);
    $reserva =  $r -> deleteTarifa();