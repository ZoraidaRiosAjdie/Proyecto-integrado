<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
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
         * nombre
         *
         * @var mixed
         */
        public $nombre;        
        /**
         * email
         *
         * @var mixed
         */
        public $email;        
        /**
         * pws
         *
         * @var mixed
         */
        public $pws;        
        /**
         * admin
         *
         * @var mixed
         */
        public $admin;        
        /**
         * imagen
         *
         * @var mixed
         */
        public $imagen;        
        /**
         * __construct
         *
         * @param  mixed $idUsuario
         * @param  mixed $nombre
         * @param  mixed $email
         * @param  mixed $pws
         * @param  mixed $admin
         * @param  mixed $imagen
         * @return void
         */
        function __construct($idUsuario="", $nombre="", $email="", $pws="", $admin=0, $imagen = ""){
            $this->idUsuario = $idUsuario;
            $this->nombre = $nombre;
            $this->email = $email;
            $this->pws = $pws;
            $this->admin = $admin;
            $this->imagen = $imagen;
        }        
        /**
         * usuario
         * Nos mostrará todos los usuarios 
         * Nota: Cambiar validar.php
         *
         * @access public
         * @return void
         */
        public function usuario(){
            $consulta ="SELECT *
                        from usuario";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * validar
         * Este seguramente se elimine 
         *
         * @access public
         * @return void
         */
        public function validar(){
            $consulta ="SELECT *
                        from usuario";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * insert
         * Inserta usuarios, por lo cual mete nuevos usuarios en la bd
         *
         * @access public
         * @return void
         */
        public function insert(){
            $insercion = "INSERT INTO usuario (idUsuario, nombre, email, pws, admin, imagen) 
                        VALUES (NULL, \"".$this->nombre."\", \"".$this->email."\", \"".$this->pws."\", 0, \"".$this->imagen."\")";
            return DataBase::getConsultasPDO($insercion);
        }        
        /**
         * tarifa
         * Me da toda la información de la tarifa
         *
         * @access public
         * @return void
         */
        public function tarifa(){
            $consulta ="SELECT *
                        from tarifa";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * mostrar
         * Muestra todo de pelicula y sus valiraciones 
         *
         * @access public
         * @return void
         */
        public function mostrar(){
            $consulta ="SELECT p.idPelicula, anio, titulo, pais, genero, duracion, fecha_estreno, calificacion, sinopsis, actores,imagen, valoracion, mostrar, otros , trailler
                        from pelicula p, valoracion v
                        WHERE p.idPelicula = v.idPelicula 
                        and mostrar = 1
                        ORDER BY anio DESC";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * sala
         * Me muestra todo sobre las salas
         *
         * @access public
         * @return void
         */
        public function sala(){
            $consulta ="SELECT *
                        from sala";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * proyeccion
         *
         * @access public
         * @return void
         */
        public function proyeccion(){
            $consulta ="SELECT titulo, idProyeccion, idSala, pr.idPelicula, f.idTipo, nombre, fecha, hora
                        from proyeccion pr, pelicula p, tarifa f
                        Where pr.idPelicula = p.idPelicula
                        and pr.idTipo = f.idTipo";
            return DataBase::getConsultasPDO($consulta);
        }        
        /**
         * tarifaRe
         *
         * @access public
         * @return void
         */
        public function tarifaRe(){
            $consulta ="SELECT idProyeccion, t.idTipo, nombre, definicion, precio, fecha, hora, semana, horario, rebaja
                        from proyeccion pr, tarifa t
                        Where pr.idTipo = t.idTipo";
            return DataBase::getConsultasPDO($consulta);
        }
    }
?>