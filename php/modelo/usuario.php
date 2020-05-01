<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<?php
    require_once('bd.php');
    class Funcion{
        public $idUsuario;
        public $nombre;
        public $email;
        public $pws;
        public $admin;
        function __construct($idUsuario="", $nombre="", $email="", $pws="", $admin=0){
            $this->idUsuario = $idUsuario;
            $this->nombre = $nombre;
            $this->email = $email;
            $this->pws = $pws;
            $this->admin = $admin;
        }
        // Para login
        public function usuario(){
            $consulta ="SELECT *
                        from usuario";
            return DataBase::getConsultasPDO($consulta);
        }
        // Para registro
        public function validar(){
            $consulta ="SELECT *
                        from usuario";
            return DataBase::getConsultasPDO($consulta);
        }
        // Para registro
        public function insert(){
            $insercion = "INSERT INTO usuario (idUsuario, nombre, email, pws, admin) 
                        VALUES (NULL, \"".$this->nombre."\", \"".$this->email."\", \"".$this->pws."\", 0)";
            return DataBase::getConsultasPDO($insercion);
        }
        // Para tarifa
        public function tarifa(){
            $consulta ="SELECT *
                        from tarifa";
            return DataBase::getConsultasPDO($consulta);
        }
        // Principal y cartelera
        public function mostrar(){
            $consulta ="SELECT p.idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores,imagen, valoracion
                        from pelicula p, valoracion v
                        WHERE p.idPelicula = v.idPelicula 
                        and mostrar = 1
                        ORDER BY anio DESC";
            return DataBase::getConsultasPDO($consulta);
        }
    }
?>