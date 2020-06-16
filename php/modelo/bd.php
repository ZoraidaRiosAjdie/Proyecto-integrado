<?php

/**
 * DataBase
 */
abstract class DataBase {
	//private static $server = 'localhost';
    	private static $server = 'ec2-100-26-53-254.compute-1.amazonaws.com';
	private static $db = 'cine';
	private static $user = 'cine';
	private static $password = 'abc123.';
	private static $port=3306;	
	/**
	 * conexionPDO
	 * Esta función dos ayudará a conectar con la bd 
	 * @access public
	 * @static 
	 * @return void
	 */
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
	
	/**
	 * cerrar_conexion_PDO
	 * sirve para cerrar la conección a la bd 
	 * @access public
	 * @param  mixed $conexion
	 * @return void
	 */
	public function cerrar_conexion_PDO($conexion){
		$conexion=null;
	}	
	/**
	 * getConsultasPDO
	 * Para realizar la consulta llamamos a esta parte
	 * @access public
	 * @param  mixed $consulta
	 * @return void
	 */
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
}
?>
