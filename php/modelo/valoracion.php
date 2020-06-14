<?php
    require_once('bd.php');    
    /**
     * Funcion
     */
    class Funcion{        
        /**
         * idUsuario
         *
         * @var mixed
         */
        public $idUsuario;        
        /**
         * idPelicula
         *
         * @var mixed
         */
        public $idPelicula;        
        /**
         * valoracion
         *
         * @var mixed
         */
        public $valoracion;        
        /**
         * __construct
         *
         * @param  mixed $idUsuario
         * @param  mixed $idPelicula
         * @param  mixed $valoracion
         * @return void
         */
        function __construct($idUsuario="", $idPelicula="", $valoracion=""){
            $this->idUsuario = $idUsuario;
            $this->idPelicula = $idPelicula;
            $this->valoracion = $valoracion;
        }        
        /**
         * pelicula
         * Muestra el id de la peliculas y el titulo
         * 
         * @access public
         * @return void
         */
        public function pelicula(){
            $consulta ="SELECT idPelicula,titulo
                        from pelicula";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * insert
         * Inserta una valoración a la bd
         * 
         * @access public
         * @return void
         */
        public function insert(){
            $insercion = "INSERT INTO valoracion (idUsuario, idPelicula, valoracion) 
                        VALUES (\"".$this->idUsuario."\", \"".$this->idPelicula."\", \"".$this->valoracion."\")";
            return DataBase::getConsultasPDO($insercion);
        }
    }
?>