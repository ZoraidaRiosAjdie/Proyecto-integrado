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
    <script src="../../script/valoracion.js"></script>
    <script src="../../script/usuario.js"></script>
    <link rel="stylesheet" href="../../style/style.css">
</head>
<body class="cartelera">
    <header class="container-fluid cabecera">
        <div class="row">
            <div class="col">
                <h1 class="col text-center display-1">Cinemania</h1>
            </div>
            <div class="col-1 rounded-circle navbar-collapse usuario" id="imagen">
                    <ul class="navbar-nav">
                        <li class="nav-item dropleft">
                            <img src="" alt="" class="foto nav-link dropdown-toggle" data-toggle="dropdown">
                            <ul class="dropdown-menu ventana">
                                <li class="text-right">
                                    <a class="dropdown-item ventana" href="verReserva.php" class="usuario" id="reserva">Reservas</a>
                                </li>
                                <li class="text-right">
                                    <a class="dropdown-item ventana" class="usuario" id="sesion">Cerrar Sesión</a> 
                                </li>
                            </ul>
                        </li>
                    </ul>
            </div>
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
    <section class="container-sm mt-5">
        <article class="row princ">
            <div class="col">
                <form action="mailto:zoraidariosajdie@gamil.com" method="post">
                    <div class="row p-4">
                        <!-- Columna opciones -->
                        <div class=" col-3 form-group elec">
                            <p class="display-5">Elige una opción: </p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="opcion" id="pagina" value="pagina">
                                <label class="form-check-label" for="pagina">
                                    Página
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="opcion" id="pelicula" value="pelicula">
                                <label class="form-check-label" for="pelicula">
                                    Pelicula
                                </label>
                            </div>
                        </div>
                        <!-- Columna valoracion -->
                        <div class="col">
                            <div class="row">
                                <div class="col select">
                                    <label class="pt-3 titulo display-5" for="titulo"></label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="formControlRange">Valoración: </label>
                                        <p class="clasificacion">
                                            <input class="estr" id="radio1" type="radio" name="estrellas" value="10">
                                            <label class="estr" for="radio1">★</label>

                                            <input class="estr" id="radio2" type="radio" name="estrellas" value="9">
                                            <label class="estr" for="radio2">★</label>

                                            <input class="estr" id="radio3" type="radio" name="estrellas" value="8">
                                            <label class="estr" for="radio3">★</label>

                                            <input class="estr" id="radio4" type="radio" name="estrellas" value="7">
                                            <label class="estr" for="radio4">★</label>

                                            <input class="estr" id="radio5" type="radio" name="estrellas" value="6">
                                            <label class="estr" for="radio5">★</label>

                                            <input class="estr" id="radio6" type="radio" name="estrellas" value="5">
                                            <label class="estr" for="radio6">★</label>

                                            <input class="estr" id="radio7" type="radio" name="estrellas" value="4">
                                            <label class="estr" for="radio7">★</label>

                                            <input class="estr" id="radio8" type="radio" name="estrellas" value="3">
                                            <label class="estr" for="radio8">★</label>

                                            <input class="estr" id="radio9" type="radio" name="estrellas" value="2">
                                            <label class="estr" for="radio9">★</label>

                                            <input class="estr" id="radio10" type="radio" name="estrellas" value="1">
                                            <label class="estr" for="radio10">★</label>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="opinion">Dejanos tu opinión</label>
                                    <div class="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="button" value="Enviar" class="btn btn-primary float-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </article>
    </section>
</body>
</html>