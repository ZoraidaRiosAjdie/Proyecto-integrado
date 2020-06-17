$(document).ready(function(){
    var idProyeccion = [];
    var butaca = [];
    var idTipo = [];
    var idSala = [];
    var fecha = [];
    var hora = [];
    var idPelicula = [];
    var titulo = [];
    var idReserva = [];
    // Coge algunos datos de la reserva 
    // Nota : esto lo he hecho para que el codigo quedará mas simple 
    // de forma visual
    $.post("../controlador/reserva.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (sessionStorage.getItem("idUsuario") == obj[i].idUsuario) {
                idProyeccion.push(obj[i].idProyeccion);
                butaca.push(obj[i].butaca);
                idReserva.push(obj[i].idReserva);
            }
        }
        // Recoge todas las proyecciones que tenga el usuario
        $.post("../controlador/soloPro.php", function(t){
            var obj1 = JSON.parse(t);
            for (let i = 0; i < obj1.length; i++) {
                for (let j = 0; j < idProyeccion.length; j++) {
                    if (idProyeccion[j] == obj1[i].idProyeccion) {
                        idTipo.push(obj1[i].idTipo);
                        idSala.push(obj1[i].idSala);
                        fecha.push(obj1[i].fecha);
                        hora.push(obj1[i].hora);
                        idPelicula.push(obj1[i].idPelicula);
                    }                
                }
            }
            // Recoge el titulo de la pelicula
            $.post("../controlador/soloPeli.php", function(s){
                var obj2 = JSON.parse(s);
                for (let i = 0; i < obj2.length; i++) {
                    for (let j = 0; j < idPelicula.length; j++) {
                        if (idPelicula[j] == obj2[i].idPelicula) {
                            titulo.push(obj2[i].titulo);
                        }                
                    }
                }
                // Empieza a crear la parte visual de las reservas de este usuario
                var cont = 1;
                for (let i = 0; i < butaca.length; i++) {
                    var row1 = $('<div>');
                    $('.reserva').append(row1);
                    row1.attr('class', 'row m-auto reser');
                    row1.attr('id', cont);

                    var col1 = $('<div>');
                    row1.append(col1);
                    col1.attr('class', 'col');

                    var texto1 = $('<h2>');
                    col1.append(texto1);
                    var a = 
                    texto1.text('Reserva: ' + cont);

                    var row4 = $('<div>');
                    $('.reserva').append(row4);
                    row4.attr('class', 'row mt-2 ml-auto mr-auto');

                    var col4 = $('<div>');
                    row4.append(col4);
                    col4.attr('class', 'col text-center');

                    var texto4 = $('<h5>');
                    col4.append(texto4);
                    texto4.html(titulo[i]);

                    var row2 = $('<div>');
                    $('.reserva').append(row2);
                    row2.attr('class', 'row mt-4 ml-auto mr-auto text-center');

                    var col2 = $('<div>');
                    row2.append(col2);
                    col2.attr('class', 'col');

                    var texto2 = $('<p>');
                    col2.append(texto2);
                    texto2.html('<b>Fecha de la reverva: </b>' + fecha[i]);

                    var col3 = $('<div>');
                    row2.append(col3);
                    col3.attr('class', 'col');

                    var texto3 = $('<p>');
                    col3.append(texto3);
                    texto3.html('<b>Hora de la reverva: </b>' + hora[i]);

                    var row3 = $('<div>');
                    $('.reserva').append(row3);
                    row3.attr('class', 'row mt-4 ml-auto mr-auto text-center');

                    var col5 = $('<div>');
                    row3.append(col5);
                    col5.attr('class', 'col');

                    var texto5 = $('<p>');
                    col5.append(texto5);
                    texto5.html('<b>Butacas reservadas: </b>' + butaca[i]);

                    var col6 = $('<div>');
                    row3.append(col6);
                    col6.attr('class', 'col ml-5');

                    var texto6 = $('<p>');
                    col6.append(texto6);
                    texto6.html('<b>Sala de proyección: </b>' + idSala[i]);
                    
                    var row4 = $('<div>');
                    $('.reserva').append(row4);
                    row4.attr('class', 'row mt-4 mb- ml-auto mr-auto');

                    var col6 = $('<div>');
                    row4.append(col6);
                    col6.attr('class', 'col mb-3');

                    var button2 = $('<input>');
                    col6.append(button2);
                    button2.attr('class', 'btn btn-primary float-right');
                    button2.attr('type', 'button');
                    button2.val('Cancelar reserva');
                    button2.attr('id', fecha[i]);

                    cont ++;
                }
                $('input').click(function(p){
                    var e = p.currentTarget;
                    if ($(e).val() == 'Atras') {
                        window.history.back();
                    }
                    //  Si quiero canselar una pelicula tiene que ser con un dia de antelación 
                    // en caso contrario no lo permitirá
                    if ($(e).val() == 'Cancelar reserva') {
                        var hoy = new Date ();
                        var diaHoy = hoy.getDate() - 1;
                        var mesHoy = hoy.getMonth();
                        var anoHoy = hoy.getFullYear();
                        var string = anoHoy + '-' + mesHoy + '-' + diaHoy
                        var ayer = new Date (string);
                        var cont = null;
                        for (let i = 0; i < idReserva.length; i++) {
                            if ($(e).attr('id') == fecha[i]) {
                                var f = new Date(fecha[i]);
                                if (ayer >= f) {
                                    // Cuando se cansela una reserva se elimina de la bd
                                    var borrar = {'resultado':{'idReserva': idReserva[i]}};      
                                    $.ajax({
                                        url: "../controlador/borrarReserva.php",
                                        type: "POST",
                                        data: borrar
                                    });
                                    var cont = 1;
                                }
                            }
                        }
                        if (cont == null) {
                            alert('Lo sentimos esta entrada no se puede cancelar');
                        }
                    }
                })
            });
        });
        
    });
});