$(document).ready(function(){
    if (sessionStorage.getItem("id") !=1){ 
        window.location.replace("../vista/principal.php");
    }

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
        //  Pongo los datos en los campos corresponfientes
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].idPelicula == sessionStorage.getItem("idPeliMod")) {
                for (let j = 0; j < listaIdSala.length; j++) {
                    console.log(obj)
                    if (listaIdSala[j] == obj[i].idSala) {
                        var col = $('<div>');
                        $('#sala').append(col);
                        col.attr('class', 'col-9 ml-auto mr-auto sala mb-2');

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
                        text4.attr('id', obj[i].idProyeccion);
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
                        // Por si hay alguna reserva, ya que si la hay no se puede eliminar
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
                        else{
                            if ($(e).val() == 'Continuar') {
                                // Realiza la modificacionde la pelicula
                                proyeccion = {'resultado' : {'idPelicula':sessionStorage.getItem('idPeliMod'),'anio': sessionStorage.getItem('anioPelMod'), 'titulo':sessionStorage.getItem('tituloPelMod'), 'pais':sessionStorage.getItem('paisPelMod'), 'genero':sessionStorage.getItem('generoPelMod'), 'duracion':sessionStorage.getItem('duracionPelMod'), 'fecha_estreno':sessionStorage.getItem('fechaPelMod'), 'calificacion':sessionStorage.getItem('calificacionPelMod'), 'sinopsis':sessionStorage.getItem('sinopsisPelMod'), 'actores':sessionStorage.getItem('actoresPelMod'),'imagen':sessionStorage.getItem('imagenPelMod'), 'mostrar':0,'otros':sessionStorage.getItem('otrosPelMod'),'trailler':sessionStorage.getItem('traillerPelMod')}};
                                $.ajax({
                                    url: "../controlador/modificarPeli.php",
                                    type: "POST",
                                    data: proyeccion
                                }); 
                                window.location.replace("../vista/pelicula.php");
                            }
                        }
                    }
                }
            }
        });
    });
});