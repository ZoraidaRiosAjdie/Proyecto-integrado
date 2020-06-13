<?php
require_once("../modelo/admin.php");
var_dump($_POST['resultado']);
$r = new Funcion(null, $_POST['resultado']['anio'], $_POST['resultado']['titulo'], $_POST['resultado']['pais'], $_POST['resultado']['genero'], $_POST['resultado']['duracion'], $_POST['resultado']['fecha_estreno'], $_POST['resultado']['calificacion'], $_POST['resultado']['sinopsis'], $_POST['resultado']['actores'], $_POST['resultado']['imagen'], $_POST['resultado']['mostrar'], $_POST['resultado']['otros'], $_POST['resultado']['trailler']);
// $r = new Funcion('', '1998', 'a', 'a', 'a', '2', '2020/12/12', '+16', 'a', 'a', 'a', 0, 'a', 'a');
var_dump($r);
$reserva =  $r -> insertPeli();
var_dump($reserva);