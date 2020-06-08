$(document).ready(function(){
    var lista = [];
    $(':input').click(function(r){
        var e = r.currentTarget
        if ($(e).val() == "Atras") {
            window.location.replace("../vista/tarifaAdmin.php");
        }
        else {
            if ($(e).val() == "Insertar") {
                var horario = [];
                if ($('#nombre').val() != '' && $('#precio').val() != ''){
                    for (let i = 0; i < lista.length; i++) {
                        lista.sort();
                        var d = '#d'+ lista[i];
                        var h = '#h'+ lista[i];
                        var c = '#' + lista[i];
                        var d1 = $(d).val().split(':');
                        var d2 = parseFloat(d1[0] + '.' + d1[1]);
                        var h1 = $(h).val().split(':');
                        var h2 = parseFloat(h1[0] + '.' + h1[1]);
                        // Recordar mñn igualar la hora 
                        if ($(c).val() != '' && $(d).val() != '' && $(h).val() != '') {
                            if (d2 <= h2 ) {
                                if (d2 == h2) {
                                    horario.push($(d).val()); 
                                }
                                else{
                                    horario.push($(d).val() + '-' + $(h).val()); 
                                }
                            }
                            else{
                                alert ('La hora de tarifa esta mal, porfavor corrigelo');
                            } 
                        }
                        else {
                            alert ('Hay campos en blanco');
                        }
                    }
                    if ($('#rebaja').val() == '') {
                        insert = {'resultado' : {'nombre': $('#nombre').val(), 'precio': $('#precio').val(), 'definicion': $('#definicion').val(), 'semana': lista.toString(), 'horario': horario.toString(), 'rebaja': null}};
                        $.ajax({
                            url: "../controlador/insertTarifa.php",
                            type: "POST",
                            data: insert
                        });
                        window.location.replace("../vista/tarifaAdmin.php");   
                    }
                    else{
                        insert = {'resultado' : {'nombre': $('#nombre').val(), 'precio': $('#precio').val(), 'definicion': $('#definicion').val(), 'semana': lista.toString(), 'horario': horario.toString(), 'rebaja': $('#rebaja').val()}};
                        $.ajax({
                            url: "../controlador/insertTarifa.php",
                            type: "POST",
                            data: insert
                        });
                        window.location.replace("../vista/tarifaAdmin.php");
                    }  
                }
                else {
                    alert ('Hay campos en blanco');
                }
                
            }
            else{
                if ($(e).is(':checked')) {
                    var d = 'd'+ $(e).val();
                    var h =  'h'+ $(e).val();

                    var r1 =  'r1'+ $(e).val();
                    var r2 =  'r2'+ $(e).val();

                    var row = $('<div>');
                    $('.hora').append(row);
                    row.attr('class', 'row');
                    row.attr('id', r1)

                    var col = $('<div>');
                    row.append(col);
                    col.attr('class', 'col');

                    var p = $('<h3>');
                    col.append(p);
                    p.text(semana($(e).val()));

                    var row1 = $('<div>');
                    $('.hora').append(row1);
                    row1.attr('class', 'row');
                    row1.attr('id', r2)

                    var col1 = $('<div>');
                    row1.append(col1);
                    col1.attr('class', 'col');

                    var label1 = $('<label>');
                    col1.append(label1);
                    label1.text('Desde: ');

                    var check1 = $('<input>');
                    col1.append(check1);
                    check1.attr('type', 'time');
                    check1.attr('class', 'form-control ');
                    check1.attr('id', d);

                    var col2 = $('<div>');
                    row1.append(col2);
                    col2.attr('class', 'col');

                    var label2 = $('<label>');
                    col2.append(label2);
                    label2.text('Hasta: ');
                    
                    var check2 = $('<input>');
                    col2.append(check2);
                    check2.attr('type', 'time');
                    check2.attr('class', 'form-control ');
                    check2.attr('id', h);

                    lista.push($(e).val());
                }
                else {
                    removeItemFromArr(lista, $(e).val());
                    var r1 = '#r1' + $(e).val();
                    var r2 = '#r2' + $(e).val();
                    $(r1).remove();
                    $(r2).remove();
                }
            }
        }    
    });
    function semana (n){
        var day;
        switch (parseInt(n)){
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
        return day;
    }
    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
});