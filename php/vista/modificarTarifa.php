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
    <script src="../../script/modificarTarifa.js"></script>
    <link rel="stylesheet" href="../../style/style.css">
</head>
<body class="cartelera">
    <header>
    </header>
    <section class="container-sm mt-5">
        <div class="row-3">
            <div class="col-9 m-auto princ">
                <h1 class="display-4 text-center pt-2">Tarifa</h1>
                <form action="">
                    <div class="row m-3">
                        <div class="col">
                            <div class="row pt-5 ">
                                <div class="col-6">
                                    <label for="nombre">Nombre de la tarifa</label>
                                    <input type="text" class="form-control" id="nombre">
                                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                                </div>
                                <div class="col-6">
                                    <label for="precio">Precio</label>
                                    <input type="number" class="form-control" id="precio" min="0">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="definicion">Definicion de tarifa</label>
                                    <textarea name="definicion" id="definicion" cols="30" rows="10" class="form-control"></textarea>
                                    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                <label for="definicion">Dia de la semana</label>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="1" value="1">
                                                <label class="form-check-label" for="1">Lunes </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="2" value="2">
                                                <label class="form-check-label" for="2">Martes </label>
                                            </div>
                                            <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" id="3" value="3">
                                                <label class="form-check-label" for="3">Miercoles </label>
                                            </div>
                                            <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" id="4" value="4">
                                                <label class="form-check-label" for="4">Jueves </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="5" value="5">
                                                <label class="form-check-label" for="5">Viernes </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="6" value="6">
                                                <label class="form-check-label" for="6">Sabado </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="0" value="0">
                                                <label class="form-check-label" for="0">domingo </label>
                                            </div>
                                        </div>
                                        <div class="col hora">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label for="rebaja">Rebaja</label>
                                            <div class="row">
                                                <div class="col">
                                                    <input type="number" class="form-control" id="rebaja1" min="1">
                                                </div>
                                                <div class="col-1">
                                                    <p class="text-center">*</p>
                                                </div>
                                                <div class="col">
                                                    <input type="number" class="form-control" id="rebaja2" min="1">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pt-4 pb-4">
                                <div class="col">
                                    <input type="button" value="Atras" class="btn btn-primary float-left">
                                    <input type="button" value="Modificar" class="btn btn-primary float-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</body>
</html>