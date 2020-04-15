<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<?php
    require_once('bd.php');
    class Funcion{
        public $idUsuario;
        public $nombre;
        public $email;
        public $pws;
        public $admin;
        function __construct($idUsuario="", $nombre="", $email="", $pws="", $admin=""){
            $this->idUsuario = $idUsuario;
            $this->nombre = $nombre;
            $this->email = $email;
            $this->pws = $pws;
            $this->admin = $admin;
        }
        public function usuario($nombre, $pws){
            $consulta ="SELECT *
                        from usuario
                        WHERE nombre = '$nombre'
                        and pws = '$pws'";
            return DataBase::getConsultasPDO($consulta);
        }
    }
?>