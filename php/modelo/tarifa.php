<?php
    require_once('bd.php');
    class Funcion{
        public $idTipo;
        public $nombre;
        public $definicion;
        public $precio;
        public $semana;
        public $horario;
        public $rebaja;
        function __construct($idTipo="",$nombre="", $definicion="", $precio="", $semana="", $horario="", $rebaja=""){
            $this->idTipo = $idTipo;
            $this->nombre = $nombre;
            $this->definicion = $definicion;
            $this->precio = $precio;
            $this->semana = $semana;
            $this->horario = $horario;
            $this->rebaja = $rebaja;
        }
        
        // Para reserva 
        public function insertTarifa(){
            $consulta = "INSERT INTO tarifa (idTipo, nombre, definicion, precio, semana, horario, rebaja) 
                        VALUES (NULL, \"".$this->nombre."\", \"".$this->definicion."\", \"".$this->precio."\", \"".$this->semana."\", \"".$this->horario."\", \"".$this->rebaja."\")";
            return DataBase::getConsultasPDO($consulta);
        }
        public function updateTarifa(){
            $consulta = "UPDATE tarifa
                        SET idTipo= \"".$this->idTipo."\",nombre =\"".$this->nombre."\" ,definicion = \"".$this->definicion."\", precio = \"".$this->precio."\", semana = \"".$this->semana."\", horario = \"".$this->horario."\", rebaja = \"".$this->rebaja."\"
                        WHERE idTipo=\"".$this->idTipo."\"";
            return DataBase::getConsultasPDO($consulta);
        }
        public function deleteTarifa(){
            $consulta = "DELETE FROM tarifa
                        WHERE idTipo= \"".$this->idTipo."\"";
            return DataBase::getConsultasPDO($consulta);
        }
    }