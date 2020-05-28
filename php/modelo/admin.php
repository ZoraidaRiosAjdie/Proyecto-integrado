<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<?php
    require_once('bd.php');
    class Funcion{
        public $idPelicula;
        public $anio;
        public $titulo;
        public $pais;
        public $genero;
        public $duracion;
        public $fecha_estreno;
        public $calificacion;
        public $sinopsis;
        public $actores;
        public $imagen;
        public $mostrar;
        public $idProyeccion;
        public $idSala;
        public $idTipo;
        public $fecha;
        public $hora;
        public $butaca;
        public $tipo;
        function __construct($idPelicula="", $anio="", $titulo="", $pais="", $genero="", $duracion="", $fecha_estreno="", $calificacion="", $sinopsis="", $actores="", $imagen="", $mostrar="", $idProyeccion="", $idSala="", $idTipo="", $fecha="", $hora="", $butaca="", $tipo=""){
            $this->idPelicula = $idPelicula;
            $this->anio = $anio;
            $this->titulo = $titulo;
            $this->pais = $pais;
            $this->genero = $genero;
            $this->duracion = $duracion;
            $this->fecha_estreno = $fecha_estreno;
            $this->calificacion = $calificacion;
            $this->sinopsis = $sinopsis;
            $this->actores = $actores;
            $this->imagen = $imagen;
            $this->mostrar = $mostrar;
            $this->idProyeccion = $idProyeccion;
            $this->idSala = $idSala;
            $this->idTipo = $idTipo;
            $this->fecha = $fecha;
            $this->hora = $hora;
            $this->butaca = $butaca;
            $this->tipo = $tipo;
        }
        public function cartelera(){
            $consulta ="SELECT pr.idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar, idSala, fecha, hora
                        from pelicula p, proyeccion pr
                        WHERE p.idPelicula = pr.idPelicula";
            return DataBase::getConsultasPDO($consulta);
        }
        public function pelicula(){
            $consulta ="SELECT *
                        from pelicula ";
            return DataBase::getConsultasPDO($consulta);
        }
        public function maxIdPelicula(){
            $consulta ="SELECT MAX(idPelicula) FROM pelicula";
            return DataBase::getConsultasPDO($consulta);
        }
        public function mostrar(){
            $consulta ="UPDATE pelicula
                        SET idPelicula= \"".$this->idPelicula."\",anio=\"".$this->anio."\" ,titulo= \"".$this->titulo."\", pais=\"".$this->pais."\", genero=\"".$this->genero."\" , duracion=\"".$this->duracion."\" , fecha_estreno=\"".$this->fecha_estreno."\" , calificacion=\"".$this->calificacion."\" , sinopsis=\"".$this->sinopsis."\" , actores=\"".$this->actores."\" , imagen=\"".$this->imagen."\" , mostrar=\"".$this->mostrar."\" 
                        WHERE idPelicula=\"".$this->idPelicula."\"";
            return DataBase::getConsultasPDO($consulta);
        }
        public function sala(){
            $consulta ="SELECT idSala
                        from sala";
            return DataBase::getConsultasPDO($consulta);
        }
        public function insertPeli(){
            $insercion = "INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar) 
                        VALUES (null, \"".$this->anio."\",\"".$this->titulo."\", \"".$this->pais."\", \"".$this->genero."\",\"".$this->duracion."\", \"".$this->fecha_estreno."\", \"".$this->calificacion."\", \"".$this->sinopsis."\", \"".$this->actores."\", \"".$this->imagen."\", 0)";
            return DataBase::getConsultasPDO($insercion);
        }
        public function insertPro(){
            $insercion = "INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora) 
                        VALUES (null, \"".$this->idSala."\",\"".$this->idPelicula."\",\"".$this->idTipo."\",\"".$this->fecha."\",\"".$this->hora."\")";
            return DataBase::getConsultasPDO($insercion);
        }
        public function insertSal(){
            $insercion = "INSERT INTO sala (idSala, butaca, tipo) 
                        VALUES (\"".$this->idSala."\",\"".$this->butaca."\", \"".$this->tipo."\")";
            return DataBase::getConsultasPDO($insercion);
        }
        // modificar
        public function updatePeli(){
            $consulta ="UPDATE pelicula
                        SET idPelicula= \"".$this->idPelicula."\",anio =\"".$this->anio."\" ,titulo = \"".$this->titulo."\", pais \"".$this->pais."\", genero = \"".$this->genero."\", duracion =\"".$this->duracion."\", fecha_estreno=\"".$this->fecha_estreno."\", calificacion=\"".$this->calificacion."\", sinopsis=\"".$this->sinopsis."\", actores=\"".$this->actores."\", imagen=\"".$this->imagen."\", mostrar=\"".$this->mostrar."\"
                        WHERE idPelicula=\"".$this->idPelicula."\"";
            return DataBase::getConsultasPDO($consulta);
        }
        public function updatePro(){
            $consulta ="UPDATE proyeccion
                        SET idProyeccion= \"".$this->idProyeccion."\",idSala =\"".$this->idSala."\" ,idPelicula = \"".$this->idPelicula."\", idTipo \"".$this->idTipo."\", fecha = \"".$this->fecha."\", hora =\"".$this->hora."\"
                        WHERE idProyeccion=\"".$this->idProyeccion."\"";
            return DataBase::getConsultasPDO($consulta);
        }
    }