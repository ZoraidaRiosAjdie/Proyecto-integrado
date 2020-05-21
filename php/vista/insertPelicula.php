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
    <!-- <section class="container-sm mt-5">
        <article class="row princ">
            <div class="col">
                <h1>Insertar Pelicula: </h1>
                <form>
                    <h2>Parte de pelicula</h2>
                    <div class="row">
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
                    <div class="row">
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
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="duracion">Duración</label>
                                <input type="time" class="form-control" id="duracion">
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
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="calificacion">Calificación</label>
                                <select class="form-control calificacion" name="calificacion">
                                    <option value="Todas">Todas</option>
                                    <option value="+10">+10</option>
                                    <option value="+12">+12</option>
                                    <option value="+14">+14</option>
                                    <option value="+16">+16</option>
                                    <option value="+18">+18</option>
                                </select>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="sinopsis">Sinopsis</label>
                                <textarea class="form-control" id="sinopsis" rows="4" cols="50"></textarea>
                                <small id="sinopsis" class=""></small>
                            </div>
                        </div>
                    </div>
                    <div class="row actores">
                        <div class="col">
                            <div class="form-group">
                                <label for="actores">Actores</label>
                                <input type="text" class="form-control actores" id="ac0">
                                <small id="ac0" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="papel">Papel que interpreta</label>
                                <input type="text" class="form-control papeles" id="p0">
                                <small id="p0" class=""></small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <input type="button" class="btn btn-primary añadir_actor" value="Añadir actor">
                                <input type="button" class="btn btn-primary eliminar" value="Eliminar fila">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="imagen">Imagen</label>
                                <select class="form-control mode" name="Modo">
                                    <option value="url">Local</option>
                                    <option value="http">HTTP</option>
                                </select>
                                <small id="mode" class="text-warning"></small>
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
                                <select class="form-control " name="formato">
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
                    <h2>Parte Sala</h2>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="sala">Nombre de sala</label>
                                <div class="form-check nombre_sala">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col sala"></div>
                    </div> -->
                    <!-- <div class="row">
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
                                <input type="button" class="btn btn-primary insert" value="Insertar">
                            </div> 
                        </div>
                    </div>
                </form>
            </div>
        </article>
    </section> -->
    <section class="cuerpo">
        <div class="row princ">
            <div class="col-7 m-auto">
                <h1 class="text-center">Pelicula</h1>
                <form action="">
                    <div class="row">
                        <div class="col">
                            <label for="titulo">Título</label>
                            <input type="text" class="form-control" id="titulo">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="anio">Año de estreno</label>
                            <input type="text" class="form-control" id="anio">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                        <div class="col">
                            <label for="duracion">Duracion</label>
                            <input type="time" class="form-control" id="duracion">
                        </div>
                        <div class="col">
                            <label for="calificacion">Calificacion</label>
                            <input type="text" class="form-control" id="calificacion">
                        </div>
                        <div class="col">
                            <label for="fecha">Fecha de estreno</label>
                            <input type="date" class="form-control" id="fecha">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="genero">Género</label>
                            <input type="text" class="form-control" id="genero">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                        <div class="col">
                            <label for="pais">País</label>
                            <input type="text" class="form-control" id="pais">
                            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="imagen">Imagen principal</label>
                            <input type="text" class="form-control" id="imagen">
                        </div>
                    </div>
                    <!-- <div class="row newImagen">
                        <div class="col">
                            <label for="otrasImagenes">Imagen para album</label>
                            <input type="text" class="form-control" id="otrasImagenes">
                        </div>
                        <div class="col-2 pt-4">
                            <input type="button" value="+" class="btn btn-primary" id="maxI">
                            <input type="button" value="-" class="btn btn-primary" id="minI">
                        </div>
                    </div> -->
                    <div class="row actores">
                        <div class="col">
                            <label for="actor">Actor</label>
                            <input type="text" class="form-control" id="actor">
                        </div>
                        <div class="col">
                            <label for="papel">Papel</label>
                            <input type="text" class="form-control" id="papel">
                        </div>
                        <div class="col-2 pt-4">
                            <input type="button" value="+" class="btn btn-primary" id="maxA">
                            <input type="button" value="-" class="btn btn-primary" id="minA">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="sinopsis">Sinopsis</label>
                            <textarea name="sinopsis" id="sinopsis" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                    </div>
                    <h2>Sala</h2>
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