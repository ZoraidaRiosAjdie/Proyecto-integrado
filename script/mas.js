$(document).ready(function(){
    $.post("../controlador/cartelera.php", function(r){
        var obj = JSON.parse(r);
        for (let index = 0; index < obj.length; index++) {
            // obj[index].titulo;
            var article = $("<article>");
            article.attr('class','row mb-5 p-3 princ');
            article.attr('id', index);
            $('.container-sm').append(article);

            var article2 = $("<article>");
            article2.attr('class','col');
            $(article).append(article2);
            /*Fila imagen */
            var div = $("<div>");
            div.attr('class','row');
            $(article2).append(div);
            /*Columna imagen */
            var div1 = $("<div>");
            div1.attr('class','col');
            $(div).append(div1);
            /*Imagen */
            var img = $("<img>");
            $(div1).append(img);
            img.attr('src',obj[index].imagen);
            img.attr('class','img-thumbnail');
            /*Columna titulo*/
            var div2 = $("<div>");
            div2.attr('class','col-9');
            $(div).append(div2);
            /*Fila titulo y valoracion*/
            var div3 = $("<div>");
            div3.attr('class','row');
            $(div2).append(div3);
            /*Columna titulo */
            var div4 = $("<div>");
            div4.attr('class','col');
            $(div3).append(div4);
            /*Titulo */
            var p = $("<p>");
            $(div4).append(p);
            p.text(obj[index].titulo);
            p.attr('class','display-4');
            /*Columna valoracion */
            var div5 = $("<div>");
            var valoracion = obj[index].valoracion;
            div5.attr('class','col-2');
            $(div3).append(div5);
            // Segunda fila valoracion 
            var div25 = $("<div>");
            div25.attr('class','row');
            $(div5).append(div25);
            // Segunda columna valoracion 
            var div26 = $("<div>");
            // div26.attr('class','col-6 bg-info rounded-circle');
            if (valoracion < 5 ){
                div26.attr('class','col-6 bg-danger rounded-circle');
            }
            else {
                if (valoracion >= 5 ){
                    div26.attr('class','col-6 bg-warning rounded-circle');
                    if (valoracion >= 6 ){
                        div26.attr('class','col-6 bg-success rounded-circle');
                    }
                }
            }
            $(div25).append(div26);
            /*Valoracion*/            var p7 = $("<p>");
            p7.attr('class','text-center mr-auto ml-auto mt-4');
            $(div26).append(p7);
            p7.text(obj[index].valoracion);
            /*Fila de duracion... */
            var div6 = $("<div>");
            div6.attr('class','row');
            $(div2).append(div6);
            /*Columna de duracion */
            var div7 = $("<div>");
            div7.attr('class','col-2');
            $(div6).append(div7);
            /*Duracion */
            var p1 = $("<p>");
            $(div7).append(p1);
            p1.text(obj[index].duracion);
            p1.attr('class','border-right-3 border-primary');
            // Columna pais
            var div8 = $("<div>");
            div8.attr('class','col-2');
            $(div6).append(div8);
            // Pais
            var p2 = $("<p>");
            $(div8).append(p2);
            p2.text(obj[index].pais);
            p2.attr('class','border-right-3 border-primary');
            // Columna genero
            var div9 = $("<div>");
            div9.attr('class','col-2');
            $(div6).append(div9);
            // Genero
            var p3 = $("<p>");
            $(div9).append(p3);
            p3.text(obj[index].genero);
            p3.attr('class','border-right-3 border-primary');
            // Columna calificacion
            var div10 = $("<div>");
            div10.attr('class','col-2');
            $(div6).append(div10);
            // Calificacion
            var p4 = $("<p>");
            $(div10).append(p4);
            p4.text(obj[index].calificacion);
            p4.attr('class','border-right-3 border-primary');
            /*Fila actores */
            var div11 = $("<div>");
            div11.attr('class','row');
            $(div2).append(div11);
            /*Columnas actores */
            var div12 = $("<div>");
            div12.attr('class','col');
            $(div11).append(div12);
            // Titulo actores
            var b = $("<b>");
            $(div12).append(b);
            b.attr('class','display-5')
            b.text('Actores');
            var p8 = $("<p>");
            $(div12).append(p8);
            p8.text(obj[index].actores);
            // Fila fecha y botones
            var div15 = $("<div>");
            div15.attr('class','row');
            $(div2).append(div15);
            // Columna fecha
            var div16 = $("<div>");
            div16.attr('class','col');
            $(div15).append(div16);
            // fecha
            var p6 = $("<p>");
            $(div16).append(p6);
            p6.text(obj[index].fecha);
            // Titulo fecha 
            var b2= $('<b>');
            $(p6).prepend(b2);
            b2.text('Fecha de estreno: ');
            // Fila sinopsis
            var div13 = $("<div>");
            div13.attr('class','row');
            $(article2).append(div13);
            // Columna sinopsis
            var div14 = $("<div>");
            div14.attr('class','col');
            $(div13).append(div14);
            // Separacion sinopsis 
            var hr =$('<hr>');
            $(div14).append(hr);
            $(hr).attr('class','separacion');
            // Titulo sinopsis 
            var b1 = $("<b>");
            $(div14).append(b1);
            b1.attr('class','display-5')
            b1.text('Sinopsis');
            // Sinopsis
            var p5 = $("<p>");
            $(div14).append(p5);
            p5.text(obj[index].sinopsis);
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
    }

});