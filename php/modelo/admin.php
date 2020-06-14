<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<?php
    require_once('bd.php');    
    /**
     * Clase funcion
     */
    class Funcion{                  
        /**
         * idPelicula
         *
         * @var mixed
         */
        public $idPelicula;        
        /**
         * anio
         *
         * @var mixed
         */
        public $anio;        
        /**
         * titulo
         *
         * @var mixed
         */
        public $titulo;        
        /**
         * pais
         *
         * @var mixed
         */
        public $pais;        
        /**
         * genero
         *
         * @var mixed
         */
        public $genero;        
        /**
         * duracion
         *
         * @var mixed
         */
        public $duracion;        
        /**
         * fecha_estreno
         *
         * @var mixed
         */
        public $fecha_estreno;        
        /**
         * calificacion
         *
         * @var mixed
         */
        public $calificacion;        
        /**
         * sinopsis
         *
         * @var mixed
         */
        public $sinopsis;        
        /**
         * actores
         *
         * @var mixed
         */
        public $actores;        
        /**
         * imagen
         *
         * @var mixed
         */
        public $imagen;        
        /**
         * mostrar
         *
         * @var mixed
         */
        public $mostrar;        
        /**
         * otros
         *
         * @var mixed
         */
        public $otros;        
        /**
         * trailler
         *
         * @var mixed
         */
        public $trailler;        
        /**
         * idProyeccion
         *
         * @var mixed
         */
        public $idProyeccion;        
        /**
         * idSala
         *
         * @var mixed
         */
        public $idSala;        
        /**
         * idTipo
         *
         * @var mixed
         */
        public $idTipo;        
        /**
         * fecha
         *
         * @var mixed
         */
        public $fecha;        
        /**
         * hora
         *
         * @var mixed
         */
        public $hora;        
        /**
         * butaca
         *
         * @var mixed
         */
        public $butaca;        
        /**
         * tipo
         *
         * @var mixed
         */
        public $tipo;        
        /**
         * __construct
         *
         * @param  mixed $idPelicula
         * @param  mixed $anio
         * @param  mixed $titulo
         * @param  mixed $pais
         * @param  mixed $genero
         * @param  mixed $duracion
         * @param  mixed $fecha_estreno
         * @param  mixed $calificacion
         * @param  mixed $sinopsis
         * @param  mixed $actores
         * @param  mixed $imagen
         * @param  mixed $mostrar
         * @param  mixed $otros
         * @param  mixed $trailler
         * @param  mixed $idProyeccion
         * @param  mixed $idSala
         * @param  mixed $idTipo
         * @param  mixed $fecha
         * @param  mixed $hora
         * @param  mixed $butaca
         * @param  mixed $tipo
         * @return void
         */
        function __construct($idPelicula="", $anio="", $titulo="", $pais="", $genero="", $duracion="", $fecha_estreno="", $calificacion="", $sinopsis="", $actores="", $imagen="", $mostrar="", $otros = "", $trailler="",$idProyeccion="", $idSala="", $idTipo="", $fecha="", $hora="", $butaca="", $tipo=""){
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
            $this->otros = $otros;
            $this->trailler = $trailler;
            $this->idProyeccion = $idProyeccion;
            $this->idSala = $idSala;
            $this->idTipo = $idTipo;
            $this->fecha = $fecha;
            $this->hora = $hora;
            $this->butaca = $butaca;
            $this->tipo = $tipo;
        }
                
        /**
         * cartelera
         * Cartelera nos servira para darnos los datos de pelicula y profeccion
         * Nota!:Lo he usadi en pelicula.php
         * @access public
         * @return void
         */
        public function cartelera(){
            $consulta ="SELECT idProyeccion ,pr.idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar, otros, trailler, idSala, fecha, hora
                        from pelicula p, proyeccion pr
                        WHERE p.idPelicula = pr.idPelicula";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * pelicula
         * Nos da todos los datos de una pelicula
         * Nota!: este es usado para soloPeli.php
         * @access public
         * @return void
         */
        public function pelicula(){
            $consulta ="SELECT *
                        from pelicula ";
            return DataBase::getConsultasPDO($consulta);
        }
        
        /**
         * proyeccion
         * Nos da todos los datos de una proyeccion
         * Nota!: este es usado para soloPro.php
         * @access public
         * @return void
         */
        public function proyeccion(){
            $consulta ="SELECT *
                        from proyeccion ";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * maxIdPelicula
         * Esta funcion dos da el idPelicula maximo
         * Nota!: Se esta usando para maxIdPelicula.php
         * @access public
         * @return void
         */
        public function maxIdPelicula(){
            $consulta ="SELECT MAX(idPelicula) FROM pelicula";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * sala
         * Me de volvera solo el id de sala 
         * Nota!: Usado en sala.php
         * @access public
         * @return void
         */
        public function sala(){
            $consulta ="SELECT idSala
                        from sala";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * insertPeli
         * Esta función nos ayudará a insertar una pelicula
         * @access public
         * @return void
         */
        public function insertPeli(){
            $insercion = "INSERT INTO pelicula (idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores, imagen, mostrar, otros, trailler) 
                        VALUES (null, \"".$this->anio."\",\"".$this->titulo."\", \"".$this->pais."\", \"".$this->genero."\",\"".$this->duracion."\", \"".$this->fecha_estreno."\", \"".$this->calificacion."\", \"".$this->sinopsis."\", \"".$this->actores."\", \"".$this->imagen."\", 0, \"".$this->otros."\", \"".$this->trailler."\")";
            return DataBase::getConsultasPDO($insercion);
        }        
        /**
         * insertPro
         * Esta función nos ayudará a insertar una proyección
         * @access public
         * @return void
         */
        public function insertPro(){
            $insercion = "INSERT INTO proyeccion (idProyeccion, idSala, idPelicula, idTipo, fecha, hora) 
                        VALUES (null, \"".$this->idSala."\",\"".$this->idPelicula."\",\"".$this->idTipo."\",\"".$this->fecha."\",\"".$this->hora."\")";
            return DataBase::getConsultasPDO($insercion);
        }      
        /**
         * updatePeli
         * Esta función nos ayudará a actualizar una pelicula
         * @access public
         * @return void
         */
        public function updatePeli(){
            $consulta ="UPDATE pelicula
                        SET idPelicula= \"".$this->idPelicula."\", 
                            anio =\"".$this->anio."\" ,
                            titulo = \"".$this->titulo."\", 
                            pais = \"".$this->pais."\", 
                            genero = \"".$this->genero."\", 
                            duracion =\"".$this->duracion."\", 
                            fecha_estreno=\"".$this->fecha_estreno."\", 
                            calificacion=\"".$this->calificacion."\", 
                            sinopsis=\"".$this->sinopsis."\", 
                            actores=\"".$this->actores."\", 
                            imagen=\"".$this->imagen."\", 
                            mostrar=\"".$this->mostrar."\",
                            otros=\"".$this->otros."\",
                            trailler=\"".$this->trailler."\"
                        WHERE idPelicula=\"".$this->idPelicula."\"";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * updatePro
         * Esta función nos ayudará a actualizar una proyección
         * @access public
         * @return void
         */
        public function updatePro(){
            $consulta ="UPDATE proyeccion
                        SET idProyeccion= \"".$this->idProyeccion."\",idSala =\"".$this->idSala."\" ,idPelicula = \"".$this->idPelicula."\", idTipo = \"".$this->idTipo."\", fecha = \"".$this->fecha."\", hora =\"".$this->hora."\"
                        WHERE idProyeccion=\"".$this->idProyeccion."\"";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * deletePeli
         * Esta función nos ayudará a eliminar una pelicula
         * @access public
         * @return void
         */
        public function deletePeli(){
            $consulta ="DELETE FROM pelicula
                        WHERE idPelicula= \"".$this->idPelicula."\"";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * deletePro
         * Esta función nos ayudará a eliminar una proyección
         * @access public
         * @return void
         */
        public function deletePro(){
            $consulta ="DELETE FROM proyeccion
                        WHERE  idProyeccion= \"".$this->idProyeccion."\"";
            return DataBase::getConsultasPDO($consulta);
        }
    }