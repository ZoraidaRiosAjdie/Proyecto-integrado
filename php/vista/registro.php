<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../../script/validar.js"></script>
    <link rel="stylesheet" href="../../style/style.css">
</head>
<body>
    <?php
        if(isset($_POST['atras'])){
            header('location:../vista/login.php');
        }
        // if(isset($_POST['aceptar'])){
        //     header('location:../controlador/validar.php');
        // }
    ?>
    <p></p>
    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
        Nombre: <input type="text" name="nombre" class="nombre is-valid" require><br>
        <p id="1"></p>
        Email: <input type="text" name="email" class="email"><br>
        <p id="2"></p>
        Contraseña: <input type="text" name="pwd" class="pwd"><br>
        <p id="3"></p>
        <input type="submit" name="atras" value="Atras">
        <input type="submit" name="aceptar" value="Aceptar" class="aceptar">
    </form>
</body>
</html>