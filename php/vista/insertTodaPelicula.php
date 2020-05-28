<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../../script/menu.js"></script>
    <script src="../../script/insertProyeccion.js"></script>
    <link rel="stylesheet" href="../../style/style.css">
</head>
<body class="cartelera">
<header class="container-fluid cabecera">
        <div class="row">
            <h1 class="col text-center display-1">Cinemania</h1>
        </div>
        <div class="row">
            <nav class="navbar navbar-expand-sm navbar-dark  col menu">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav mr-auto ml-auto lista">
                        <li class="nav-item active">
                            <a href="principal.php" class="nav-link">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Peliculas</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="cartelera.php">Cartelera</a>
                                <a class="dropdown-item" href="mas.php">Más información</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Tarifas</a>
                            <div class="dropdown-menu tarifa">
                                <a class="dropdown-item" href="../controlador/tarifa.php">Todas</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Contacto</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="ubicacion.php">¿Dónde estamos?</a>
                                <a class="dropdown-item" href="contacto.php">Servicio al cliente</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <section class="cuerpo">
        <div class="row princ">
            <div class="col-7 m-auto">
                <h1 class="text-center">Pelicula</h1>
                <form action="">
                    <h2>Sala</h2>
                    <p class="text-danger mensaje"></p>
                    <div class="row">
                        <div class="col" id="sala">
                            
                        </div>
                        <div class="col" id="proyeccion">
                            
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div class="col">
                            <input type="button" value="Atras" class="btn btn-primary float-left">
                            <input type="button" value="Insertar" class="btn btn-primary float-right">
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </section>
</body>
</html>