<?php
    require_once("../modelo/reserva.php");
    var_dump($_POST['resultado']);
    $r = new Funcion($_POST['resultado']['idReserva']);
    $reserva =  $r -> deleteReserva();
    var_dump($reserva);