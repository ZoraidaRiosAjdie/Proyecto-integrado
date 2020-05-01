<?php
    require_once("../modelo/usuario.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> mostrar();
    $lista= array();
    $i = 3 ;
    while ($i > 0){
    // while ($todo = $mostrar -> fetch()){
        $todo = $mostrar -> fetch();
        $peli = [
            "idPelicula"=>$todo['idPelicula'],
            "anio"=>$todo['anio'],
            "titulo"=>$todo['titulo'],
            "pais"=>$todo['pais'],
            "genero"=>$todo['genero'],
            "duracion"=>$todo['duracion'],
            "fecha"=>$todo['fecha_estreno'],
            "calificacion"=>$todo['calificacion'],
            "sinopsis"=>$todo['sinopsis'],
            "actores"=>$todo['actores'],
            "imagen"=>$todo['imagen'],
            "valoracion"=>$todo['valoracion']
        ];
        array_push($lista,$peli);
        $i--;
    }
    echo json_encode($lista);
    