<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
        Nombre: <input type="text" name="nombre"><br>
        Contraseña: <input type="password" name="contraseña"><br>
        <input type="submit" name="aceptar" value="aceptar">
    </form>
   <?php
    if (isset($_POST['aceptar'])){
        $_SESSION["nombre"]= $_POST['nombre'];
        $_SESSION["contraseña"]= $_POST['contraseña'];
        header('location:../controlador/registro.php');
    }
   ?>
</body>
</html>