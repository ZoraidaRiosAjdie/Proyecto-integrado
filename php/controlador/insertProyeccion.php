<?php
    require_once("../modelo/admin.php");
    var_dump($_POST['resultado']);
    $r = new Funcion($_POST['resultado']['idPelicula'],'','','','','','','','','','','','','',null, $_POST['resultado']['idSala'], $_POST['resultado']['idTipo'], $_POST['resultado']['fecha'], $_POST['resultado']['hora'],'','');
    // $r = new Funcion(9,'','','','','','','','','','','',null, '3', '3', '2020-06-29', '12:19','','');
    var_dump($r);
    $reserva =  $r -> insertPro();
    var_dump($reserva);