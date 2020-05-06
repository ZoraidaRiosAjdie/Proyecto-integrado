<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<?php
    require_once('bd.php');
    class Funcion{
        public $idReserva;
        public $idUsuario;
        public $idProyeccion;
        public $butaca;
        public $idSala;
        public $tipo;
        function __construct($idReserva="",$idUsuario="", $idProyeccion="", $butaca="", $idSala="", $tipo=""){
            $this->idReserva = $idReserva;
            $this->idUsuario = $idUsuario;
            $this->idProyeccion = $idProyeccion;
            $this->butaca = $butaca;
            $this->idSala = $idSala;
            $this->tipo = $tipo;
        }
        
        // Para reserva 
        public function reserva(){
            $insercion = "INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca) 
                        VALUES (NULL, \"".$this->idUsuario."\", \"".$this->idProyeccion."\", \"".$this->butaca."\")";
            return DataBase::getConsultasPDO($insercion);
        }
        public function butaca(){
            $consulta ="UPDATE sala
                        SET idSala= \"".$this->idSala."\",butaca=\"".$this->butaca."\" ,tipo= \"".$this->tipo."\"  
                        WHERE idSala=\"".$this->idSala."\"";
            return DataBase::getConsultasPDO($consulta);
        }
    }
?>