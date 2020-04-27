<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../../script/login.js"></script>
    <link rel="stylesheet" href="../../style/style.css">
</head>
<body class="login pl-5">
    <?php
    ?>
    <header class="container-sm mt-5">
        <div class="row">
            <div class="col">
                <a href="#" class="float-right ">Entrar sin registrar</a>
            </div>
        </div>
    </header>
    <section class="cuadro container-sm ml-auto mr-auto mt-5">
        <article class="row">
            <article class="col-7 cuadro ml-auto mr-auto pb-5">
                <article class="row ml-auto mr-auto">
                    <p class="col display-3 text-center">Iniciar sesión</p>
                    
                </article>
                <p class="mensaje text-danger text-center"></p>
                <article class="row ">
                    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post" class="col-7 ml-auto mr-auto">
                        <div class="pt-4">
                            <label for="nombre">Nombre: </label>
                            <input type="text" name="nombre" require class='col nombre'> 
                        </div>
                        <div class="pt-2 pb-3">
                            <label for="contraseña">Contraseña: </label>
                            <input type="text" name="pwd" require class='col pwd'>
                        </div> 
                        <input type="button" name="entrar" value="Entrar" class="btn btn-primary float-left entrar">
                        <input type="button" name="registro" value="Registrarse" class="btn btn-primary float-right">
                    </form>
                </article>
                
            </article>
            
        </article>
    </section>
</body>
</html>