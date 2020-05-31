$(document).ready(function(){
    var butaca = null;
    var tipoButaca = null ;
    var proyeccion = null;
    $.post("../controlador/proyeccion.php", function(r){
        var obj = JSON.parse(r);
        var fechaHoy = new Date ();
        var milHoy = fechaHoy.getTime();
        for (let i = 0; i < obj.length; i++) {
            if (sessionStorage.getItem("idPelicula") == obj[i].idPelicula){
                var string = obj[i].fecha+'T'+obj[i].hora+'Z';
                proyeccion = obj[i].idProyeccion;
                var fecha = new Date (string);
                var mili = fecha.getTime();
                if ( milHoy < mili) {
                    var day = null;
                    switch (fecha.getDay()) {
                        case 0:
                          day = "Domingo";
                          break;
                        case 1:
                          day = "Lunes";
                          break;
                        case 2:
                           day = "Martes";
                          break;
                        case 3:
                          day = "Miercoles";
                          break;
                        case 4:
                          day = "Jueves";
                          break;
                        case 5:
                          day = "Viernes";
                          break;
                        case 6:
                          day = "Sabado";
                    }
                    var td = $('<td>');
                    $('.fecha').append(td);
                    td.append(day);

                    var td1 = $('<td>');
                    $('.fecha').append(td1);
                    var radio = $('<input>');
                    td1.append(radio);
                    radio.attr('type','radio');
                    radio.attr('name','fecha');
                    radio.attr('class','form-check-input radio');
                    radio.attr('id', obj[i].idSala);
                    var todo = obj[i].fecha + '/' + obj[i].hora
                    radio.attr('value', todo);

                    var l1 = $('<lavel>');
                    td1.append(l1);
                    l1.text('Fecha: ' + obj[i].fecha + ' Hora: ' + obj[i].hora);

                    $(':radio').click(function(){
                        $('.reserva').removeAttr("disabled");
                        $.post("../controlador/salaRe.php", function(r){
                            var obj = JSON.parse(r);
                            for (let i = 0; i < obj.length; i++) {
                                if ($(':radio').attr('id') == obj[i].idSala){
                                    tipoButaca = obj[i].tipo;
                                    butaca = obj[i].butaca;
                                    if (butaca != 0) {
                                        $('.reserva').attr('max', butaca);
                                    }
                                }
                            }
                        });
                    });
                }
            }
        }
    });
    var totalButaca = 0;
    $(':button').click(function(e){
        var evento = e.currentTarget;
        if ($(evento).val()=='Atras'){
            window.history.back();
        }
        else{
            if ($('.reserva').val() == "" || $(':radio').val() == ""){
                $('small#mensaje').attr('class','text-danger');
                $('small#mensaje').text('Hay algun campo sin rellenar');
            }
            else {
                if ($('.reserva').val()> butaca) {
                    $('small#reserva').attr('class','text-danger');
                    $('small#reserva').text('No quedan butacas');
                }
                if (butaca < 0) {
                    $('small#reserva').attr('class','text-danger');
                    $('small#reserva').text('Solo quedan:' + butaca);
                }
                if (butaca == 0) {
                    $('small#reserva').attr('class','text-danger');
                    $('small#reserva').text('No quedan entradas');
                }
                else {
                    if (butaca > 0) {
                        totalButaca = butaca - parseInt($('.reserva').val());
                        sessionStorage.setItem('idSala', $(':radio').attr('id'));
                        sessionStorage.setItem('butaca', totalButaca);
                        sessionStorage.setItem('tipo', tipoButaca);
                        sessionStorage.setItem('idProyeccion', proyeccion);
                        sessionStorage.setItem('butaca1', $('.reserva').val());
                        sessionStorage.setItem('fechaHora', $(':radio').val());
                        sessionStorage.setItem('entrada', parseInt($('.reserva').val()));
                        window.location.replace("../vista/precio.php");
                    }
                }
            }
            
        }
    });
    if (sessionStorage.getItem("id") != 0 && sessionStorage.getItem("id") != 1){
        window.history.back();
    }
});