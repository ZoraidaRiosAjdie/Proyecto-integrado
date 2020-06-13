<?php
    require_once("../modelo/admin.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> pelicula();
    $lista= array();
    while ($todo = $mostrar -> fetch()){
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
            "mostrar"=>$todo['mostrar'], 
            "otros"=>$todo['otros'],
            "trailler"=>$todo['trailler']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);