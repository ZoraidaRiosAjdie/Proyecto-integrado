<?php
    require_once('bd.php');
    class Funcion{
        public $idUsuario;
        public $idPelicula;
        public $valoracion;
        function __construct($idUsuario="", $idPelicula="", $valoracion=""){
            $this->idUsuario = $idUsuario;
            $this->idPelicula = $idPelicula;
            $this->valoracion = $valoracion;
        }
        // Para titulo peli
        public function pelicula(){
            $consulta ="SELECT idPelicula,titulo
                        from pelicula";
            return DataBase::getConsultasPDO($consulta);
        }
        // Para insertar valoración
        public function insert(){
            $insercion = "INSERT INTO valoracion (idUsuario, idPelicula, valoracion) 
                        VALUES (\"".$this->idUsuario."\", \"".$this->idPelicula."\", \"".$this->valoracion."\")";
            return DataBase::getConsultasPDO($insercion);
        }
    }
?>