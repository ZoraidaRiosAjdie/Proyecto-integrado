<?php
    require_once("../modelo/admin.php");
    var_dump($_POST['resultado']);
    $r = new Funcion('','','','','','','','','','','','',"","",$_POST['resultado']['idProyeccion'], '', '', '', '','','');
    var_dump($r);
    $reserva =  $r -> deletePro();
    var_dump($reserva);