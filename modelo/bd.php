<?php
abstract class DataBase {
    private static $server = 'localhost';
	private static $db = 'cine';
	private static $user = 'cine';
	private static $password = 'abc123.';
	private static $port=3306;
	/*Conexion PDO*/
	public static function conexionPDO() {
		try {
			$connection = new PDO("mysql:host=".self::$server.";dbname=".self::$db.";port=".self::$port.";charset=utf8", self::$user, self::$password);
		} 
		catch (PDOException $e) {
			echo "No se ha podido establecer conexión con el servidor de bases de datos.<br>";
			die ("Error: " . $e->getMessage());
		}
		return $connection;
	}
	/*Conexion MySQL */
	public static function conexionMYSQL() {
		$connection = new mysqli(self::$server, self::$user, self::$password, self::$db);
		if (isset($_POST['aceptar'])){
			if ($conn -> connect_errno){
			    die("Error de conexión: " . $conn); 
			}
			else{
				return $connection;
			}
		}
	}
	/*Cerra y consultar con PDO*/
	public function cerrar_conexion_PDO($conexion){
		$conexion=null;
	}
	public static function getConsultasPDO($consulta){
		$conexion = DataBase::conexionPDO();
		$resultado = $conexion->prepare($consulta);
		$resultado->execute();
		// var_dump($resultado);
		if ($resultado-> rowCount() > 0){
	    	return $resultado;
	    }
	    else{
	    	return "noo existe";
	    }
	    cerrar_conexion_PDO($conexion);
	}
	/*Cerra y consultar con MYSQL*/
	public function cerrar_conexion_MYSQL($conexion){
		$conexion->close();
	}
	public static function getConsultasMYSQL($consulta){
		$conexion = DataBase::conexionMYSQL();
		$resultado = $conexion -> query ($consulta);
		if ($resultado->num_rows == 0){
			return "Usuario no valido";
		}
		else{
			return $resultado;
		}
	    cerrar_conexion_MYSQL($conexion);
	}
}
?>