<?php session_start();?>
<?php 
    require_once("../modelo/cartelera.php");
    $pelicula = new Funcion();
    $mostrar =  $pelicula -> cartelera();
    $lista= array();
    while ($todo = $mostrar -> fetch()){
        $peli = [
            "anio"=>$todo['anio'],
            "titulo"=>$todo['titulo'],
            "pais"=>$todo['pais'],
            "genero"=>$todo['genero'],
            "duracion"=>$todo['duracion'],
            "fecha"=>$todo['fecha_estreno'],
            "sinopsis"=>$todo['sinopsis'],
            "actores"=>$todo['actores'],
            "imagen"=>$todo['imagen'],
            "idSala"=>$todo['idSala'],
            "fecha_pro"=>$todo['fecha'],
            "hora"=>$todo['hora']
        ];
        array_push($lista,$peli);
    }
    echo json_encode($lista);