<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../../script/reserva.js"></script>
    <link rel="stylesheet" href="../../style/style.css">
</head>
<body class="cartelera">
    <header>
    </header>
    <section class="container-sm mt-5">
        <div class="row princ">
            <div class="col">
                <form action="" method="post">
                    <h1 class="display-4 text-center">Reserva</h1>
                    <small id="mensaje"></small>
                    <div class="row">
                        <div class="col-7 m-auto">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Dia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="fecha">
                                    </tr>
                                </tbody>
                            </table>
                            <p class="pt-4">Número de entradas que quieres comprar</p>
                            <input type="number" name="reserva" id="reserva" class="reserva" min="0" require disabled>
                            <small id="reserva"></small>
                            <!-- <input type="number" name="" id="" min="0"> -->
                        </div>
                    </div>
                    <div class="row pt-5">
                        <div class="col-7 m-auto">
                            <input type="button" value="Atras" class='btn btn-primary'>
                            <input type="button" value="Continuar" class='btn btn-primary float-right'>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</body>
</html>