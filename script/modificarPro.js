$(document).ready(function(){
    // if (sessionStorage.getItem("id") !=1){ 
    //     window.location.replace("../vista/principal.php");
    // }
    var listaHora =[];
    var listaFecha =[];
    var listaSala =[];
    var idMax;
    var listaIdSala = [];
    if (sessionStorage.getItem("idSalaMod").length > 1) {
        var parte = sessionStorage.getItem("idSalaMod").split(',');
        for (let i = 0; i < parte.length; i++) {
            listaIdSala.push(parte[i]);
        }
    }
    else{
        listaIdSala.push(sessionStorage.getItem("idSalaMod"))
    }
    json = null;
    todo = [];
    $.post("../controlador/soloPro.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].idPelicula == sessionStorage.getItem("idPeliMod")) {
                for (let j = 0; j < listaIdSala.length; j++) {
                    if (listaIdSala[j] == obj[i].idSala) {
                        json = {'idProyeccion': obj[i].idProyeccion ,'idSala':listaIdSala[j], 'fecha': obj[i].fecha , 'hora': obj[i].hora};
                        todo.push(json);
                    }
                }
            }
        }
    });
    var mostar;
    $.post("../controlador/soloPro.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].idPelicula == sessionStorage.getItem("idPeliMod")) {
                mostrar = obj[i].mostrar;
            }
        }
    });
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
            check.attr('id', obj[i].idSala);
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
        for (let j = 0; j < todo.length; j++) {
                var id = '#'+todo[j].idSala;
                $(id).prop('checked',true);
                listaSala.push(todo[j].idSala);
    
                var b = 'b' + todo[j].idSala;
                var c = 'c' + todo[j].idSala;
    
                var h3 = $('<h4>');
                $('#proyeccion').append(h3);
                var texto = 'Datos para: ' + todo[j].idSala;
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
                text3.attr('type', 'text');
                var f = 'form-control ' + b;
                text3.attr('class', f);
                var partes = todo[j].fecha.split('-');
                var fecha = partes[2] + '/' + partes[1] + '/' + partes[0] ;
                text3.val(fecha);
    
                var col5 = $('<div>');
                row2.append(col5);
                col5.attr('class', 'col');
    
                var label2 = $('<label>');
                col5.append(label2);
                label2.text('Hora: ');
                            
                var text4 = $('<input>');
                col5.append(text4);
                text4.attr('type', 'text');
                var p = 'form-control ' + c;
                text4.attr('class', p);
                text4.val(todo[j].hora);

                listaHora.push(c);
                listaFecha.push(b); 
        } 
    });
    
    $('input').click(function(event){
        var e = event.currentTarget;
        if ($(e).val() == 'Atras') {
            window.location.replace("../vista/modificarPeli.php");
        }
        else {
            if ($(e).val() == 'Insertar') {
                if (listaSala.length != 0 && listaHora.length != 0 && listaFecha.length != 0){
                    var insertPelicula = {'resultado' : {'idPelicula': sessionStorage.getItem("idPeliMod"),'anio': sessionStorage.getItem("anioPelMod"), 'titulo': sessionStorage.getItem("tituloPelMod"), 'pais': sessionStorage.getItem("paisPelMod"), 'genero': sessionStorage.getItem("generoPelMod"), 'duracion':sessionStorage.getItem("duracionPelMod"), 'fecha_estreno': sessionStorage.getItem("fechaPelMod"), 'calificacion': sessionStorage.getItem("calificacionPelMod"), 'sinopsis': sessionStorage.getItem("sinopsisPelMod"), 'actores': sessionStorage.getItem("actoresPelMod"), 'imagen' : sessionStorage.getItem("imagenPelMod"), 'mostrar': mostrar}};
                    $.ajax({
                        url: "../controlador/modificarPeli.php",
                        type: "POST",
                        data: insertPelicula
                    });
                    $.post("../controlador/maxIdPelicula.php", function(e){
                        var obj = JSON.parse(e);
                        idMax= obj.idPelicula + 1;
                    });
                    $.post("../controlador/proyeccion.php", function(re){
                        $.post("../controlador/todaTarifa.php", function(e){
                            var obj = JSON.parse(e);
                            var obj1 = JSON.parse(re);
                            for (let y = 0; y < obj1.length; y++) {
                                for (let i = 0; i < obj.length; i++) {
                                    for (let j = 0; j < listaSala.length; j++) {
                                        var idF = '.' + listaFecha[j];
                                        var idH = '.' + listaHora[j];
                                        var partes = $(idF).val().split('/');
                                        var partesHora = $(idH).val().split(':');
                                        var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
                                        var string = partes + 'T' + $(idH).val() + 'Z';
                                        var fechaHora = new Date(string);
                                        var semana = fechaHora.getDay();
                                        for (let z = 0; z < todo.length; z++) {
                                            if (listaSala[j] == todo[z].idSala) {
                                                if (semana == 3){
                                                    if (obj[i].nombre == 'Día espectador'){
                                                        proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                        $.ajax({
                                                                url: "../controlador/modificarPro.php",
                                                                type: "POST",
                                                                data: proyecccion
                                                        }); 
                                                        removeItemFromArr(listaSala,listaSala[i]);
                                                    }
                                                }
                                                else{
                                                    if(semana == 6){
                                                        if (obj[i].nombre == 'Día pareja'){
                                                            proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                            $.ajax({
                                                                url: "../controlador/modificarPro.php",
                                                                type: "POST",
                                                                data: proyecccion
                                                            }); 
                                                            removeItemFromArr(listaSala,listaSala[j]);
                                                        }
                                                    }
                                                    else{
                                                        if (semana == 6 && h == 12.00 ||  semana == 0 && h == 12.00){
                                                            if (obj[i].nombre == 'Matinal'){
                                                                proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                $.ajax({
                                                                    url: "../controlador/modificarPro.php",
                                                                    type: "POST",
                                                                    data: proyecccion
                                                                }); 
                                                                removeItemFromArr(listaSala,listaSala[j]);
                                                            }
                                                        }
                                                        else{
                                                            if (obj[i].nombre == 'Entrada normal'){
                                                                proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                $.ajax({
                                                                    url: "../controlador/modificarPro.php",
                                                                    type: "POST",
                                                                    data: proyecccion
                                                                }); 
                                                                removeItemFromArr(listaSala,listaSala[j]);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            else {
                                                var id = '#'+todo[z].idSala;
                                                if ($(id).prop('checked') == false) {
                                                    proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion}};
                                                    $.ajax({
                                                        url: "../controlador/borrarPro.php",
                                                        type: "POST",
                                                        data: proyecccion
                                                    }); 
                                                    if (listaSala.length > 1) {
                                                        removeItemFromArr(listaSala,listaSala[j]);
                                                    }
                                                }
                                                if (listaSala[j] != todo[z].idSala) {
                                                    if (obj1[y].idSala != listaSala[j] && partes != obj1[y].fecha && $(idH).val() != obj1[y].hora) {
                                                        if (semana == 3){
                                                            if (obj[i].nombre == 'Día espectador'){
                                                                proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                $.ajax({
                                                                        url: "../controlador/insertProyeccion.php",
                                                                        type: "POST",
                                                                        data: proyecccion
                                                                }); 
                                                                removeItemFromArr(listaSala,listaSala[j]);
                                                            }
                                                        }
                                                        else{
                                                            if(semana == 6){
                                                                if (obj[i].nombre == 'Día pareja'){
                                                                    proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                        
                                                                    $.ajax({
                                                                            url: "../controlador/insertProyeccion.php",
                                                                            type: "POST",
                                                                            data: proyecccion
                                                                    });
                                                                        removeItemFromArr(listaSala,listaSala[j]);
                                                                }
                                                            }
                                                            else{
                                                                if (semana == 6 && h == 12.00 ||  semana == 0 && h == 12.00){
                                                                    if (obj[i].nombre == 'Matinal'){
                                                                        proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                            
                                                                        $.ajax({
                                                                                url: "../controlador/insertProyeccion.php",
                                                                                type: "POST",
                                                                                data: proyecccion
                                                                        });
                                                                        removeItemFromArr(listaSala,listaSala[j]);
                                                                    }
                                                                }
                                                                else{
                                                                    if (obj[i].nombre == 'Entrada normal'){
                                                                        proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                                            
                                                                        $.ajax({
                                                                                url: "../controlador/insertProyeccion.php",
                                                                                type: "POST",
                                                                                data: proyecccion
                                                                        });
                                                                        removeItemFromArr(listaSala,listaSala[j]);
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
                                    }
                                }
                            }
                        });
                    });
                }
                    
                    // $.post("../controlador/maxIdPelicula.php", function(e){
                    //     var obj = JSON.parse(e);
                    //     idMax= obj.idPelicula + 1;
                    // });
            //         $.post("../controlador/proyeccion.php", function(re){
            //             $.post("../controlador/todaTarifa.php", function(s){
            //                 var obj = JSON.parse(s);
            //                 var t = JSON.parse(re);
            //                 for (let p = 0; p < t.length; p++) {
            //                     
            // //                             for (let i = 0; i < listaSala.length; i++) {
            //                                 // var idF = '.' + listaFecha[i];
            //                                 // var id6 = '.' + listaHora[i];
            // //                                 var idCheck = '#'+ listaSala[j];
            //                                 // var partes = $(id5).val().split('/');
            // //                                 var partesHora = $(id6).val().split(':');
            // //                                 var h = parseFloat(partesHora[0] + '.' + partesHora[1]); 
            // //                                 var string = $(id5).val() + 'T' + $(id6).val() + 'Z';
            //                                 // var fechaHora = new Date(string);
            //                                 // var semana = fechaHora.getDay();
            // //                                     for (let y = 0; y < todo.length; y++) {
            // //                                         if (listaSala[i] == todo[y].idSala) {
            //                                             if (semana == 3){
            //                                                 if (obj[i].nombre == 'Día espectador'){
            //                                                     proyecccion = {'resultado' : {'idProyeccion':todo[y].idProyeccion , 'idSala':listaSala[i], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
            //                                                     $.ajax({
            //                                                             url: "../controlador/modeficarPro.php",
            //                                                             type: "POST",
            //                                                             data: proyecccion
            //                                                     }); 
            //                                                     removeItemFromArr(listaSala,listaSala[i]);
            //                                                 }
            //                                             }
            //                                             else{
            //                                                 if(semana == 6){
            //                                                     if (w[j].nombre == 'Día pareja'){
            //                                                         proyecccion = {'resultado' : {'idProyeccion':todo[y].idProyeccion , 'idSala':listaSala[i], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
            //                                                         $.ajax({
            //                                                             url: "../controlador/modeficarPro.php",
            //                                                             type: "POST",
            //                                                             data: proyecccion
            //                                                         }); 
            //                                                         removeItemFromArr(listaSala,listaSala[i]);
            //                                                     }
            //                                                 }
            //                                                 else{
            //                                                     if (semana == 6 && h == 12.00 ||  semana == 0 && h == 12.00){
            //                                                         if (w[j].nombre == 'Matinal'){
            //                                                             proyecccion = {'resultado' : {'idProyeccion':todo[y].idProyeccion , 'idSala':listaSala[i], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
            //                                                             $.ajax({
            //                                                                 url: "../controlador/modeficarPro.php",
            //                                                                 type: "POST",
            //                                                                 data: proyecccion
            //                                                             }); 
            //                                                             removeItemFromArr(listaSala,listaSala[i]);
            //                                                         }
            //                                                     }
            //                                                     else{
            //                                                         if (w[j].nombre == 'Entrada normal'){
            //                                                             proyecccion = {'resultado' : {'idProyeccion':todo[y].idProyeccion , 'idSala':listaSala[i], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
            //                                                             $.ajax({
            //                                                                 url: "../controlador/modeficarPro.php",
            //                                                                 type: "POST",
            //                                                                 data: proyecccion
            //                                                             }); 
            //                                                             removeItemFromArr(listaSala,listaSala[i]);
            //                                                         }
            //                                                     }
            //                                                 }
            //                                             }
            //                                         }
            //                                         else{
            //                                             var id = '#'+todo[y].idSala;
            //                                             if ($(id).prop('checked')== false) {
            //                                                 proyecccion = {'resultado' : {'idProyeccion':todo[y].idProyeccion , 'idSala':listaSala[i], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
            //                                                             $.ajax({
            //                                                                 url: "../controlador/modeficarPro.php",
            //                                                                 type: "POST",
            //                                                                 data: proyecccion
            //                                                             }); 
            //                                             }
                                                        // if (t[p].idSala != listaSala[i] && partes != t[p].fecha && $(id6).val() != t[p].hora) {
                                                        //     if (semana == 3){
                                                        //         if (w[j].nombre == 'Día espectador'){
                                                        //             proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
                                                        //             $.ajax({
                                                        //                     url: "../controlador/insertProyeccion.php",
                                                        //                     type: "POST",
                                                        //                     data: proyecccion
                                                        //             }); 
                                                        //             removeItemFromArr(listaSala,listaSala[i]);
                                                        //         }
                                                        //     }
                                                        //     else{
                                                        //         if(semana == 6){
                                                        //             if (w[j].nombre == 'Día pareja'){
                                                        //                 proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
                                                                            
                                                        //                 $.ajax({
                                                        //                         url: "../controlador/insertProyeccion.php",
                                                        //                         type: "POST",
                                                        //                         data: proyecccion
                                                        //                 });
                                                        //                     removeItemFromArr(listaSala,listaSala[i]);
                                                        //             }
                                                        //         }
                                                        //         else{
                                                        //             if (semana == 6 && h == 12.00 ||  semana == 0 && h == 12.00){
                                                        //                 if (w[j].nombre == 'Matinal'){
                                                        //                     proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};
                                                                                
                                                        //                     $.ajax({
                                                        //                             url: "../controlador/insertProyeccion.php",
                                                        //                             type: "POST",
                                                        //                             data: proyecccion
                                                        //                     });
                                                        //                     removeItemFromArr(listaSala,listaSala[i]);
                                                        //                 }
                                                        //             }
                                                        //             else{
                                                        //                 if (w[j].nombre == 'Entrada normal'){
                                                        //                     proyecccion = {'resultado' : {'idSala':listaSala[i], 'idPelicula':idMax, 'idTipo':w[j].idTipo, 'fecha': $(id5).val(), 'hora':$(id6).val() }};   
                                                                                
                                                        //                     $.ajax({
                                                        //                             url: "../controlador/insertProyeccion.php",
                                                        //                             type: "POST",
                                                        //                             data: proyecccion
                                                        //                     });
                                                        //                     removeItemFromArr(listaSala,listaSala[i]);
                                                        //                 }
                                                        //             }
                                                        //         }
                                                        //     }
                                                        // } 
                                                        // else{
                                                        //     $('.mensaje').text('Este dato ya existe');
                                                        // } 
            //                                         }
            //                                     }                                 
            //                             }
                                            
            //                     }
            //                 }
                                
            //             });
            //         });
            //         alert('Se ha relaizado de forma correcta');
            //         window.location.replace("../vista/pelicula.php");
            //     }
            //     else{
            //         $('.mensaje').text('Hay datos sin rellenar');
            //     }
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