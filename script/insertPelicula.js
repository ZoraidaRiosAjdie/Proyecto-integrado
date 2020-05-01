$(document).ready(function(){
    $.post("../controlador/pelicula.php", function(r){
        var obj = JSON.parse(r);
        var id =[];
        var anio = [];
        var titulo = [];
        var pais = [];
        var genero = [];
        var duracion = [];
        var fecha = [];
        var calificacion = [];
        var sinopsis = [];
        var actores = [];
        var imagen = [];
        var idSala = [];
        var fecha_pro = [];
        var hora = [];
        for (let i = 0; i < obj.length; i++) {

            id.push(obj[i].idPelicula);
            anio.push(obj[i].anio);
            titulo.push(obj[i].titulo);
            pais.push(obj[i].pais);
            genero.push(obj[i].genero);
            duracion.push(obj[i].duracion);
            fecha.push(obj[i].fecha);
            calificacion.push(obj[i].calificacion);
            sinopsis.push(obj[i].sinopsis);
            actores.push(obj[i].actores);
            imagen.push(obj[i].imagen);
            idSala.push(obj[i].idSala);
            fecha_pro.push(obj[i].fecha_pro);
            hora.push(obj[i].hora);
        }
        $('input#titulo').blur(function(){
            var t = null;
            jsonNombre = null;
            if ($('input#titulo').val()== ""){
                jsonNombre = null;
                $('small#titulo').attr('class','text-danger');
                $('small#titulo').text('Este campo es obligatorio');
                $('input#titulo').css('border-style','solid');
                $('input#titulo').css('border-color','red');
            }
            else {
                for (let i = 0; i < titulo.length; i++) {
                    
                    if(titulo[i] != $('input#titulo').val()){
                        $('small#titulo').text('');
                        $('input#titulo').css('border-style','solid');
                        $('input#titulo').css('border-color','green');
                    }
                    else{
                        t = titulo[i];
                    }
                }
                if(t == $('input#titulo').val()){
                    $('small#titulo').attr('class','text-danger');
                    $('small#titulo').text('Esta pelicula ya existe');
                    $('input#titulo').css('border-style','solid');
                    $('input#titulo').css('border-color','red');
                }
            }
        });
        $('input#anio').blur(function(){
            var t = null;
            jsonNombre = null;
            if ($('input#anio').val()== ""){
                jsonNombre = null;
                $('small#anio').attr('class','text-danger');
                $('small#anio').text('Este campo es obligatorio');
                $('input#anio').css('border-style','solid');
                $('input#anio').css('border-color','red');
            }
            else {
                $('small#anio').text('');
                $('input#anio').css('border-style','solid');
                $('input#anio').css('border-color','green');
                validarAño($('input#anio').val());
            }
        });
        $('input#pais').blur(function(){
            var t = null;
            jsonNombre = null;
            if ($('input#pais').val()== ""){
                jsonNombre = null;
                $('small#pais').attr('class','text-danger');
                $('small#pais').text('Este campo es obligatorio');
                $('input#pais').css('border-style','solid');
                $('input#pais').css('border-color','red');
            }
            else {
                $('small#pais').text('');
                $('input#pais').css('border-style','solid');
                $('input#pais').css('border-color','green');   
            }
        });
        $('input#genero').blur(function(){
            if ($('input#genero').val()== ""){
                $('small#genero').attr('class','text-danger');
                $('small#genero').text('Este campo es obligatorio');
                $('input#genero').css('border-style','solid');
                $('input#genero').css('border-color','red');
            }
            else {
                $('small#genero').text('');
                $('input#genero').css('border-style','solid');
                $('input#genero').css('border-color','green');   
            }
        });
        $('input#duracion').blur(function(){
            var minuto = null;
            if ($('input#duracion').val()== ""){
                jsonNombre = null;
                $('small#duracion').attr('class','text-danger');
                $('small#duracion').text('Este campo es obligatorio');
                $('input#duracion').css('border-style','solid');
                $('input#duracion').css('border-color','red');
            }
            else {
                var min = $('input#duracion').val().split(':');
                minuto = (min[0]/60)+min[1];
                $('small#duracion').text('');
                $('input#duracion').css('border-style','solid');
                $('input#duracion').css('border-color','green');   
            }
        });
        $('input#fecha').blur(function(){
            var fecha = null;
            if ($('input#fecha').val()== ""){
                jsonNombre = null;
                $('small#fecha').attr('class','text-danger');
                $('small#fecha').text('Este campo es obligatorio');
                $('input#fecha').css('border-style','solid');
                $('input#fecha').css('border-color','red');
            }
            else {
                var parte = $('input#fecha').val().split('/');
                var mes = covertirMes(parte[1]);
                fecha = parte[0] + 'de mes de' + parte[2];
                $('small#fecha').text('');
                $('input#fecha').css('border-style','solid');
                $('input#fecha').css('border-color','green');   
            }
        });
        $('input#sinopsis').blur(function(){
            if ($('input#sinopsis').val()== ""){
                $('small#sinopsis').attr('class','text-danger');
                $('small#sinopsis').text('Este campo es obligatorio');
                $('input#sinopsis').css('border-style','solid');
                $('input#sinopsis').css('border-color','red');
            }
            else {
                $('small#sinopsis').text('');
                $('input#sinopsis').css('border-style','solid');
                $('input#sinopsis').css('border-color','green');   
            }
        });
        var cont = 2;
        $('.añadir_actor').click(function(){
            // Crear fila de actor
            var div1 = $('<div>');
            // var a = 'row actor' + cont;
            $(".actores").after(div1);
            div1.attr('class', 'row actor');
            // Crear columna actor
            var div2 = $('<div>');
            $(div1).append(div2);
            div2.attr('class','col');
            // titulo actor
            var label1 = $('<label>');
            $(div2).append(label1);
            label1.text('Actores');
            // input actor
            var input1 = $('<input>');
            $(div2).append(input1);
            input1.text('Actores');
            input1.attr('type','text');
            var b = 'ac'+ cont
            input1.attr('class','form-control');
            input1.attr('id', b);

            // Crear columna papel
            var div3 = $('<div>');
            $(div1).append(div3);
            div3.attr('class','col');
            // titulo papel
            var label2 = $('<label>');
            $(div3).append(label2);
            label2.text('Papel que interpreta');
            // input papel
            var c = 'p'+cont;
            var input2 = $('<input>');
            $(div3).append(input2);
            input2.text('Actores');
            input2.attr('type','text');
            input2.attr('class','form-control');
            input2.attr('id', c);
            cont++;
        });
    });
    
    function validarAño(n){
        patron = /\d{4}/;
        if (patron.test(n) && n >= 1890){
            $('small#anio').text('');
        } 
        else{
            $('small#anio').attr('class','text-danger');
            $('input#anio').css('border-style','solid');
            $('input#anio').css('border-color','red');
            $('small#anio').text("El año debe de ser un número con 4 dígitos.");
        }
    }
    function covertirMes(n){
        mes = ["enero", "febrero", "marzo", "abril", ".ayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        num_mes = [01,02,03,04,05,06,07,08,09,10,11,12];
        num = 0;
        for (let i = 0; i < num_mes.length; i++) {
            if (num_mes[i] == n){
                num = n;
            }
        }
        for (let i = 0; i < mes.length; i++) {
            if (mes[i]==num){
                return mes[i];
            }            
        }
    }
});