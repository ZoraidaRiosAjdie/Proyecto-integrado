$(document).ready(function(){
    var proyecccion = null ;
    var cont = 5;
    var cont1 = 5;
    var lista1 = [];
    var lista = [];
    var lista2 = [];
    var listaHora =[];
    var listaFecha =[];
    var listaSala =[];
    $.post("../controlador/salaRe.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            var row = $('<div>');
            $('#sala').append(row);
            row.attr('class',"ml-5 row");

            var col = $('<div>');
            row.append(col);
            col.attr('class',"col");

            var check = $('<input>');
            col.append(check);
            check.attr('type','checkbox');
        
            check.val(obj[i].idSala);
            check.attr('id',obj[i].idSala);
            check.attr('class',"form-check-input");

            var label = $('<label>');
            col.append(label);
            label.attr('class',"form-check-label");
            label.text(obj[i].idSala);

            $(':checkbox').click(function(event){
                var e = event.currentTarget;
                if ($(e).attr('id') == obj[i].idSala) {
                    if ($(e).is(':checked')) {
                        listaSala.push(obj[i].idSala);

                        var b = 'b' + obj[i].idSala;
                        var c = 'c' + obj[i].idSala;

                        var h3 = $('<h4>');
                        $('#proyeccion').append(h3);
                        var texto = 'Datos para: ' + $(e).attr('id');
                        h3.text(texto);
                        h3.attr('id', b);

                        var row2 = $('<div>');
                        $('#proyeccion').append(row2);
                        row2.attr('class', 'row');
                        row2.attr('id', c);

                        var col4 = $('<div>');
                        row2.append(col4);
                        col4.attr('class', 'col');
                        
                        var label1 = $('<label>');
                        col4.append(label1);
                        label1.text('Fecha: ');
            
                        var text3 = $('<input>');
                        col4.append(text3);
                        text3.attr('type', 'date');
                        var f = 'form-control ' + b;
                        text3.attr('class', f);

                        var col5 = $('<div>');
                        row2.append(col5);
                        col5.attr('class', 'col');

                        var label2 = $('<label>');
                        col5.append(label2);
                        label2.text('Hora: ');
                        
                        var text4 = $('<input>');
                        col5.append(text4);
                        text4.attr('type', 'time');
                        var j = 'form-control ' + c;
                        text4.attr('class', j);

                        listaHora.push(c);
                        listaFecha.push(b);

                    }
                    else{
                        var id3 = '#b' + obj[i].idSala
                        var id4 = '#c' + obj[i].idSala
                        var g = 'b' + obj[i].idSala
                        var d = 'c' + obj[i].idSala
                        $(id3).remove();
                        $(id4).remove();
                        removeItemFromArr(listaFecha,g);
                        removeItemFromArr(listaHora,d);
                        removeItemFromArr(listaSala,obj[i].idSala);
                    }
                }
            });
        }
        $(':button').click(function(r){
            var evento = r.currentTarget;
            if ($(evento).val()=="Atras") {
                window.location.replace("../vista/pelicula.php");
            }
            else {
                if ($(evento).attr('id')=='maxA') {
                    if (cont1 > 0){
                        var id1 = 'a'+ cont1;                
                        var row1 = $('<div>');
                        $('.actores').after(row1);
                        row1.attr('class',"row");
                        row1.attr('id', id1);
    
                        var col1 = $('<div>');
                        row1.append(col1);
                        col1.attr('class',"col");
            
                        var text = $('<input>');
                        col1.append(text);
                        text.attr('type','text');
                        var id = 'b'+ cont1;
                        text.attr('id', id);
                        text.attr('class',"form-control actor");
    
                        var col2 = $('<div>');
                        row1.append(col2);
                        col2.attr('class',"col");
                        
                        var id2 = 'p'+cont1;
                        var text2 = $('<input>');
                        col2.append(text2);
                        text2.attr('type','text');
                        text2.attr('id', id2);
                        text2.attr('class',"form-control papel");
            
                        lista1.push(id1);
                        lista.push(id);
                        lista2.push(id2);
                        cont1 --;
                    }
                }
                else{
                    if ($(evento).attr('id')=='minA') {
                        cont1 =  6 - lista1.length
                        var eli = 'input#' + lista1[0]
                        var el = 'input#' + lista[0]
                        var e = 'input#' + lista2[0]
                        $(eli).remove();
                        $(el).remove();
                        $(e).remove();
                        lista1.splice(0,1);
                        lista.splice(0,1);
                        lista2.splice(0,1);
                    }
                    else{
                        var listaActor = [];
                        var duracion;
                        var insertPelicula=null;
                        if ($(evento).val()=='Insertar') {
                            if ($('#actor').val()!= '' && $('#papel').val()!= '' && $('#titulo').val()!= '' && $('#anio').val()!= '' && $('#duracion').val()!= '' && $('#genero').val()!= '' && $('#calificacion').val()!= '' && $('#pais').val()!= '' && $('#fecha').val()!= '' && $('#imagen').val()!= '' && $('#sinopsis').val()!= '') {
                                var ac = $('#actor').val() + ' (' + $('#papel').val() + ')';
                                listaActor.unshift(ac);
                                for (let i = 0; i < lista.length; i++) {
                                    var actor = '#'+lista[i];
                                    var papel = '#'+lista2[i];
                                    if ($(actor).val() != "" && $(papel).val() != '') {
                                        var act = $(actor).val() + ' (' + $(papel).val() + ')';
                                        listaActor.push(act);
                                    } 
                                }
                                duracion = $('#duracion').val() + ' minutos';
                                var todoActor = listaActor.toString();
                                insertPelicula = {'resultado' : {'anio': $('#anio').val(), 'titulo': $('#titulo').val(), 'pais': $('#pais').val(), 'genero': $('#genero').val(), 'duracion':min, 'fecha_estreno': $('#fecha').val(), 'calificacion': $('#calificacion').val(), 'sinopsis': $('#sinopsis').val(), 'actores': todoActor, 'imagen' : $('#imagen').val(), 'mostrar': 0}};
                                $.ajax({
                                    url: "../controlador/insertPelicula.php",
                                    type: "POST",
                                    data: insertPelicula,
                                    success: function(r){
                                        alert(r);

                                    }
                                });
                                $.post("../controlador/proyeccion.php", function(re){
                                    var ob = JSON.parse(re);
                                    for (let i = 0; i < ob.length; i++) {
                                        for (let j = 0; j < listaSala.length; j++) {
                                            if (listaSala[j] == ob[i].idSala) {
                                                var id5 = '#b' + ob[i].idSala;
                                                var id6 = '#c' + ob[i].idSala;
                                                var partes = $(id5).val().split('/');
                                                var fechaPro1 = partes[2] + '-' + partes[1] + '-' + partes[0];
                                                if (fechaPro1 != ob[i].fecha && $(id6).val() != ob[i].hora) {
                                                    alert ('Hola');
                                                }
                                            }
                                        }
                                    }
                                });
                                proyecccion = {'resultado' : {}};
                                $.ajax({
                                    url: "../controlador/insertPelicula.php",
                                    type: "POST",
                                    data: insertPelicula,
                                    success: function(r){
                                        alert(r);
                                    }
                                });
                            }
                            else{
                                alert('Has dejado algun campo en blanco');
                            }
                        }
                    }
                }
            }
        });
    });
    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
     
});