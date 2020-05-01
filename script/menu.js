$(document).ready(function(){
    $.post("../controlador/menu.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            var a = $('<a>');
            $('.tarifa').append(a);
            var href ='tarifa#'+ obj[i].idTipo;
            a.attr('href', href);
            a.attr('class','dropdown-item');
            a.text(obj[i].nombre)
        }
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
        $(a1).attr('href','pelicula.php');
        $(a2).attr('href','tarifaAdmin.php');
    }
});