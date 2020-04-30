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
<body class="login">
    <?php
        if(isset($_POST['atras'])){
            header('location:../vista/login.php');
        }
    ?>
    <section class="cuadro container-sm ml-auto mr-auto mt-5">
        <article class="row">
            <article class="col-7 cuadro ml-auto mr-auto ">
                <article class="row ml-auto mr-auto">
                    <p class="col display-3 text-center">Registro</p>
                </article>
                
                <p class="mensaje text-danger text-center"></p>
                <article class="row pb-5">
                    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post" class="col-7 ml-auto mr-auto">
                        <!-- <p class="pb-2 pt-4"> -->
                        <div class="form-group">
                            <label for="nombre" class="pr-2">Nombre: </label></br>
                            <input type="text" name="nombre" class="nombre col" require>
                            <small id="1"></small>
                        </div>
                        <div class="form-group">
                            <label for="email" class="pr-2">Email: </label></br>
                            <input type="text" name="email" class="email col" require>
                            <small id="2"></small>
                        </div>
                        <div class="form-group">
                            <label for="pwd" class="pr-2">Contraseña: </label></br>
                            <input type="text" name="pwd" class="pwd col" require>
                            <small id="3"></small>
                        </div>
                        <input type="submit" name="atras" value="Atras" class="btn btn-primary float-left">
                        <input type="button" name="aceptar" value="Aceptar" class="btn btn-primary float-right aceptar">
                    </form>
                </article>
            </article>
        </article>
    </section>
</body>
</html>