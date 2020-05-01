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
        for (let i = 0; i < obj.length; i++) {+
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
                $('span#titulo').attr('class','text-danger');
                $('span#titulo').text('Este campo es obligatorio');
                $('input#titulo').css('border-style','solid');
                $('input#titulo').css('border-color','red');
            }
            else {
                for (let i = 0; i < titulo.length; i++) {
                    
                    if(titulo[i] != $('#titulo').val()){
                        $('span#titulo').text('');
                        $('#titulo').css('border-style','solid');
                        $('input#titulo').css('border-color','green');
                    }
                    else{
                        t = titulo[i];
                    }
                }
                if(t == $('#titulo').val()){
                    $('span#titulo').attr('class','text-danger');
                    $('span#titulo').text('Este nombre ya existe');
                    $('input#titulo').css('border-style','solid');
                    $('input#titulo').css('border-color','red');
                }
            }
        });
    });
    function validarAño(n){
        patron = /\d{4}/;
        if (patron.test(n)){
            $('span#anio').text('');
        } 
        else{
            $('span#anio').attr('class','text-danger');
            $('input#anio').css('border-style','solid');
            $('input#anio').css('border-color','red');
            $('span#anio').text("El año debe de ser un número con 4 dígitos.");
        }
    }
    
});