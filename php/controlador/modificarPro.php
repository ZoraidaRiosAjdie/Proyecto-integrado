<?php
    require_once("../modelo/admin.php");
    var_dump($_POST['resultado']);
    $r = new Funcion($_POST['resultado']['idPelicula'],'','','','','','','','','','','','','',$_POST['resultado']['idProyeccion'], $_POST['resultado']['idSala'], $_POST['resultado']['idTipo'], $_POST['resultado']['fecha'], $_POST['resultado']['hora'],'','');
      
    var_dump($r);
    $reserva =  $r -> updatePro();
    var_dump($reserva);