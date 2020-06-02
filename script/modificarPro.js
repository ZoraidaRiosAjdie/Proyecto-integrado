$(document).ready(function(){
    // location.reload();
    // if (sessionStorage.getItem("id") !=1){ 
    //     window.location.replace("../vista/principal.php");
    // }

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
    $.post("../controlador/soloPro.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].idPelicula == sessionStorage.getItem("idPeliMod")) {
                for (let j = 0; j < listaIdSala.length; j++) {
                    console.log(obj)
                    if (listaIdSala[j] == obj[i].idSala) {
                        var col = $('<div>');
                        $('#sala').append(col);
                        col.attr('class', 'col-9 ml-auto mr-auto sala');

                        var row1 = $('<div>');
                        col.append(row1);
                        row1.attr('class', 'row pt-4 pl-3');
                        row1.attr('id', obj[i].idSala);

                        var col1 = $('<div>');
                        row1.append(col1);
                        col1.attr('class', 'col');
                        
                        var h3 = $('<h4>');
                        col1.append(h3);
                        var texto = 'Datos para: ' + obj[i].idSala;
                        h3.text(texto);

                        var row2 = $('<div>');
                        col.append(row2);
                        row2.attr('class', 'row ml-auto mr-auto');

                        var col2 = $('<div>');
                        row2.append(col2);
                        col2.attr('class', 'col');

                        var text1 = $('<p>');
                        col2.append(text1);
                        text1.html('<b>Fecha de proyección: </b>' + obj[i].fecha);

                        var col3 = $('<div>');
                        row2.append(col3);
                        col3.attr('class', 'col');

                        var text2 = $('<p>');
                        col3.append(text2);
                        text2.html('<b>Hora de proyección: </b>' + obj[i].hora);

                        var row3 = $('<div>');
                        col.append(row3);
                        row3.attr('class', 'row ml-auto mr-auto');

                        var col4 = $('<div>');
                        row3.append(col4);
                        col4.attr('class', 'col pt-3 pb-3');

                        var text3 = $('<input>');
                        col4.append(text3);
                        text3.attr('type', 'button');
                        text3.attr('class', 'btn btn-primary float-letf');
                        text3.val('Modificar');
                        text3.attr('id', obj[i].idProyeccion);

                        var text4 = $('<input>');
                        col4.append(text4);
                        text4.attr('type', 'button');
                        text4.attr('class', 'btn btn-primary float-right');
                        text4.val('Eliminar');
                        text4.attr('id', obj[i].idSala);
                        console.log(obj[i].idProyeccion)
                    }
                }
            }
        }
        $('input').click(function(event){
            var e = event.currentTarget;
            if ($(e).val() == 'Atras') {
                window.location.replace("../vista/modificarPeli.php");
            }
            else{
                if ($(e).val() == 'Insertar sala') {
                    window.location.replace("../vista/insertPro.php");
                }
                else{
                    if ($(e).val() == 'Eliminar') {
                        $.post("../controlador/reserva.php", function(p){
                            var obj1 = JSON.parse(p);
                            for (let j = 0; j < obj1.length; j++) {
                                if (obj1[j].idProyeccion != $(e).attr('id')){
                                    proyeccion = {'resultado' : {'idProyeccion':$(e).attr('id')}};
                                    $.ajax({
                                        url: "../controlador/borrarPro.php",
                                        type: "POST",
                                        data: proyeccion
                                    }); 
                                }
                                else{
                                    alert('Hay una reserva con esta proyección');
                                }
                            }
                            location.reload();
                        });
                       
                    }
                    else{
                        if ($(e).val() == 'Modificar') {
                            sessionStorage.setItem('modIdPro' , $(e).attr('id'));
                            window.location.replace("../vista/modPro.php");
                        }
                    }
                }
            }
        });
    });
    
    // var mostrar;
    // $.post("../controlador/soloPeli.php", function(r){
        
    //     var obj = JSON.parse(r);
    //     for (let i = 0; i < obj.length; i++) {
    //         if (obj[i].idPelicula == sessionStorage.getItem("idPeliMod")) {
    //             mostrar = obj[i].mostrar;
    //         }
    //     }
    // });
    // $.post("../controlador/salaRe.php", function(r){
    //     var obj = JSON.parse(r);
    //     for (let i = 0; i < obj.length; i++) {
    //         var row = $('<div>');
    //         $('#sala').append(row);
    //         row.attr('class',"ml-5 row");
    
    //         var col = $('<div>');
    //         row.append(col);
    //         col.attr('class',"col");
                
    //         var check = $('<input>');
    //         col.append(check);
    //         check.attr('type','checkbox');
    //         check.val(obj[i].idSala);
    //         check.attr('id', obj[i].idSala);
    //         check.attr('class',"form-check-input");
            
            
    //         var label = $('<label>');
    //         col.append(label);
    //         label.attr('class',"form-check-label");
    //         label.text(obj[i].idSala);

    //         $(':checkbox').click(function(event){
    //                 var e = event.currentTarget;
    //                 if ($(e).attr('id') == obj[i].idSala) {
    //                     if ($(e).is(':checked')) {
    //                         listaSala.push(obj[i].idSala);
    
    //                         var b = 'b' + obj[i].idSala;
    //                         var c = 'c' + obj[i].idSala;
    
    //                         var h3 = $('<h4>');
    //                         $('#proyeccion').append(h3);
    //                         var texto = 'Datos para: ' + $(e).attr('id');
    //                         h3.text(texto);
    //                         h3.attr('id', b);
    
    //                         var row2 = $('<div>');
    //                         $('#proyeccion').append(row2);
    //                         row2.attr('class', 'row');
    //                         row2.attr('id', c);
    
    //                         var col4 = $('<div>');
    //                         row2.append(col4);
    //                         col4.attr('class', 'col');
                            
    //                         var label1 = $('<label>');
    //                         col4.append(label1);
    //                         label1.text('Fecha: ');
                
    //                         var text3 = $('<input>');
    //                         col4.append(text3);
    //                         text3.attr('type', 'date');
    //                         var f = 'form-control ' + b;
    //                         text3.attr('class', f);
    
    //                         var col5 = $('<div>');
    //                         row2.append(col5);
    //                         col5.attr('class', 'col');
    
    //                         var label2 = $('<label>');
    //                         col5.append(label2);
    //                         label2.text('Hora: ');
                            
    //                         var text4 = $('<input>');
    //                         col5.append(text4);
    //                         text4.attr('type', 'time');
    //                         var j = 'form-control ' + c;
    //                         text4.attr('class', j);
    
    //                         listaHora.push(c);
    //                         listaFecha.push(b);
    
    //                     }
    //                     else{
    //                         var id3 = '#b' + obj[i].idSala
    //                         var id4 = '#c' + obj[i].idSala
    //                         var g = 'b' + obj[i].idSala
    //                         var d = 'c' + obj[i].idSala
    //                         $(id3).remove();
    //                         $(id4).remove();
    //                         removeItemFromArr(listaFecha,g);
    //                         removeItemFromArr(listaHora,d);
    //                         removeItemFromArr(listaSala,obj[i].idSala);
    //                     }
    //                 }
    //         });
    //     }
    //     console.log(todo);
    //     for (let j = 0; j < todo.length; j++) {
    //         // console.log(todo);
                // var id = '#'+todo[j].idSala;
                // $(id).prop('checked',true);
                // listaSala.push(todo[j].idSala);
    
    //             var b = 'b' + todo[j].idSala;
    //             var c = 'c' + todo[j].idSala;
    
                // var h3 = $('<h4>');
                // $('#proyeccion').append(h3);
                // var texto = 'Datos para: ' + todo[j].idSala;
                // h3.text(texto);
                // h3.attr('id', b);
    
    //             var row2 = $('<div>');
    //             $('#proyeccion').append(row2);
    //             row2.attr('class', 'row');
    //             row2.attr('id', c);
    
    //             var col4 = $('<div>');
    //             row2.append(col4);
    //             col4.attr('class', 'col');
                            
    //             var label1 = $('<label>');
    //             col4.append(label1);
    //             label1.text('Fecha: ');
                
                // var text3 = $('<input>');
                // col4.append(text3);
                // text3.attr('type', 'text');
                // var f = 'form-control ' + b;
                // text3.attr('class', f);
                // // var partes = todo[j].fecha.split('-');
                // // var fecha = partes[2] + '/' + partes[1] + '/' + partes[0] ;
                // text3.val(todo[j].fecha);
    
    //             var col5 = $('<div>');
    //             row2.append(col5);
    //             col5.attr('class', 'col');
    
    //             var label2 = $('<label>');
    //             col5.append(label2);
    //             label2.text('Hora: ');
                            
    //             var text4 = $('<input>');
    //             col5.append(text4);
    //             text4.attr('type', 'text');
    //             var p = 'form-control ' + c;
    //             text4.attr('class', p);
    //             text4.val(todo[j].hora);

    //             listaHora.push(c);
    //             listaFecha.push(b); 
    //     } 
    // });
    
    // $('input').click(function(event){
    //     var e = event.currentTarget;
        // if ($(e).val() == 'Atras') {
        //     window.location.replace("../vista/modificarPeli.php");
        // }
    //     else {
    //         if ($(e).val() == 'Insertar') {
    //             $.post("../controlador/tarifaAdmin.php", function(e){
    //                 var obj = JSON.parse(e);
    //                 for (let i = 0; i < obj.length; i++) {
    //                     var dia ;
    //                     if (obj[i].semana != null) {
    //                         var dia = obj[i].semana.split(',');
    //                     }
    //                     else{
    //                         var dia = obj[i].semana;
    //                     }
    //                     var part = obj[i].horario.split(',');
    //                     var hora;
    //                     var hO = [];
    //                     var hE = [];
    //                     for (let j = 0; j < part.length; j++) {
    //                         var hOr = part[j].split('-');
    //                         for (let l = 0; l < hOr.length; l++) {
    //                             if (hOr.length == 2) {
    //                                 var hEntre = hOr[l].split(':');
    //                                 hE.push(parseFloat(hEntre[0] + '.' + hEntre[1]));
                                    
    //                             }
    //                             else{
    //                                 hora = hOr[l].split(':');
    //                                 hO.push(parseFloat(hora[0] + '.' + hora[1]));
    //                             }
    //                         }
    //                         if (hO.length == 0) {
    //                             hO.push('a');
    //                         }
    //                     }
    //                     if (obj[i].idTipo != 1) {
    //                         var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
    //                         todoTarifa.push(json);
    //                     }
    //                     else {
    //                         var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
    //                         normal.push(json);
    //                     }
    //                 }
    //             });   
    //             var lista =[];     
    //             if (listaSala.length != 0 && listaHora.length != 0 && listaFecha.length != 0){
    //                 $.post("../controlador/proyeccion.php", function(re){
    //                     $.post("../controlador/reserva.php", function(e){
    //                         var obj = JSON.parse(e);
    //                         for (let i = 0; i < obj.length; i++) {
    //                             for (let z = 0; z < todo.length; z++) {
    //                             // while (todo.length != 0) {
    //                                 var id = '#'+todo[z].idSala;
    //                                 if ($(id).prop('checked') == false) {
    //                                     if (obj[i].idProyeccion != todo[z].idProyeccion) {
                                            // proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion}};
                                            // $.ajax({
                                            //     url: "../controlador/borrarPro.php",
                                            //     type: "POST",
                                            //     data: proyeccion
                                            // }); 
                                            // // removeItemFromArr(todo,todo[z]);
    //                                     }
    //                                     else{
    //                                         alert ('Hay una reserva para esta proyeccion');
    //                                     }
    //                                 }
    //                                 else {
    //                                     for (let j = 0; j < listaSala.length; j++) {
    //                                         var idF = '.' + listaFecha[j];
    //                                         var idH = '.' + listaHora[j];
    //                                         // console.log(partes);
    //                                         var partes = $(idF).val().split('/');
    //                                         // console.log(partes);
    //                                         var partesHora = $(idH).val().split(':');
    //                                         var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
    //                                         var string = partes.toString();  + 'T' + $(idH).val() + 'Z';
    //                                         var fechaHora = new Date(string);
    //                                         var semana = fechaHora.getDay();
    //                                         if (listaSala[j] == todo[z].idSala) {
    //                                             for (let p = 0; p < todoTarifa.length; p++) {
    //                                                 var dia = todoTarifa[p].dia;
    //                                                 var hO = todoTarifa[p].hO;
    //                                                 var hE = todoTarifa[p].hE
    //                                                 for (let s = 0; s < dia.length; s++) {
    //                                                     if (semana == dia[s]) {
    //                                                         for (let l = 0; l < hO.length; l++) {
    //                                                             if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
    //                                                                 $('#tarifa').val(todoTarifa[p].nombre);
    //                                                                 if (todoTarifa[p].rebaja == null) {
    //                                                                     proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':todo[z].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
    //                                                                     // console.log(proyeccion);
    //                                                                     $.ajax({
    //                                                                         url: "../controlador/modificarPro.php",
    //                                                                         type: "POST",
    //                                                                         data: proyeccion
    //                                                                     }); 
    //                                                                     var todoLista = {'listaSala': listaSala[j], 'listaFecha': listaFecha[j], 'listaHora': listaHora[j]}
    //                                                                     lista.push(todoLista);
    //                                                                     // removeItemFromArr(todo,todo[z]);
    //                                                                 }
    //                                                             }
    //                                                         }
                                                            
    //                                                     }  
    //                                                 }
    //                                             }
    //                                             if (proyeccion == null) {
    //                                                 for (let q = 0; q < normal.length; q++) {
    //                                                     proyeccion = {'resultado' : {'idProyeccion':todo[z].idProyeccion , 'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':todo[z].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};
    //                                                     $.ajax({
    //                                                         url: "../controlador/modificarPro.php",
    //                                                         type: "POST",
    //                                                         data: proyeccion
    //                                                     }); 
    //                                                     var todoLista = {'listaSala': listaSala[j], 'listaFecha': listaFecha[j], 'listaHora': listaHora[j]}
    //                                                     lista.push(todoLista);
    //                                                     // removeItemFromArr(listaSala,listaSala[j]);
    //                                                     // removeItemFromArr(listaFecha,listaFecha[j]);
    //                                                     // removeItemFromArr(listaHora,listaHora[j]);
    //                                                     // removeItemFromArr(todo,todo[z]);
    //                                                 }
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                                 // z ++;
    //                             }
    //                         }
    //                         console.log(lista)
    //                         for (let i = 0; i < lista.length; i++) {
    //                             removeItemFromArr(listaSala,lista[i].listaSala);
    //                             removeItemFromArr(listaFecha,lista[i].listaFecha);
    //                             removeItemFromArr(listaHora,lista[i].listaHora);
    //                         }
    //                         var insertado = [];
    //                         var obj1 = JSON.parse(re);
    //                         var j = 0
    //                         for (let i = 0; i < obj1.length; i++) {
    //                             for (let j = 0; j < listaSala.length; j++) {
    //                                 console.log(listaSala);
    //                                 if (insertado.length < listaSala.length) {
    //                                     var idF = '.' + listaFecha[j];
    //                                     var idH = '.' + listaHora[j];
    //                                     var partes = $(idF).val().split('/');
    //                                     var partesHora = $(idH).val().split(':');
    //                                     var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
    //                                     var string = partes + 'T' + $(idH).val() + 'Z';
    //                                     var fechaHora = new Date(string);
    //                                     var semana = fechaHora.getDay();
                                        
    //                                     if (obj1[i].idSala != listaSala[j] && partes.toString() != obj1[i].fecha && $(idH).val() != obj1[i].hora) {
    //                                         for (let p = 0; p < todoTarifa.length; p++) {
    //                                             var dia = todoTarifa[p].dia;
    //                                             var hO = todoTarifa[p].hO;
    //                                             var hE = todoTarifa[p].hE
    //                                             for (let s = 0; s < dia.length; s++) {
    //                                                 if (semana == dia[s]) {
    //                                                     for (let l = 0; l < hO.length; l++) {
    //                                                         if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
    //                                                             $('#tarifa').val(todoTarifa[p].nombre);
    //                                                             if (todoTarifa[p].rebaja == null) {
    //                                                                 proyeccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj1[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
    //                                                                 $.ajax({
    //                                                                         url: "../controlador/insertProyeccion.php",
    //                                                                         type: "POST",
    //                                                                         data: proyeccion
    //                                                                 });
    //                                                                 removeItemFromArr(listaSala,listaSala[j]);
    //                                                                 removeItemFromArr(listaFecha,listaFecha[j]);
    //                                                                 removeItemFromArr(listaHora,listaHora[j]);
    //                                                                 listaSala.push(1);
    //                                                                 insertado.push(listaIdSala[j]);
    //                                                             }
    //                                                         }
    //                                                     }
    //                                                 }  
    //                                             }
    //                                         }
    //                                         if (proyeccion == null) {
    //                                             for (let q = 0; q < normal.length; q++) {
    //                                                 proyeccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj1[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                                        
    //                                                 $.ajax({
    //                                                         url: "../controlador/insertProyeccion.php",
    //                                                         type: "POST",
    //                                                         data: proyeccion
    //                                                 });
    //                                                 removeItemFromArr(listaSala,listaSala[j]);
    //                                                 removeItemFromArr(listaFecha,listaFecha[j]);
    //                                                 removeItemFromArr(listaHora,listaHora[j]);
    //                                                 listaSala.push(1);
    //                                                 insertado.push(listaIdSala[j]);      
    //                                             }
    //                                         }
    //                                     }
    //                                     else{
    //                                         $('.mensaje').text('Este dato ya existe');
    //                                     }
    //                                 } 
    //                             }
    //                         }
    //                     });
    //                 });
    //                 // $.post("../controlador/proyeccion.php", function(e){
    //                     // var insertado = [];
    //                     // var obj = JSON.parse(e);
    //                     // var j = 0
    //                     // for (let i = 0; i < obj.length; i++) {
    //                     //     if (insertado.length < listaSala.length) {
    //                     //         console.log(listaSala);
    //                     //         for (let j = 0; j < listaSala.length; j++) {
    //                     //             var idF = '.' + listaFecha[j];
    //                     //             var idH = '.' + listaHora[j];
    //                     //             var partes = $(idF).val().split('/');
    //                     //             var partesHora = $(idH).val().split(':');
    //                     //             var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
    //                     //             var string = partes + 'T' + $(idH).val() + 'Z';
    //                     //             var fechaHora = new Date(string);
    //                     //             var semana = fechaHora.getDay();
                                    
    //                     //             if (obj[i].idSala != listaSala[j] && partes.toString() != obj[i].fecha && $(idH).val() != obj[i].hora) {
    //                     //                 for (let p = 0; p < todoTarifa.length; p++) {
    //                     //                     var dia = todoTarifa[p].dia;
    //                     //                     var hO = todoTarifa[p].hO;
    //                     //                     var hE = todoTarifa[p].hE
    //                     //                     for (let s = 0; s < dia.length; s++) {
    //                     //                         if (semana == dia[s]) {
    //                     //                             for (let l = 0; l < hO.length; l++) {
    //                     //                                 if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
    //                     //                                     $('#tarifa').val(todoTarifa[p].nombre);
    //                     //                                     if (todoTarifa[p].rebaja == null) {
    //                     //                                         proyeccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
    //                     //                                         $.ajax({
    //                     //                                                 url: "../controlador/insertProyeccion.php",
    //                     //                                                 type: "POST",
    //                     //                                                 data: proyeccion
    //                     //                                         });
    //                     //                                         insertado.push(listaIdSala[j]);
    //                     //                                         // removeItemFromArr(listaSala,listaSala[j]);
    //                     //                                         // removeItemFromArr(listaFecha,listaFecha[j]);
    //                     //                                         // removeItemFromArr(listaHora,listaHora[j]); 
    //                     //                                     }
    //                     //                                 }
    //                     //                             }
    //                     //                         }  
    //                     //                     }
    //                     //                 }
    //                     //                 if (proyeccion == null) {
    //                     //                     for (let q = 0; q < normal.length; q++) {
    //                     //                         proyeccion = {'resultado' : {'idSala':listaSala[j], 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                                    
    //                     //                         $.ajax({
    //                     //                                 url: "../controlador/insertProyeccion.php",
    //                     //                                 type: "POST",
    //                     //                                 data: proyeccion
    //                     //                         });
    //                     //                         insertado.push(listaIdSala[j]);
    //                     //                         // removeItemFromArr(listaSala,listaSala[j]);
    //                     //                         // removeItemFromArr(listaFecha,listaFecha[j]);
    //                     //                         // removeItemFromArr(listaHora,listaHora[j]);        
    //                     //                     }
    //                     //                 }
    //                     //             }
    //                     //             else{
    //                     //                 $('.mensaje').text('Este dato ya existe');
    //                     //             }
    //                     //         } 
    //                     //     }
    //                     // }
    //                 // });
    //             }
    //             else{
    //                 alert('La proyección no puede estar vacia')
    //             }
    //         }
    //     }
    // });
    // function removeItemFromArr ( arr, item ) {
    //     var i = arr.indexOf( item );
    //     if ( i !== -1 ) {
    //         arr.splice( i, 1 );
    //     }
    // }
});