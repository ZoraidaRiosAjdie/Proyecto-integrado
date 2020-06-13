<?php 
    require_once("../modelo/admin.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> cartelera();
    $lista= array();
    while ($todo = $mostrar -> fetch()){
        $peli = [
            "idProyeccion"=>$todo['idProyeccion'],
            "idPelicula"=>$todo['idPelicula'],
            "anio"=>$todo['anio'],
            "titulo"=>$todo['titulo'],
            "pais"=>$todo['pais'],
            "genero"=>$todo['genero'],
            "duracion"=>$todo['duracion'],
            "fecha_estreno"=>$todo['fecha_estreno'],
            "calificacion"=>$todo['calificacion'],
            "sinopsis"=>$todo['sinopsis'],
            "actores"=>$todo['actores'],
            "imagen"=>$todo['imagen'],
            "mostrar"=>$todo['mostrar'],
            "otros"=>$todo['otros'],
            "trailler"=>$todo['trailler'],
            "idSala"=>$todo['idSala'],
            "fecha"=>$todo['fecha'],
            "hora"=>$todo['hora']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);