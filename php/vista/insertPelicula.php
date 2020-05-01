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
    <script src="../../script/insertPelicula.js"></script>
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
    <section class="container-sm mt-5">
        <article class="row princ">
            <div class="col">
                <h1>Insertar Pelicula: </h1>
                <form>
                    <h2>Parte de pelicula</h2>
                    <div class="row bg-success">
                        <div class="col">
                            <div class="form-group ">
                                <label for="titulo">Titulo</label>
                                <input type="text" class="form-control" id="titulo">
                                <small id="titulo" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="anio">Año</label>
                                <input type="number" class="form-control" min="1890" id="anio">
                                <small id="anio" class=""></small>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-success">
                        <div class="col">
                            <div class="form-group">
                                <label for="pais">Pais</label>
                                <input type="text" class="form-control" id="pais">
                                <small id="pais" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="genero">Genero</label>
                                <input type="text" class="form-control" id="genero">
                                <small id="genero" class=""></small>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-success">
                        <div class="col">
                            <div class="form-group">
                                <label for="duracion">Duración</label>
                                <input type="text" class="form-control" id="duracion">
                                <small id="duracion" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="fecha">Fecha de estreno</label>
                                <input type="date" class="form-control" id="fecha">
                                <small id="fecha" class=""></small>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-success">
                        <div class="col">
                            <div class="form-group">
                                <label for="calificacion">Calificación</label>
                                <input type="text" class="form-control" id="calificacion">
                                <small id="calificacion" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="sinopsis">Sinopsis</label>
                                <input type="text" class="form-control" id="sinopsis">
                                <small id="sinopsis" class=""></small>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-success actores">
                        <!-- <div class="col">
                            <div class="form-group">
                                <label for="actores">Actores</label>
                                <input type="text" class="form-control">
                                <small id="ac1" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="papel">Papel que interpreta</label>
                                <input type="text" class="form-control">
                                <small id="p1" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <input type="button" class="btn btn-primary" value="Añadir">
                            </div>
                        </div> -->
                    </div>
                    <div class="row bg-success">
                        <div class="col">
                            <div class="form-group">
                                <label for="imagen">Imagen</label>
                                <select class="form-control mode" name="Modo">
                                    <option value="url">Local</option>
                                    <option value="http">HTTP</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="imagen">Nombre de la imagen</label>
                                <input type="text" class="form-control nombre_imagen">
                                <small id="imagen" class=""></small>
                            </div>
                        </div>
                        <div class="col formato">
                            <div class="form-group">
                                <label for="imagen">Formato</label>
                                <select class="form-control formato" name="formato">
                                    <option value=".jpeg">JPEG</option>
                                    <option value=".jpg">JPG</option>
                                    <option value=".bmp">BMP</option>
                                    <option value=".gif">GIF</option>
                                    <option value=".tif">TIF</option>
                                    <option value=".raw">RAW</option>
                                    <option value=".webp">WEBP</option>
                                    <option value=".eps">EPS</option>
                                    <option value=".png">PNG</option>
                                    <option value=".pdf">PDF</option>
                                    <option value=".svg">SVG</option>
                                    <option value=".odg">ODG</option>
                                    <option value=".wmf">WMF</option>
                                    <option value=".psd">PSD</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row formato">
                        <div class="col">
                            <p class="text-warning"></p>
                        </div>
                    </div>
                    <h2>Parte Sala</h2>
                    <div class="row bg-success">
                        <div class="col">
                            <div class="form-group">
                                <label for="sala">Nombre de sala</label>
                                <div class="form-check nombre_sala">
                                    <!-- <input class="form-check-input" type="radio">
                                    <label class="form-check-label" for="exampleRadios1">
                                        
                                    </label> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row bg-success">
                        <div class="col">
                            <div class="form-group">
                                <input type="button" class="btn btn-primary añadir_sala" value="Añadir">
                            </div>
                        </div>
                        <div class="col sala">
                            <div class="form-group">
                                <label for="sala">Numero de la sala</label>
                                <input type="number" class="form-control num_sala" min="0">
                                <small id="sala" class=""></small>
                            </div>
                            <div class="form-group">
                                <label for="butaca">Numero de butaca</label>
                                <input type="number" class="form-control butaca" min="0">
                                <small id="butaca" class=""></small>
                            </div>
                            <div class="form-group">
                                <label for="tipo">Tipo de sala</label>
                                <select class="form-control tipo" name="tipo">
                                    <option value=".4DX">4DX</option>
                                    <option value="iMax">iMax</option>
                                    <option value="mega sala">mega sala</option>
                                    <option value="XD">XD</option>
                                    <option value="macro XE 3D">macro XE 3D</option>
                                    <option value="2D">2D</option>
                                    <option value="3D">3D</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="sala">Fecha de la proyeccion</label>
                                <input type="date" class="form-control fecha_pro">
                                <small id="sala" class=""></small>
                            </div>
                            <div class="form-group">
                                <label for="sala">Hora de la proyeccion</label>
                                <input type="time" class="form-control hora">
                                <small id="sala" class=""></small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <input type="button" class="btn btn-primary" value="Atras">
                            </div> 
                        </div>
                        <div class="col">
                            <div class="form-group float-right">
                                <input type="button" class="btn btn-primary" value="Insertar">
                            </div> 
                        </div>
                    </div>
                </form>
            </div>
        </article>
    </section>
</body>
</html>