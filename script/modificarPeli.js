$(document).ready(function(){
    if (sessionStorage.getItem("id") !=1){ 
        window.location.replace("../vista/principal.php");
    }
    var listaAct = [];
    var listaPap = [];
    $.post("../controlador/soloPeli.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].idPelicula == sessionStorage.getItem("idPeliMod")) {
                $('#titulo').val(obj[i].titulo);
                $('#anio').val(obj[i].anio);
                var duracion = obj[i].duracion.split(' ');
                $('#duracion').val(duracion[0]);
                $('#calificacion').val(obj[i].calificacion);

                $('#fecha').val(obj[i].fecha);
                // $('#fecha').text(fecha);
                $('#genero').val(obj[i].genero);
                $('#pais').val(obj[i].pais);
                $('#imagen').val(obj[i].imagen);
                $('#sinopsis').val(obj[i].sinopsis);
                var partes = obj[i].actores.split(',');
                for (let j = 0; j < partes.length; j++) {
                    var part = partes[j].split('(');
                    var id1 = 'a'+ j; 
                    var id2 = 'b'+ j; 

                    var row1  = $('<div>');
                    row1.attr('class',"row");
                    $('.actor').append(row1);

                    var text = $('<input>');
                    row1.append(text);
                    text.attr('type','text');
                    text.attr('class',"form-control ");
                    text.val(part[0]);
                    text.attr('id', id1);

                    var row2  = $('<div>');
                    row2.attr('class',"row");
                    $('.papel').append(row2);

                    var text2 = $('<input>');
                    row2.append(text2);
                    text2.attr('type','text');
                    text2.attr('class',"form-control ");
                    text2.val(part[1].substring(0,part[1].length-1));
                    text2.attr('id', id2);

                    listaAct.push(id1);
                    listaPap.push(id2);
                }
                
            }
        }
                           
    });
    $(':button').click(function(r){
        var evento = r.currentTarget;
        if ($(evento).val()=="Atras") {
            window.location.replace("../vista/pelicula.php");
        }
        else {
            
            var listaActor = [];
            var duracion;
            var insertPelicula=null;
            if ($(evento).val()=='Siguiente') {
                if ($('#titulo').val()!= '' && $('#anio').val()!= '' && $('#duracion').val()!= '' && $('#genero').val()!= '' && $('#calificacion').val()!= '' && $('#pais').val()!= '' && $('#fecha').val()!= '' && $('#imagen').val()!= '' && $('#sinopsis').val()!= ''){
                    for (let i = 0; i < listaPap.length; i++) {
                        var idA = '#'+listaAct[i];
                        var idP = '#'+listaPap[i];
    
                        if ($(idA).val() != '' && $(idP).val() != '' || $(idA).val() == '' && $(idP).val() == '') {
                            var act = $(idA).val() + ' (' + $(idP).val() + ')';
                            listaActor.push(act);
                        }
                    }
                    duracion = $('#duracion').val() + ' minutos';
                    var todoActor = listaActor.toString();
                    sessionStorage.setItem('anioPelMod', $('#anio').val());
                    sessionStorage.setItem('tituloPelMod', $('#titulo').val());
                    sessionStorage.setItem('paisPelMod', $('#pais').val());
                    sessionStorage.setItem('generoPelMod', $('#genero').val());
                    sessionStorage.setItem('duracionPelMod', duracion);
                    sessionStorage.setItem('fechaPelMod', $('#fecha').val());
                    sessionStorage.setItem('calificacionPelMod', $('#calificacion').val());
                    sessionStorage.setItem('sinopsisPelMod', $('#sinopsis').val());
                    sessionStorage.setItem('actoresPelMod', todoActor);
                    sessionStorage.setItem('imagenPelMod', $('#imagen').val());
                }
            } 
            window.location.replace("../vista/modificarPro.php");       
        }
    });
    // function mes (nombre) {
    //     var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    //     var numero = [1,2,3,4,5,6,7,8,9,10,11,12];
    //     for (let i = 0; i < mes.length; i++) {
    //         if (nombre == mes[i]) {
    //             return numero[i];
    //         }
    //     }
    // }
});