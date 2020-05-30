$(document).ready(function(){
    if (sessionStorage.getItem("id") !=1){ 
        window.location.replace("../vista/principal.php");
    }
    var listaHora =[];
    var listaFecha =[];
    var listaSala =[];
    var listaPelicula = [];
    var idMax;
    var correcto = false ;
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
    });
    $('input').click(function(event){
        var e = event.currentTarget;
        if ($(e).val() == 'Atras') {
            window.location.replace("../vista/insertPelicula.php");
        }
        else {
            if ($(e).val() == 'Insertar') {
                if (listaSala.length != 0 && listaHora.length != 0 && listaFecha.length != 0){
                    var insertPelicula = {'resultado' : {'anio': sessionStorage.getItem("anioPelicula"), 'titulo': sessionStorage.getItem("tituloPelicula"), 'pais': sessionStorage.getItem("paisPelicula"), 'genero': sessionStorage.getItem("generoPelicula"), 'duracion':sessionStorage.getItem("duracionPelicula"), 'fecha_estreno': sessionStorage.getItem("fechaPelicula"), 'calificacion': sessionStorage.getItem("calificacionPelicula"), 'sinopsis': sessionStorage.getItem("sinopsisPelicula"), 'actores': sessionStorage.getItem("actoresPelicula"), 'imagen' : sessionStorage.getItem("imagenPelicula"), 'mostrar': 0}};
                    $.ajax({
                        url: "../controlador/insertPelicula.php",
                        type: "POST",
                        data: insertPelicula
                        
                    });
                    $.post("../controlador/maxIdPelicula.php", function(e){
                        var obj = JSON.parse(e);
                        idMax= parseInt(obj.idPelicula) + 1;
                    });
                    $.post("../controlador/proyeccion.php", function(re){
                        $.post("../controlador/todaTarifa.php", function(s){
                            var w = JSON.parse(s);
                            var t = JSON.parse(re);
                            for (let p = 0; p < t.length; p++) {
                                for (let j = 0; j < w.length; j++) {
                                        for (let i = 0; i < listaSala.length; i++) {
                                            var id5 = '.' + listaFecha[i];
                                            var id6 = '.' + listaHora[i];
                                            var idCheck = '#'+ listaSala[i];
                                            var partes = $(id5).val().split('/');
                                            var partesHora = $(id6).val().split(':');
                                            var h = parseFloat(partesHora[0] + '.' + partesHora[1]); 
                                            
                                                
                                            if (t[p].idSala != listaSala[i] && partes != t[p].fecha && $(id6).val() != t[p].hora) {
                                                var string = partes + 'T' + $(id6).val() + 'Z';
                                                var fechaHora = new Date(string);
                                                var semana = fechaHora.getDay();
                                                
                                                if (semana == 3){
                                                    if (w[j].nombre == 'Día espectador'){
                                                        proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
                                                        $.ajax({
                                                                url: "../controlador/insertProyeccion.php",
                                                                type: "POST",
                                                                data: proyecccion
                                                        }); 
                                                        removeItemFromArr(listaSala,listaSala[i]);
                                                    }
                                                }
                                                else{
                                                    if(semana == 6){
                                                        if (w[j].nombre == 'Día pareja'){
                                                            proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
                                                                
                                                            $.ajax({
                                                                    url: "../controlador/insertProyeccion.php",
                                                                    type: "POST",
                                                                    data: proyecccion
                                                            });
                                                                removeItemFromArr(listaSala,listaSala[i]);
                                                                removeItemFromArr(listaFecha,listaFecha[i]);
                                                                removeItemFromArr(listaHora,listaHora[i]);
                                                        }
                                                    }
                                                    else{
                                                        if (semana == 6 && h == 12.00 ||  semana == 0 && h == 12.00){
                                                            if (w[j].nombre == 'Matinal'){
                                                                proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
                                                                    
                                                                $.ajax({
                                                                        url: "../controlador/insertProyeccion.php",
                                                                        type: "POST",
                                                                        data: proyecccion
                                                                });
                                                                removeItemFromArr(listaSala,listaSala[i]);
                                                                removeItemFromArr(listaFecha,listaFecha[i]);
                                                                removeItemFromArr(listaHora,listaHora[i]);
                                                            }
                                                        }
                                                        else{
                                                            if (w[j].nombre == 'Entrada normal'){
                                                                proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};   
                                                                    
                                                                $.ajax({
                                                                        url: "../controlador/insertProyeccion.php",
                                                                        type: "POST",
                                                                        data: proyecccion
                                                                });
                                                                removeItemFromArr(listaSala,listaSala[i]);
                                                                removeItemFromArr(listaFecha,listaFecha[i]);
                                                                removeItemFromArr(listaHora,listaHora[i]);
                                                            }
                                                        }
                                                    }
                                                }
                                            } 
                                            else{
                                                $('.mensaje').text('Este dato ya existe');
                                            }                                  
                                        }
                                            
                                }
                            }
                                
                        });
                    });
                    alert('Se ha relaizado de forma correcta');
                    window.location.replace("../vista/pelicula.php");
                }
                else{
                    $('.mensaje').text('Hay datos sin rellenar');
                }
            }
        }
    });
    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
});