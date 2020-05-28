$(document).ready(function(){
    if (sessionStorage.getItem("id") !=1){ 
        window.location.replace("../vista/principal.php");
    }
    var proyecccion = null ;
    var cont = 5;
    var cont1 = 5;
    var lista1 = [];
    var lista = [];
    var lista2 = [];
    var listaHora =[];
    var listaFecha =[];
    var listaSala =[];
    var listaPelicula = [];
    var max = 0;
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
                        if ($(evento).val()=='Siguiente') {
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
                                var min = $('#duracion').val() + ' minutos'
                                
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
                            
                                window.location.replace("../vista/insertTodaPelicula.php");
                                
                                
                            }
                            else{
                                alert('Has dejado algun campo en blanco');
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