<?php
require_once("../modelo/admin.php");
var_dump($_POST['resultado']);
$r = new Funcion(null, $_POST['resultado']['anio'], $_POST['resultado']['titulo'], $_POST['resultado']['pais'], $_POST['resultado']['genero'], $_POST['resultado']['duracion'], $_POST['resultado']['fecha_estreno'], $_POST['resultado']['calificacion'], $_POST['resultado']['sinopsis'], $_POST['resultado']['actores'], $_POST['resultado']['imagen'], $_POST['resultado']['mostrar']);
$reserva =  $r -> insertPeli();