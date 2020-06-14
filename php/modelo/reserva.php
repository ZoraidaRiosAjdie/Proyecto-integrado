
<?php
    require_once('bd.php');    
    /**
     * Funcion
     */
    class Funcion{        
        /**
         * idReserva
         *
         * @var mixed
         */
        public $idReserva;        
        /**
         * idUsuario
         *
         * @var mixed
         */
        public $idUsuario;        
        /**
         * idProyeccion
         *
         * @var mixed
         */
        public $idProyeccion;        
        /**
         * butaca
         *
         * @var mixed
         */
        public $butaca;        
        /**
         * idSala
         *
         * @var mixed
         */
        public $idSala;        
        /**
         * tipo
         *
         * @var mixed
         */
        public $tipo;        
        /**
         * __construct
         *
         * @param  mixed $idReserva
         * @param  mixed $idUsuario
         * @param  mixed $idProyeccion
         * @param  mixed $butaca
         * @param  mixed $idSala
         * @param  mixed $tipo
         * @return void
         */
        function __construct($idReserva="",$idUsuario="", $idProyeccion="", $butaca="", $idSala="", $tipo=""){
            $this->idReserva = $idReserva;
            $this->idUsuario = $idUsuario;
            $this->idProyeccion = $idProyeccion;
            $this->butaca = $butaca;
            $this->idSala = $idSala;
            $this->tipo = $tipo;
        }
                
        /**
         * todoReserva
         * Nos dará todos los datos de reserva
         * @access public
         * @return void
         */
        public function todoReserva(){
            $insercion = "SELECT *
                        from reserva ";
            return DataBase::getConsultasPDO($insercion);
        }        
        /**
         * reserva
         * Insertar reserva en base de datos
         * @access public
         * @return void
         */
        public function reserva(){
            $insercion = "INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca) 
                        VALUES (NULL, \"".$this->idUsuario."\", \"".$this->idProyeccion."\", \"".$this->butaca."\")";
            return DataBase::getConsultasPDO($insercion);
        }        
        /**
         * butaca
         * Nos actualizará la sala y por ello el numero de butacas
         * @access public
         * @return void
         */
        public function butaca(){
            $consulta ="UPDATE sala
                        SET idSala= \"".$this->idSala."\",butaca=\"".$this->butaca."\" ,tipo= \"".$this->tipo."\"  
                        WHERE idSala=\"".$this->idSala."\"";
            return DataBase::getConsultasPDO($consulta);
        }
                
        /**
         * deleteReserva
         * Elimina la reserva
         * @access public
         * @return void
         */
        public function deleteReserva(){
            $consulta ="DELETE FROM reserva
                        WHERE  idReserva= \"".$this->idReserva."\"";
            return DataBase::getConsultasPDO($consulta);
        }
    }
?>