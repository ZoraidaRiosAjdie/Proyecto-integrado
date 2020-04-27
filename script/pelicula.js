$(document).ready(function(){
    $.post("../controlador/pelicula.php", function(r){
        var obj = JSON.parse(r);
        for (let index = 0; index < obj.length; index++) {
            // obj[index].titulo;
            var article = $("<article>");
            article.attr('class','row mb-5 p-3 princ');
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
            // Fila proyeccion 
            var div18 = $("<div>");
            div18.attr('class','row');
            $(article2).append(div18);
            // Columna proyeccion
            var div19 = $("<div>");
            div19.attr('class','col');
            $(div18).append(div19);
            // Separacion proyeccion 
            var hr1 =$('<hr>');
            $(div19).append(hr1);
            $(hr1).attr('class','separacion');
            // Titulo proyeccion 
            var b3 = $("<b>");
            $(div19).append(b3);
            b3.attr('class','display-5')
            b3.text('Proyeccion');
            // Lista de proyeccion
            var ul = $('<ul>');
            $(div19).append(ul);
            // Numero de sala
            var li1 = $("<li>");
            $(ul).append(li1);
            li1.text('Numero de sala: '+ obj[index].idSala);
            // Fecha de proyeccion
            var li2 = $("<li>");
            $(ul).append(li2);
            li2.text('Fecha de proyección: '+ obj[index].fecha_pro);
            // Numero de sala
            var li3 = $("<li>");
            $(ul).append(li3);
            li3.text('Hora de proyección: '+ obj[index].hora);
        }
    });

});