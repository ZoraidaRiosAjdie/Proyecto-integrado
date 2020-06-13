<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../../script/insertProyeccion.js"></script>
    <link rel="stylesheet" href="../../style/style.css">
</head>
<body class="cartelera">
    <header>
    </header>
    <section class="cuerpo">
        <div class="row ">
            <div class="col-7 m-auto princ">
                <form action="" method="post">
                    <h1 class="display-2 text-center">Insertar</h1>
                    <div class="row p-2" id="sala">
                        <div class="col">
                            <select name="idSala" id="idSala" class="form-control">

                            </select>
                        </div>
                        <div class="col">
                            <input type="date" name="fecha" id="fecha" class="form-control">
                        </div>
                        <div class="col">
                            <input type="time" name="hora" id="hora" class="form-control">
                        </div>
                        
                    </div>
                    <!-- <div class="row">
                        <div class="col" id="nuevo">

                        </div>
                    </div> -->
                    <div class="row p-5">
                        <div class="col">
                            <input type="button" value="Atras" class="btn btn-primary float-left">
                            <input type="button" value="Insertar sala" class="btn btn-primary float-right">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</body>
</html>