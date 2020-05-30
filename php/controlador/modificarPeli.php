<?php
    require_once("../modelo/admin.php");
    var_dump($_POST['resultado']);
    $r = new Funcion($_POST['resultado']['idPelicula'], $_POST['resultado']['anio'], $_POST['resultado']['titulo'], $_POST['resultado']['pais'], $_POST['resultado']['genero'], $_POST['resultado']['duracion'], $_POST['resultado']['fecha_estreno'], $_POST['resultado']['calificacion'], $_POST['resultado']['sinopsis'], $_POST['resultado']['actores'], $_POST['resultado']['imagen'], $_POST['resultado']['mostrar']);
    // $r = new Funcion(8, 'hola', 'hola', 'hola', 'hola', 'hola', 'hola', 'hola', 'hola', 'hola', 'hola', 0);
    var_dump($r);
    $reserva =  $r -> updatePeli();
    var_dump($reserva);