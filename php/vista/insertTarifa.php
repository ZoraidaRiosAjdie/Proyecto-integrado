<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="../../script/insertTarifa.js"></script>
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
                    <div class="row m-4">
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
                                                <input class="form-check-input" type="checkbox" id="autoSizingCheck" value="1">
                                                <label class="form-check-label" for="autoSizingCheck">Lunes </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="autoSizingCheck" value="2">
                                                <label class="form-check-label" for="autoSizingCheck">Martes </label>
                                            </div>
                                            <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" id="autoSizingCheck" value="3">
                                                <label class="form-check-label" for="autoSizingCheck">Miercoles </label>
                                            </div>
                                            <div class="form-check mb-2">
                                            <input class="form-check-input" type="checkbox" id="autoSizingCheck" value="4">
                                                <label class="form-check-label" for="autoSizingCheck">Jueves </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="autoSizingCheck" value="5">
                                                <label class="form-check-label" for="autoSizingCheck">Viernes </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="autoSizingCheck" value="6">
                                                <label class="form-check-label" for="autoSizingCheck">Sabado </label>
                                            </div>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input" type="checkbox" id="autoSizingCheck" value="0">
                                                <label class="form-check-label" for="autoSizingCheck">domingo </label>
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
                            <!-- <div class="row">
                                <div class="col">
                                    <label for="definicion">Definicion de tarifa</label>
                                    <textarea name="definicion" id="definicion" cols="30" rows="10" class="form-control"></textarea>
                                </div>
                            </div> -->
                            <div class="row pt-4 pb-4">
                                <div class="col">
                                    <input type="button" value="Atras" class="btn btn-primary float-left">
                                    <input type="button" value="Insertar" class="btn btn-primary float-right">
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