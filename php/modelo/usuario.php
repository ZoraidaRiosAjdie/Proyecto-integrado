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
        // Para reserva 
        // public function reserva(){
        //     $insercion = "INSERT INTO reserva (idReserva, idUsuario, idProyeccion, butaca) 
        //                 VALUES (NULL, \"".$this->idUsuario."\", \"".$this->idProyeccion."\", \"".$this->butaca."\")";
        //     return DataBase::getConsultasPDO($insercion);
        // }
        // public function mostrar(){
        //     $consulta ="UPDATE pelicula
        //                 SET idPelicula= \"".$this->idPelicula."\",anio=\"".$this->anio."\" ,titulo= \"".$this->titulo."\", pais=\"".$this->pais."\", genero=\"".$this->genero."\" , duracion=\"".$this->duracion."\" , fecha_estreno=\"".$this->fecha_estreno."\" , calificacion=\"".$this->calificacion."\" , sinopsis=\"".$this->sinopsis."\" , actores=\"".$this->actores."\" , imagen=\"".$this->imagen."\" , mostrar=\"".$this->mostrar."\" 
        //                 WHERE idPelicula=\"".$this->idPelicula."\"";
        //     return DataBase::getConsultasPDO($consulta);
        // }
        public function sala(){
            $consulta ="SELECT *
                        from sala";
            return DataBase::getConsultasPDO($consulta);
        }
        public function proyeccion(){
            $consulta ="SELECT titulo, idProyeccion, idSala, pr.idPelicula, f.idTipo, nombre, fecha, hora
                        from proyeccion pr, pelicula p, tarifa f
                        Where pr.idPelicula = p.idPelicula
                        and pr.idTipo = f.idTipo";
            return DataBase::getConsultasPDO($consulta);
        }
        public function tarifaRe(){
            $consulta ="SELECT idProyeccion, t.idTipo, nombre, definicion, precio, fecha, hora
                        from proyeccion pr, tarifa t
                        Where pr.idTipo = t.idTipo";
            return DataBase::getConsultasPDO($consulta);
        }
    }
?>