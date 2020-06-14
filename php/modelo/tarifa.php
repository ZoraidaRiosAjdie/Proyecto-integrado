<?php
    require_once('bd.php');    
    /**
     * Funcion
     */
    class Funcion{        
        /**
         * idTipo
         *
         * @var mixed
         */
        public $idTipo;        
        /**
         * nombre
         *
         * @var mixed
         */
        public $nombre;        
        /**
         * definicion
         *
         * @var mixed
         */
        public $definicion;        
        /**
         * precio
         *
         * @var mixed
         */
        public $precio;        
        /**
         * semana
         *
         * @var mixed
         */
        public $semana;        
        /**
         * horario
         *
         * @var mixed
         */
        public $horario;        
        /**
         * rebaja
         *
         * @var mixed
         */
        public $rebaja;        
        /**
         * __construct
         *
         * @param  mixed $idTipo
         * @param  mixed $nombre
         * @param  mixed $definicion
         * @param  mixed $precio
         * @param  mixed $semana
         * @param  mixed $horario
         * @param  mixed $rebaja
         * @return void
         */
        function __construct($idTipo="",$nombre="", $definicion="", $precio="", $semana="", $horario="", $rebaja=""){
            $this->idTipo = $idTipo;
            $this->nombre = $nombre;
            $this->definicion = $definicion;
            $this->precio = $precio;
            $this->semana = $semana;
            $this->horario = $horario;
            $this->rebaja = $rebaja;
        }
                
        /**
         * insertTarifa
         * Intsertar una tarifa 
         * 
         * @access public
         * @return void
         */
        public function insertTarifa(){
            $consulta = "INSERT INTO tarifa (idTipo, nombre, definicion, precio, semana, horario, rebaja) 
                        VALUES (NULL, \"".$this->nombre."\", \"".$this->definicion."\", \"".$this->precio."\", \"".$this->semana."\", \"".$this->horario."\", \"".$this->rebaja."\")";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * updateTarifa
         * Actulizar tarifa 
         *
         * @access public
         * @return void
         */
        public function updateTarifa(){
            $consulta = "UPDATE tarifa
                        SET idTipo= \"".$this->idTipo."\",nombre =\"".$this->nombre."\" ,definicion = \"".$this->definicion."\", precio = \"".$this->precio."\", semana = \"".$this->semana."\", horario = \"".$this->horario."\", rebaja = \"".$this->rebaja."\"
                        WHERE idTipo=\"".$this->idTipo."\"";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * deleteTarifa
         * Borrar tarifas 
         * 
         * @access public
         * @return void
         */
        public function deleteTarifa(){
            $consulta = "DELETE FROM tarifa
                        WHERE idTipo= \"".$this->idTipo."\"";
            return DataBase::getConsultasPDO($consulta);
        }
    }