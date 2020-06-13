$(document).ready(function(){
    $('.reserva').hide();
    $('.usuario').hide();
    if (sessionStorage.getItem("id")== 0 || sessionStorage.getItem("id")== 1){
        $('.reserva').show();
        $('.usuario').show();
    }
    $( function() {
        $( "#imagen" ).draggable();
    } );
    $.post("../controlador/cartelera.php", function(r){
        var obj = JSON.parse(r);
        var lmostrar = [];
        var valoracion = [];
        var id = [];
        var cont = 0;
        var total = 0 ;
        var media = 0 ;
        var objeto = null;
        var lista = [];
        var limagen = [];
        var lactor = [];
        var lgenero = [];
        var lduracion = [];
        var lanio = [];
        var ltitulo = [];
        var lpais = [];
        var lfecha = [];
        var lcalificacion = [];
        var lsinopsis = [];
        var lotros = [];
        var ltrailler = [];

        var imagen = [];
        var actor = [];
        var genero = [];
        var duracion = [];
        var anio = [];
        var titulo = [];
        var pais = [];
        var fecha = [];
        var calificacion = [];
        var sinopsis = [];
        var mostrar = [];
        var otros = [];
        var trailler = []
        for (let i = 0; i < obj.length; i++) {
            valoracion.push(obj[i].valoracion);
            id.push(obj[i].idPelicula);
            limagen.push(obj[i].imagen);
            lactor.push(obj[i].actores);
            lanio.push(obj[i].anio);
            ltitulo.push(obj[i].titulo);
            lpais.push(obj[i].pais);
            lgenero.push(obj[i].genero);
            lduracion.push(obj[i].duracion);
            lcalificacion.push(obj[i].calificacion);
            lsinopsis.push(obj[i].sinopsis);
            lmostrar.push(obj[i].mostrar);
            lotros.push(obj[i].otros);
            ltrailler.push(obj[i].trailler);
        }
        var lrepe = id.filter(function(item, index, array) {
            return array.indexOf(item) === index;
        })        
        // Numeros de veces que se repite 
        im = null;
        ti = null;
        ac = null;
        an = null;
        pa = null;
        ge = null;
        du = null;
        ca = null;
        si = null;
        mo = null;
        ot = null;
        tr = null;
        for (let i = 0; i < lrepe.length; i++) {
            for (let j = 0; j < id.length; j++) {
                if (id[j]==lrepe[i]) {
                    total = total + parseInt(valoracion[j]);
                    im = limagen[j];
                    ac = lactor[j];
                    an = lanio[j];
                    ti = ltitulo[j];
                    pa = lpais[j];
                    ge = lgenero[j];
                    du = lduracion[j];
                    ca = lcalificacion[j];
                    si = lsinopsis[j];
                    mo = lmostrar[j];
                    ot = lotros[j];
                    tr= ltrailler[j];
                    cont++;
                }
            }
            actor.push(ac);
            anio.push(an);
            pais.push(pa);
            genero.push(ge);
            duracion.push(du);
            calificacion.push(ca);
            sinopsis.push(si);
            titulo.push(ti);
            imagen.push(im);
            mostrar.push(mo);
            otros.push(ot);
            trailler.push(tr);
            media = total / cont;
            media = round(media);
            objeto= {'num_repe': cont , 'media': media};
            lista.push(objeto);
            total =0;
            cont = 0; 
        }
        for (let i = 0; i < lrepe.length; i++) {
            if (mostrar[i] == 1) {
                var article = $("<article>");
                article.attr('class','row mb-5 p-3 princ');
                $('.container-sm').append(article);
                article.attr('id', lrepe[i]);
    
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
                img.attr('src',imagen[i]);
                img.attr('class','img-thumbnail princ-img');
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
                p.text(titulo[i]);
                p.attr('class','display-4 titulo-p');
                /*Columna valoracion */
                var div5 = $("<div>");
                var valoracion = lista[i].media;
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
                    div26.attr('class','col-6 bg-danger rounded-circle valoracion');
                }
                else {
                    if (valoracion >= 5 ){
                        div26.attr('class','col-6 bg-warning rounded-circle valoracion');
                        if (valoracion >= 6 ){
                            div26.attr('class','col-6 bg-success rounded-circle valoracion');
                        }
                    }
                }
                $(div25).append(div26);
                /*Valoracion*/            
                var p7 = $("<p>");
                p7.attr('class','text-center mr-auto ml-auto mt-4');
                $(div26).append(p7);
                p7.text(valoracion);
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
                p1.text(duracion[i]);
                p1.attr('class','border-right-3 border-primary');
                // Columna pais
                var div8 = $("<div>");
                div8.attr('class','col-2');
                $(div6).append(div8);
                // Pais
                var p2 = $("<p>");
                $(div8).append(p2);
                p2.text(pais[i]);
                p2.attr('class','border-right-3 border-primary');
                // Columna genero
                var div9 = $("<div>");
                div9.attr('class','col-2');
                $(div6).append(div9);
                // Genero
                var p3 = $("<p>");
                $(div9).append(p3);
                p3.text(genero[i]);
                p3.attr('class','border-right-3 border-primary');
                // Columna calificacion
                var div10 = $("<div>");
                div10.attr('class','col-2');
                $(div6).append(div10);
                // Calificacion
                var p4 = $("<p>");
                $(div10).append(p4);
                p4.text(calificacion[i]);
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
                p8.text(actor[i]);
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
                p6.text(fecha[i]);
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
                p5.text(sinopsis[i]);
                // Fila botones
                var div15 = $("<div>");
                div15.attr('class','row');
                $(article2).append(div15);
                // Columna de botones
                var div17 = $("<div>");
                div17.attr('class','col');
                $(div15).append(div17);
                // Botones
                var a = $("<a>");
                a.attr('href',trailler[i]);
                $(div17).append(a);

                var input = $("<input>");
                input.attr('type','button');
                input.attr('class','btn btn-info float-right');
                input.attr('value','Trailer');
                $(a).append(input);

                if (otros[i] != null){
                    var input1 = $("<input>");
                    input1.attr('type','button');
                    input1.attr('class','btn btn-info float-left');
                    input1.attr('value','Fotos');
                    input1.attr('id',lrepe[i]);
                    $(div17).append(input1);
                }
                var input2 = $("<input>");
                input2.attr('type','button');
                input2.attr('class','btn btn-info ml-5');
                input2.attr('value','Reservar entrada');
                input2.attr('id',lrepe[i]);
                $(div17).append(input2);
            }
        } 
        $(':button').click(function(r){
            var evento = r.currentTarget;
            if ($(evento).val()=='Reservar entrada') {
                sessionStorage.setItem("idPelicula", $(evento).attr('id'));
                window.location.replace("../vista/reserva.php");
            }
            else {
                if ($(evento).val()=='Fotos') {
                    sessionStorage.setItem("idFoto", $(evento).attr('id'));
                    window.location.replace("../vista/fotos.php");
                }
            }
        });
    });
    
    function round(num, decimales = 2) {
        var signo = (num >= 0 ? 1 : -1);
        num = num * signo;
        if (decimales === 0) //con 0 decimales
            return signo * Math.round(num);
        // round(x * 10 ^ decimales)
        num = num.toString().split('e');
        num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
        // x * 10 ^ (-decimales)
        num = num.toString().split('e');
        return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
    }
});