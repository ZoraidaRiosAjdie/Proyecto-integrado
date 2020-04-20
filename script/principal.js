$(document).ready(function(){
    $.post("../controlador/principal.php", function(r){
        var obj = JSON.parse(r);
        for (let index = 0; index < obj.length; index++) {
            var article = $("<article>");
            article.attr('class','row mb-5');
            $('.container-sm').append(article);

            var article2 = $("<article>");
            article2.attr('class','col');
            $(article).append(article2);

            var div = $("<div>");
            div.attr('class','row');
            $(article2).append(div);

            var div1 = $("<div>");
            div1.attr('class','col-3');
            $(div).append(div1);

            var img = $("<img>");
            $(div1).append(img);
            img.attr('src',obj[index].imagen);
            img.attr('class','img-thumbnail');

            var div2 = $("<div>");
            div2.attr('class','col-7');
            $(div).append(div2);

            var p = $("<p>");
            $(div2).append(p);
            p.text(obj[index].titulo);
            p.attr('class','display-3');

            var div3 = $("<div>");
            div3.attr('class','row');
            $(div2).append(div3);

            var div4 = $("<div>");
            div4.attr('class','col-2');
            $(div3).append(div4);

            var p1 = $("<p>");
            $(div4).append(p1);
            p1.text(obj[index].duracion);
            p1.attr('class','border-right-3 border-primary');

            var div5 = $("<div>");
            div5.attr('class','col-2');
            $(div3).append(div5);

            var p2 = $("<p>");
            $(div5).append(p2);
            p2.text(obj[index].pais);
            p2.attr('class','border-right-3 border-primary');

            var div6 = $("<div>");
            div6.attr('class','col-2');
            $(div3).append(div6);

            var p3 = $("<p>");
            $(div6).append(p3);
            p3.text(obj[index].genero);
            p3.attr('class','border-right-3 border-primary');

            var div7 = $("<div>");
            div7.attr('class','col-2');
            $(div3).append(div7);

            var p4 = $("<p>");
            $(div7).append(p4);
            p4.text(obj[index].calificacion);
            p4.attr('class','border-right-3 border-primary');

            var div8 = $("<div>");
            div8.attr('class','row');
            $(div2).append(div8);

            var div9 = $("<div>");
            div9.attr('class','col');
            $(div8).append(div9);

            var p5 = $("<p>");
            $(div9).append(p5);
            p5.text(obj[index].sinopsis);

            var div10 = $("<div>");
            div10.attr('class','row');
            $(div2).append(div10);

            var div11 = $("<div>");
            div11.attr('class','col');
            $(div10).append(div11);

            var p6 = $("<p>");
            $(div11).append(p6);
            p6.text(obj[index].fecha);

            var div12 = $("<div>");
            div12.attr('class','col');
            $(div).append(div12);

            var div13 = $("<div>");
            div13.attr('class','row');
            $(div12).append(div13);

            var div14 = $("<div>");
            div14.attr('class','col bg-primary');
            $(div13).append(div14);
            
            var p7 = $("<p>");
            p7.attr('class','text-center rounded-circle border border-secondary pb-5');
            $(div14).append(p7);
            p7.text(obj[index].valoracion);

            var div15 = $("<div>");
            div15.attr('class','row');
            $(div12).append(div15);

            var div16 = $("<div>");
            div16.attr('class','col');
            $(div15).append(div16);

            var input = $("<input>");
            input.attr('type','button');
            input.attr('class','btn btn-primary float-left');
            $(div15).append(input);

            var input1 = $("<input>");
            input1.attr('type','button');
            input1.attr('class','btn btn-primary float-right');
            $(div15).append(input1);
        }
    });
});