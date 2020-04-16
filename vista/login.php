<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>
    <section class="container-sm mt-5 mr-auto ml-auto pl-1 pr-1">
        <article class="display-2 text-center">Iniciar seción</article>
        <article class="col-6 p-3 ml-auto mr-auto pl-1 pr-1" >
            <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
                Nombre: <input type="text" name="nombre"><br>
                Contraseña: <input type="password" name="contraseña"><br>
                <input type="submit" name="aceptar" value="aceptar">
            </form>
        </article>
    </section>
   <?php
    if (isset($_POST['aceptar'])){
        $_SESSION["nombre"]= $_POST['nombre'];
        $_SESSION["contraseña"]= $_POST['contraseña'];
        header('location:../controlador/login.php');
    }
   ?>
</body>
</html>