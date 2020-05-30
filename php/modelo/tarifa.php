<?php
    require_once('bd.php');
    class Funcion{
        public $idTipo;
        public $nombre;
        public $definicion;
        public $precio;
        function __construct($idTipo="",$nombre="", $definicion="", $precio=""){
            $this->idTipo = $idTipo;
            $this->nombre = $nombre;
            $this->definicion = $definicion;
            $this->precio = $precio;
        }
        
        // Para reserva 
        public function insertTarifa(){
            $consulta = "INSERT INTO tarifa (idTipo, nombre, definicion, precio) 
                        VALUES (NULL, \"".$this->nombre."\", \"".$this->definicion."\", \"".$this->precio."\")";
            return DataBase::getConsultasPDO($consulta);
        }
        public function updateTarifa(){
            $consulta = "UPDATE tarifa
                        SET idTipo= \"".$this->idTipo."\",nombre =\"".$this->nombre."\" ,definicion = \"".$this->definicion."\", precio = \"".$this->precio."\"
                        WHERE idTipo=\"".$this->idTipo."\"";
            return DataBase::getConsultasPDO($consulta);
        }
        public function deleteTarifa(){
            $consulta = "DELETE FROM tarifa
                        WHERE idTipo= \"".$this->idTipo."\"";
            return DataBase::getConsultasPDO($consulta);
        }
    }