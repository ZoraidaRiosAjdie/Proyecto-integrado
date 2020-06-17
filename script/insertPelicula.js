$(document).ready(function(){
    if (sessionStorage.getItem("id") !=1 ){ 
        window.history.back();
    }
    var proyecccion = null ;
    var cont = 5;
    var cont1 = 5;
    var lista1 = [];
    var lista = [];
    var lista2 = [];
    var listaI1 = [];
    var listaI = [];
    var max = 0;
    $(':button').click(function(r){
        var evento = r.currentTarget;
        if ($(evento).val()=="Atras") {
            window.location.replace("../vista/pelicula.php");
        }
        else {
            // Para crear o eliminar nuevos input
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
                        var eli = 'row#' + lista1[0]
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
                        var listaOtro = [];
                        if ($(evento).val()=='Siguiente') {
                            // Recoge los datos y los pone de forma correcta para la siguiente página
                            if ($('#actor').val()!= '' && $('#papel').val()!= '' && $('#titulo').val()!= '' && $('#anio').val()!= '' && $('#duracion').val()!= '' && $('#genero').val()!= '' && $('#calificacion').val()!= '' && $('#pais').val()!= '' && $('#fecha').val()!= '' && $('#imagen').val()!= '' && $('#sinopsis').val()!= '' && $('#trailer').val()!= '') {
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
                                for (let i = 0; i < listaI.length; i++) {
                                    var l = 'input#' + listaI[i]
                                    listaOtro.push ($(l).val());
                                }
                                listaOtro.push($('#otros').val());
                                duracion = $('#duracion').val() + ' minutos';
                                var todoActor = listaActor.toString();  
                                var min = $('#duracion').val() + ' minutos';
                                sessionStorage.setItem('anioPelicula', $('#anio').val());
                                sessionStorage.setItem('tituloPelicula', $('#titulo').val());
                                sessionStorage.setItem('paisPelicula', $('#pais').val());
                                sessionStorage.setItem('generoPelicula', $('#genero').val());
                                sessionStorage.setItem('duracionPelicula', min);
                                sessionStorage.setItem('fechaPelicula', $('#fecha').val());
                                sessionStorage.setItem('calificacionPelicula', $('#calificacion').val());
                                sessionStorage.setItem('sinopsisPelicula', $('#sinopsis').val());
                                sessionStorage.setItem('actoresPelicula', todoActor);
                                sessionStorage.setItem('imagenPelicula', $('#imagen').val());
                                sessionStorage.setItem('otroPelicula', listaOtro.toString());
                                sessionStorage.setItem('trailerPelicula', $('#trailer').val())
                            
                                window.location.replace("../vista/insertTodaPelicula.php");
                                
                                
                            }
                            else{
                                alert('Has dejado algun campo en blanco');
                            }
                        }
                        else {
                            // Crea y elimina input
                            if ($(evento).attr('id')=='maxI') {
                                if (cont > 0){
                                    var id1 = 'r'+ cont;
                                    var id = 'ri'+ cont;

                                    var row1 = $('<div>');
                                    $('.newImagen').after(row1);
                                    row1.attr('class',"row");
                                    row1.attr('id', id1);
                
                                    var col1 = $('<div>');
                                    row1.append(col1);
                                    col1.attr('class',"col");
                        
                                    var text = $('<input>');
                                    col1.append(text);
                                    text.attr('type','text');
                                    text.attr('id', id);
                                    text.attr('class',"form-control actor");
                        
                                    listaI1.push(id1);
                                    listaI.push(id);
                                    cont --;
                                }
                            }
                            else {
                                if ($(evento).attr('id')=='minI') {
                                    cont =  6 - listaI1.length
                                    var eli = 'row#' + listaI1[0]
                                    var el = 'input#' + listaI[0]
                                    $(eli).remove();
                                    $(el).remove();
                                    listaI1.splice(0,1);
                                    listaI.splice(0,1);
                                }
                            }
                        }
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