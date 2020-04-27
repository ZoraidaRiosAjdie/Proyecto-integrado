<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<?php
    require_once('bd.php');
    class Funcion{
        // public $idPelicula;
        // public $anio;
        // public $titulo;
        // public $pais;
        // public $genero;
        // public $duracion;
        // public $fecha_estreno;
        // public $calificacion;
        // public $sinopsis;
        // public $imagen;
        // function __construct($idPelicula="", $anio="", $titulo="", $pais="", $genero="", $duracion="", $fecha_estreno="", $calificacion="", $sinopsis="", $imagen=""){
        //     $this->idPelicula = $idPelicula;
        //     $this->anio = $anio;
        //     $this->titulo = $titulo;
        //     $this->pais = $pais;
        //     $this->genero = $genero;
        //     $this->duracion = $duracion;
        //     $this->fecha_estreno = $fecha_estreno;
        //     $this->calificacion = $calificacion;
        //     $this->sinopsis = $sinopsis;
        //     $this->imagen = $imagen;
        // }
        public function mostrar(){
            $consulta ="SELECT p.idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores,imagen, valoracion
                        from pelicula p, valoracion v
                        WHERE p.idPelicula = v.idPelicula
                        ORDER BY anio DESC";
            return DataBase::getConsultasPDO($consulta);
        }
        public function cartelera(){
            $consulta ="SELECT p.idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, sinopsis, actores, imagen, idSala, fecha, hora
                        from pelicula p, proyeccion pr
                        WHERE p.idPelicula = pr.idPelicula";
            return DataBase::getConsultasPDO($consulta);
        }
        // public function valoracion(){
        //     $consulta ="SELECT valoracion
        //                 from valoracion";
        //     return DataBase::getConsultasPDO($consulta);
        // }
    }
?>