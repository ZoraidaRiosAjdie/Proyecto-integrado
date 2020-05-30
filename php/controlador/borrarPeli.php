<?php
    require_once("../modelo/admin.php");
    var_dump($_POST['resultado']);
    $r = new Funcion($_POST['resultado']['idPelicula']);
    var_dump($r);
    $reserva =  $r -> deletePeli();
    var_dump($reserva);