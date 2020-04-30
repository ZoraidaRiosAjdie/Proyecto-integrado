$(document).ready(function(){
    $.post("../controlador/valoracion.php", function(r){
        var obj = JSON.parse(r);
        var idPelicula = null;
        $('#pelicula').click(function(){
            $('select').remove();
           var select =$('<select>');
           $('.select').prepend(select);
           select.attr('class', 'form-control');
           for (let i = 0; i < obj.length; i++) {
                var option = $('<option>');
                $('select').append(option);
                option.attr('value', obj[i].titulo);
                option.text(obj[i].titulo);
                idPelicula= obj[i].idPelicula;
           }
           $('select').click(function(){
                $('.titulo').html('<strong>Titulo: </strong>'+$('select').val());
           });
           $('.btn').click(function(){
               if (sessionStorage.getItem("idUsuario"!=null)){
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
    if (sessionStorage.getItem("id")==1){
        var li = $('<li>');
        $('.lista').append(li);
        var a =$('<a>');
        a.attr('class','nav-link dropdown-toggle');
        a.attr('data-toggle','dropdown');
        var texto = "Administrador";
        $(li).append(a);
        $(li).attr('class','nav-item dropdown')
        $(a).text(texto);
        var div = $('<div>');
        $(li).append(div);
        var a1 = $('<a>');
        var a2 = $('<a>');
        var texto1 = "Pelicula";
        var texto2 = "Tarifa";
        $(a1).text(texto1);
        $(a2).text(texto2);
        $(div).append(a1);
        $(div).append(a2);
        $(a1).attr('class','dropdown-item');
        $(a2).attr('class','dropdown-item');
        $(div).attr('class','dropdown-menu');
    }
});