$(document).ready(function(){
    $.post("../controlador/valoracion.php", function(r){
        var obj = JSON.parse(r);
        var idPelicula = null;
        // Esto nos resvira si hemos seleccionado pelicula en la valoración
        $('#pelicula').click(function(){
            $('select').remove();
           var select = $('<select>');
           $('.select').prepend(select);
           select.attr('class', 'form-control');
           for (let i = 0; i < obj.length; i++) {
                var option = $('<option>');
                $('select').append(option);
                option.attr('value', obj[i].titulo);
                option.text(obj[i].titulo);
                idPelicula= obj[i].idPelicula;
           }
        //    Pondra el titulo de la pelicula seleccionada
           $('select').click(function(){
                $('.titulo').html('<strong>Titulo: </strong>'+$('select').val());
           });
        //  Si es un usuario el que hace la valoración lo llevará a la bd, si no 
        // ha entrado como usuario no lo hará
           $('.btn').click(function(){
               if (sessionStorage.getItem("idUsuario") != null){
                    var listaObj = {'idUsuario':sessionStorage.getItem("idUsuario"),'idPelicula': idPelicula, 'valoracion': $('.estr').val()};
                    var objeto = {'valoracion':listaObj}
                    $.ajax({
                        url: "../controlador/insertValoracion.php",
                        type: "POST",
                        data: objeto,
                        success: function(r){
                            alert(r);
                        }
                    });
               }
                else{
                    alert('Tienes que registrarte para poder valorar');
                }
            });
        });
        
        $('#pagina').click(function(){
            $('select').remove();
        });
    });
});