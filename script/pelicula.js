$(document).ready(function(){
    todo = null;
    jsonId = [];
    $.post("../controlador/pelicula.php", function(r){
        var sala = [];
        var obj = JSON.parse(r);
        var lid =[];
        var lanio = [];
        var ltitulo = [];
        var lpais = [];
        var lgenero = [];
        var lduracion = [];
        var lfecha_estreno = [];
        var lcalificacion = [];
        var lsinopsis = [];
        var lactores = [];
        var limagen = [];
        var lidSala = [];
        var lfecha = [];
        var lhora = [];
        var lmostrar =[];
        var lidPro =[];

        var id =[];
        var anio = [];
        var titulo = [];
        var pais = [];
        var genero = [];
        var duracion = [];
        var fecha_estreno = [];
        var calificacion = [];
        var sinopsis = [];
        var actores = [];
        var imagen = [];
        var idSala = [];
        var fecha = [];
        var hora = [];
        var mostrar=[];
        for (let index = 0; index < obj.length; index++) {
            lid.push(obj[index].idPelicula);
            lanio.push(obj[index].anio);
            ltitulo.push(obj[index].titulo);
            lpais.push(obj[index].pais);
            lgenero.push(obj[index].genero);
            lduracion.push(obj[index].duracion);
            lfecha_estreno.push(obj[index].fecha_estreno);
            lcalificacion.push(obj[index].calificacion);
            lsinopsis.push(obj[index].sinopsis);
            lactores.push(obj[index].actores);
            limagen.push(obj[index].imagen);
            lidSala.push(obj[index].idSala);
            lfecha.push(obj[index].fecha);
            lhora.push(obj[index].hora);
            lmostrar.push(obj[index].mostrar);
            lidPro.push(obj[index].idProyeccion);
        }
        console.log(lidPro);
        var lrepe = lid.filter(function(item, index, array) {
            return array.indexOf(item) === index;
        })       
        im = null;
        ti = null;
        ac = null;
        an = null;
        pa = null;
        ge = null;
        du = null;
        ca = null;
        si = null;
        idS = null;
        f = null;
        fE = null;
        h = null;
        m = null;

        
        
        for (let i = 0; i < lid.length; i++) {
            for (let j = 0; j < lrepe.length; j++) {
                if (lid[i]==lrepe[j]) {
                    todo = {'idPelicula': lrepe[j],'idProyeccion': lidPro[i], 'idSala' : lidSala[i], 'fecha' : lfecha[i], 'hora': lhora[i]}
                    // console.log(todo);
                }
                
            }
            jsonId.push(todo);
        }
        for (let i = 0; i < lrepe.length; i++) {
            for (let j = 0; j < lid.length; j++) {
                if (lid[j]==lrepe[i]) {
                    im = limagen[j];
                    ti = ltitulo[j];
                    ac = lactores[j];
                    an = lanio[j];
                    pa = lpais[j];
                    ge = lgenero[j];
                    du = lduracion[j];
                    ca = lcalificacion[j];
                    si = lsinopsis[j];
                    idS = lidSala[j];
                    f = lfecha[j];
                    fE = lfecha_estreno[j];
                    h = lhora[j];
                    m = lmostrar[j];
                }
            }
            
            actores.push(ac);
            anio.push(an);
            pais.push(pa);
            genero.push(ge);
            duracion.push(du);
            calificacion.push(ca);
            sinopsis.push(si);
            titulo.push(ti);
            imagen.push(im);
            idSala.push(idS);
            fecha.push(f);
            fecha_estreno.push(fE);
            hora.push(h);
            mostrar.push(m);
        }
        
        console.log(todo);
        for (let i = 0; i < lrepe.length; i++) {
            
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
            img.attr('class','img-thumbnail');
            img.attr('id', lrepe[i]);
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
            p.attr('class','display-4');
            p.attr('id', lrepe[i]);
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
            p1.attr('id', lrepe[i]);
            p1.attr('class','border-right-3 border-primary');
            // Columna pais
            var div8 = $("<div>");
            div8.attr('class','col-2');
            $(div6).append(div8);
            // Pais
            var p2 = $("<p>");
            $(div8).append(p2);
            p2.text(pais[i]);
            p2.attr('id', lrepe[i]);
            p2.attr('class','border-right-3 border-primary');
            // Columna genero
            var div9 = $("<div>");
            div9.attr('class','col-2');
            $(div6).append(div9);
            // Genero
            var p3 = $("<p>");
            $(div9).append(p3);
            p3.text(genero[i]);
            p3.attr('id', lrepe[i]);
            p3.attr('class','border-right-3 border-primary');
            // Columna calificacion
            var div10 = $("<div>");
            div10.attr('class','col-2');
            $(div6).append(div10);
            // Calificacion
            var p4 = $("<p>");
            $(div10).append(p4);
            p4.text(calificacion[i]);
            p4.attr('id', lrepe[i]);
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
            p8.text(actores[i]);
            p8.attr('id', lrepe[i]);
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
            p6.text(fecha_estreno[i]);
            p6.attr('id', lrepe[i]);
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
            p5.attr('id', lrepe[i]);
            p5.text(sinopsis[i]);
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
            for (let j = 0; j < jsonId.length; j++) {
                if (lrepe[i] == jsonId[j].idPelicula) {
                    // Lista de proyeccion
                    var ul = $('<ul>');
                    $(div19).append(ul);
                    // Numero de sala
                    var li1 = $("<li>");
                    $(ul).append(li1);
                    li1.text('Numero de sala: '+ jsonId[j].idSala);
                    li1.attr('class', jsonId[j].idPelicula);
                    sala.push(jsonId[j].idSala);
                    // lista interior hora y fecha 
                    var ul1 = $("<ul>");
                    $(li1).append(ul1);
                    // Fecha de proyeccion
                    var li2 = $("<li>");
                    $(ul1).append(li2);
                    li2.text('Fecha de proyección: '+ jsonId[j].fecha);
                    // Numero de sala
                    var li3 = $("<li>");
                    $(ul1).append(li3);
                    li3.text('Hora de proyección: '+ jsonId[j].hora);
                }
                
            }
            // formulario 
            var form1 = $('<form>');
            $(article2).append(form1);
            form1.attr('method', 'post');
            // Fila Botones 
            var div20 = $("<div>");
            div20.attr('class','row pb-4 pt-5');
            $(form1).append(div20);
            // Columna botenes1
            var div21 = $("<div>");
            div21.attr('class','col');
            $(div20).append(div21);
            
            // Botones1-1
            var button = $('<input>');
            $(div21).append(button);
            button.attr('value','Modificar');
            button.attr('type','button');
            button.attr('class','btn btn-primary float-left modificar');
            button.attr('id', lrepe[i]);
            // Botones 1-2
            var button1 = $('<input>');
            $(div21).append(button1);
            button1.attr('value','Eliminar');
            button1.attr('type','button');
            button1.attr('class','btn btn-primary float-right eliminar');
            button1.attr('id', lrepe[i]);   
            // Columna boton2
            var div22 = $("<div>");
            div22.attr('class','col-8');
            $(div20).append(div22);
            // Boton 2
            var button2 = $('<input>');
            $(div22).append(button2);
            if(mostrar[i] == 1){
                
                button2.attr('value','Ocultar Cartelera');
            }
            else{
                button2.attr('value','Mostrar Cartelera');
            }
            button2.attr('type','button');
            button2.attr('class','btn btn-primary float-right mostrar');
            button2.attr('id', lrepe[i]);
        };
        $('.mostrar').click(function(event){
            var evento = event.currentTarget;
            for (let i = 0; i < lrepe.length; i++) {
                if ($(evento).attr("id")==lrepe[i]){
                    var objeto= null;
                    var lista = null;
                    if ($(evento).val()== 'Mostrar Cartelera'){
                        var objeto = {'idPelicula': lrepe[i],'anio': anio[i],'titulo': titulo[i],'pais': pais[i],'genero': genero[i],'duracion': duracion[i],'fecha': fecha_estreno[i],'calificacion': calificacion[i],'sinopsis': sinopsis[i],'actores': actores[i],'imagen': imagen[i],'mostrar': 1}
                        $(evento).attr('value','Ocultar Cartelera');
                    }
                    else{
                        var objeto = {'idPelicula': lrepe[i],'anio': anio[i],'titulo': titulo[i],'pais': pais[i],'genero': genero[i],'duracion': duracion[i],'fecha': fecha_estreno[i],'calificacion': calificacion[i],'sinopsis': sinopsis[i],'actores': actores[i],'imagen': imagen[i],'mostrar': 0}
                        $(evento).attr('value','Mostrar Cartelera');
                    }
                    lista = {'resultado': objeto};
                    $.ajax({
                        url: "../controlador/mostrar.php",
                        type: "POST",
                        data: lista
                    });
                }
            }
        });
        $('.insertar').click(function(){
            window.location.replace("../vista/insertPelicula.php");
        });
        $('.modificar').click(function(event){
            var e = event.currentTarget;
            var a = [];
            // alert (a);
            sessionStorage.setItem("idPeliMod", $(e).attr('id'));
            for (let i = 0; i < jsonId.length; i++) {
                if ($(e).attr('id') == jsonId[i].idPelicula) {
                    a.push(jsonId[i].idSala)
                }
            }
            sessionStorage.setItem("idSalaMod", a);
            window.location.replace("../vista/modificarPeli.php");            
        });
        $('.eliminar').click(function(event){
            var e = event.currentTarget;
            for (let i = 0; i < jsonId.length; i++) {
                if ($(e).attr('id') == jsonId[i].idPelicula) {
                    borrarPro = {'resultado' : {'idProyeccion': jsonId[i].idProyeccion}};
                    $.ajax({
                        url: "../controlador/borrarPro.php",
                        type: "POST",
                        data: borrarPro
                    });
                    borrarPeli = {'resultado' : {'idPelicula': $(e).attr('id')}};
                    $.ajax({
                        url: "../controlador/borrarPeli.php",
                        type: "POST",
                        data: borrarPeli
                    });
                }
            }
            alert ('Regarge la pagina');
            window.location.replace("../vista/pelicula.php");
        });
    });
});