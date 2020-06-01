$(document).ready(function(){
    // if (sessionStorage.getItem("id") !=1){ 
    //     window.location.replace("../vista/principal.php");
    // }
    var listaHora =[];
    var listaFecha =[];
    var listaSala =[];
    var idMax;
    var listaIdSala = [];
    var proyeccion =null;
    var todoTarifa = [];
    var normal = [];
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
    var todo = [];
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
    
    var mostrar;
    $.post("../controlador/soloPeli.php", function(r){
        // console.log(todo);
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
                // var partes = todo[j].fecha.split('-');
                // var fecha = partes[2] + '/' + partes[1] + '/' + partes[0] ;
                text3.val(todo[j].fecha);
    
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
                    
                    $.post("../controlador/tarifaAdmin.php", function(e){
                        var obj = JSON.parse(e);
                        for (let i = 0; i < obj.length; i++) {
                            var dia ;
                            if (obj[i].semana != null) {
                                var dia = obj[i].semana.split(',');
                            }
                            else{
                                var dia = obj[i].semana;
                            }
                            var part = obj[i].horario.split(',');
                            var hora;
                            var hO = [];
                            var hE = [];
                            for (let j = 0; j < part.length; j++) {
                                var hOr = part[j].split('-');
                                for (let l = 0; l < hOr.length; l++) {
                                    if (hOr.length == 2) {
                                        var hEntre = hOr[l].split(':');
                                        hE.push(parseFloat(hEntre[0] + '.' + hEntre[1]));
                                        
                                    }
                                    else{
                                        hora = hOr[l].split(':');
                                        hO.push(parseFloat(hora[0] + '.' + hora[1]));
                                    }
                                }
                                if (hO.length == 0) {
                                    hO.push('a');
                                }
                            }
                            if (obj[i].idTipo != 1) {
                                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
                                todoTarifa.push(json);
                            }
                            else {
                                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
                                normal.push(json);
                            }
                        }
                    });
                    
                    $.post("../controlador/proyeccion.php", function(e){
                        console.log(todo);
                        var obj = JSON.parse(e);
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
                                    var id = '#'+todo[z].idSala;
                                    if ($(id).prop('checked') == false) {
                                        proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion}};
                                        $.ajax({
                                            url: "../controlador/borrarPro.php",
                                            type: "POST",
                                            data: proyeccion
                                        }); 
                                        // removeItemFromArr(todo,todo[z]);
                                    }  
                                    else {
                                        if (listaSala[j] == todo[z].idSala) {
                                            for (let p = 0; p < todoTarifa.length; p++) {
                                                var dia = todoTarifa[p].dia;
                                                var hO = todoTarifa[p].hO;
                                                var hE = todoTarifa[p].hE
                                                for (let s = 0; s < dia.length; s++) {
                                                    if (semana == dia[s]) {
                                                        for (let l = 0; l < hO.length; l++) {
                                                            if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
                                                                $('#tarifa').val(todoTarifa[p].nombre);
                                                                if (todoTarifa[p].rebaja == null) {
                                                                    proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                    $.ajax({
                                                                        url: "../controlador/modificarPro.php",
                                                                        type: "POST",
                                                                        data: proyeccion
                                                                    }); 
                                                                    // removeItemFromArr(listaSala,listaSala[j]);
                                                                    // removeItemFromArr(listaFecha,listaFecha[j]);
                                                                    // removeItemFromArr(listaHora,listaHora[j]);
                                                                    // removeItemFromArr(todo,todo[z]);
                                                                }
                                                            }
                                                        }
                                                        
                                                    }  
                                                }
                                            }
                                            if (proyeccion == null) {
                                                for (let q = 0; q < normal.length; q++) {
                                                    proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                    $.ajax({
                                                        url: "../controlador/modificarPro.php",
                                                        type: "POST",
                                                        data: proyeccion
                                                    }); 
                                                    // removeItemFromArr(listaSala,listaSala[j]);
                                                    // removeItemFromArr(listaFecha,listaFecha[j]);
                                                    // removeItemFromArr(listaHora,listaHora[j]);
                                                    // removeItemFromArr(todo,todo[z]);
                                                }
                                            }
                                        }
                                    }
                                }
                                if (obj[i].idSala != listaSala[j] && partes != obj[i].fecha && $(idH).val() != obj[i].hora) {
                                    for (let p = 0; p < todoTarifa.length; p++) {
                                        var dia = todoTarifa[p].dia;
                                        var hO = todoTarifa[p].hO;
                                        var hE = todoTarifa[p].hE
                                        for (let s = 0; s < dia.length; s++) {
                                            if (semana == dia[s]) {
                                                for (let l = 0; l < hO.length; l++) {
                                                    if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
                                                        $('#tarifa').val(todoTarifa[p].nombre);
                                                        if (todoTarifa[p].rebaja == null) {
                                                            proyeccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                            $.ajax({
                                                                    url: "../controlador/insertProyeccion.php",
                                                                    type: "POST",
                                                                    data: proyeccion
                                                            });
                                                            removeItemFromArr(listaSala,listaSala[j]);
                                                            removeItemFromArr(listaFecha,listaFecha[j]);
                                                            removeItemFromArr(listaHora,listaHora[j]); 
                                                        }
                                                    }
                                                }
                                                
                                            }  
                                        }
                                    }
                                    if (proyeccion == null) {
                                        for (let q = 0; q < normal.length; q++) {
                                            proyeccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                                
                                            $.ajax({
                                                    url: "../controlador/insertProyeccion.php",
                                                    type: "POST",
                                                    data: proyeccion
                                            });
                                            removeItemFromArr(listaSala,listaSala[j]);
                                            removeItemFromArr(listaFecha,listaFecha[j]);
                                            removeItemFromArr(listaHora,listaHora[j]);        
                                        }
                                    }
                                }
                                else{
                                    $('.mensaje').text('Este dato ya existe');
                                    // console.log(proyeccion)
                                }
                            }
                        }
                    });
                    // $.post("../controlador/proyeccion.php", function(re){
                    //     $.post("../controlador/tarifaAdmin.php", function(e){
                    //         var obj = JSON.parse(e);
                    //         var obj1 = JSON.parse(re);
                    //         for (let y = 0; y < obj1.length; y++) {
                    //             for (let i = 0; i < obj.length; i++) {
                    //          
                    //                 for (let j = 0; j < listaSala.length; j++) {
                                        // var idF = '.' + listaFecha[j];
                                        // var idH = '.' + listaHora[j];
                                        // var partes = $(idF).val().split('/');
                                        // var partesHora = $(idH).val().split(':');
                                        // var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
                                        // var string = partes + 'T' + $(idH).val() + 'Z';
                                        // var fechaHora = new Date(string);
                                        // var semana = fechaHora.getDay();
                    //                     for (let z = 0; z < todo.length; z++) {
                                            // var id = '#'+todo[z].idSala;
                                            // if ($(id).prop('checked') == false) {
                                            //     proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion}};
                                            //     $.ajax({
                                            //         url: "../controlador/borrarPro.php",
                                            //         type: "POST",
                                            //         data: proyecccion
                                            //     }); 
                                            //     removeItemFromArr(todo,todo[z]);
                                            // }
                                            // else {
                                            //     if (listaSala[j] == todo[z].idSala) {
                                            //         for (let p = 0; p < todoTarifa.length; p++) {
                                                         
                                            //         }
                                                    // if (semana == 3){
                                                    //     if (obj[i].nombre == 'Día espectador'){
                                                            // proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                            // $.ajax({
                                                            //         url: "../controlador/modificarPro.php",
                                                            //         type: "POST",
                                                            //         data: proyecccion
                                                            // }); 
                                                            // removeItemFromArr(listaSala,listaSala[j]);
                                                            // removeItemFromArr(listaFecha,listaFecha[j]);
                                                            // removeItemFromArr(listaHora,listaHora[j]);
                                                            // removeItemFromArr(todo,todo[z]);
                                                    //     }
                                                    // }
                                                    // else{
                                                    //     if(semana == 6){
                                                    //         if (obj[i].nombre == 'Día pareja'){
                                                    //             proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                    //             $.ajax({
                                                    //                 url: "../controlador/modificarPro.php",
                                                    //                 type: "POST",
                                                    //                 data: proyecccion
                                                    //             }); 
                                                    //             removeItemFromArr(listaSala,listaSala[j]);
                                                    //             removeItemFromArr(listaFecha,listaFecha[j]);
                                                    //             removeItemFromArr(listaHora,listaHora[j]);
                                                    //             removeItemFromArr(todo,todo[z]);
                                                    //         }
                                                    //     }
                                                    //     else{
                                                    //         if (semana == 6 && h == 12.00 ||  semana == 0 && h == 12.00){
                                                    //             if (obj[i].nombre == 'Matinal'){
                                                    //                 proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                    //                 $.ajax({
                                                    //                     url: "../controlador/modificarPro.php",
                                                    //                     type: "POST",
                                                    //                     data: proyecccion
                                                    //                 }); 
                                                    //                 removeItemFromArr(listaSala,listaSala[j]);
                                                    //                 removeItemFromArr(listaFecha,listaFecha[j]);
                                                    //                 removeItemFromArr(listaHora,listaHora[j]);
                                                    //                 removeItemFromArr(todo,todo[z]);
                                                    //             }
                                                    //         }
                                                    //         else{
                                                    //             if (obj[i].nombre == 'Entrada normal'){
                                                    //                 proyecccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                    //                 $.ajax({
                                                    //                     url: "../controlador/modificarPro.php",
                                                    //                     type: "POST",
                                                    //                     data: proyecccion
                                                    //                 }); 
                                                    //                 removeItemFromArr(listaSala,listaSala[j]);
                                                    //                 removeItemFromArr(listaFecha,listaFecha[j]);
                                                    //                 removeItemFromArr(listaHora,listaHora[j]);
                                                    //                 removeItemFromArr(todo,todo[z]);
                                                    //             }
                                                    //         }
                                                    //     }
                                                    // }
                                        //         }
                                        //     }
                                        // }
                                        // if (obj1[y].idSala != listaSala[j] && partes != obj1[y].fecha && $(idH).val() != obj1[y].hora) {
                    //                         for (let p = 0; p < todoTarifa.length; p++) {
                    //                             var dia = todoTarifa[p].dia;
                    //                             var hO = todoTarifa[p].hO;
                    //                             var hE = todoTarifa[p].hE
                    //                             for (let s = 0; s < dia.length; s++) {
                    //                                 if (semana == dia[s]) {
                    //                                     for (let l = 0; l < hO.length; l++) {
                    //                                         if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
                    //                                             $('#tarifa').val(todoTarifa[p].nombre);
                    //                                             if (todoTarifa[p].rebaja == null) {
                    //                                                 proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                    
                    //                                                 removeItemFromArr(listaSala,listaSala[j]);
                    //                                                 removeItemFromArr(listaFecha,listaFecha[j]);
                    //                                                 removeItemFromArr(listaHora,listaHora[j]);
                    //                                             }
                    //                                         }
                    //                                     }
                    //                                     if (proyeccion != null) {
                    //                                         $.ajax({
                    //                                             url: "../controlador/modificarPro.php",
                    //                                             type: "POST",
                    //                                             data: proyeccion
                    //                                         }); 
                    //                                     }
                    //                                     else {
                    //                                         for (let i = 0; i < normal.length; i++) {
                    //                                             proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                    //                                             $.ajax({
                    //                                                 url: "../controlador/modificarPro.php",
                    //                                                 type: "POST",
                    //                                                 data: proyeccion
                    //                                             }); 
                    //                                             removeItemFromArr(listaSala,listaSala[j]);
                    //                                             removeItemFromArr(listaFecha,listaFecha[j]);
                    //                                             removeItemFromArr(listaHora,listaHora[j]);
                    //                                         }
                    //                                     }
                    //                                 }  
                    //                             } 
                    //                         }
                                            // if (semana == 3){
                                            //     if (obj[i].nombre == 'Día espectador'){
                                            //         proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                            //         $.ajax({
                                            //                 url: "../controlador/insertProyeccion.php",
                                            //                 type: "POST",
                                            //                 data: proyecccion
                                            //         }); 
                                            //         removeItemFromArr(listaSala,listaSala[j]);
                                            //         removeItemFromArr(listaFecha,listaFecha[j]);
                                            //         removeItemFromArr(listaHora,listaHora[j]);
                                            //     }
                                            // }
                                            // else{
                                            //     if(semana == 6){
                                            //         if (obj[i].nombre == 'Día pareja'){
                                            //             proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                            
                                            //             $.ajax({
                                            //                     url: "../controlador/insertProyeccion.php",
                                            //                     type: "POST",
                                            //                     data: proyecccion
                                            //             });
                                            //                 removeItemFromArr(listaSala,listaSala[j]);
                                            //                 removeItemFromArr(listaFecha,listaFecha[j]);
                                            //                 removeItemFromArr(listaHora,listaHora[j]);
                                            //         }
                                            //     }
                                            //     else{
                                            //         if (semana == 6 && h == 12.00 ||  semana == 0 && h == 12.00){
                                            //             if (obj[i].nombre == 'Matinal'){
                                            //                 proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
                                                                
                                            //                 $.ajax({
                                            //                         url: "../controlador/insertProyeccion.php",
                                            //                         type: "POST",
                                            //                         data: proyecccion
                                            //                 });
                                            //                 removeItemFromArr(listaSala,listaSala[j]);
                                            //                 removeItemFromArr(listaFecha,listaFecha[j]);
                                            //                 removeItemFromArr(listaHora,listaHora[j]);
                                            //             }
                                            //         }
                                            //         else{
                                            //             if (obj[i].nombre == 'Entrada normal'){
                                                            // proyecccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                                
                                                            // $.ajax({
                                                            //         url: "../controlador/insertProyeccion.php",
                                                            //         type: "POST",
                                                            //         data: proyecccion
                                                            // });
                                                            // removeItemFromArr(listaSala,listaSala[j]);
                                                            // removeItemFromArr(listaFecha,listaFecha[j]);
                                                            // removeItemFromArr(listaHora,listaHora[j]);
                                            //             }
                                            //         }
                                            //     }
                                            // }
            //                             } 
            //                             else{
            //                                 $('.mensaje').text('Este dato ya existe');
            //                                 console.log(proyeccion)
            //                             }
            //                         }
            //                     }
            //                 }
            //             });
            //         });
            //         alert('Se ha relaizado de forma correcta');
            //         // window.location.replace("../vista/pelicula.php");
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