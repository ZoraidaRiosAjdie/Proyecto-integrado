<?php
    require_once("../modelo/reserva.php");
    var_dump($_POST['resultado']);
    $r = new Funcion('','','',$_POST['resultado']['butaca'],$_POST['resultado']['idSala'],$_POST['resultado']['tipo']);
    $reserva =  $r -> butaca();