$(document).ready(function(){
    $.post("../controlador/cartelera.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            var option = $('<option>');
            $('.pelicula').append(option);
            option.attr('value',obj[i].titulo);
            option.text(obj[i].titulo);
            
        }
    });
    $('.sala-fecha').hide();
    $('.num_entrada').hide();
    $('.total').hide();
    $('.enviar').hide();
    $('.cont').hide();
    $('.cont1').hide();
    var proyeccion = null;
    $.post("../controlador/login.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (sessionStorage.getItem("idUsuario") == obj[i].idUsuario) {
                var email = 'mailto:'+ obj[i].email;
                $('form').attr('action', email);
            }
        } 
    });
    $('.aceptar').click(function(){
        $.post("../controlador/proyeccion.php", function(r){
            var obj = JSON.parse(r);
            for (let i = 0; i < obj.length; i++) {
                    $('.sala-fecha').show();
                    if ($('.pelicula').val() == obj[i].titulo) {
                        // Para sala
                        var row = $('<div>');
                        $('.sala').append(row);
                        row.attr('class','row s');
    
                        var col = $('<div>');
                        $('.sala').append(col);
                        col.attr('class','col m-uto s');
    
                        var radio = $('<input>');
                        col.append(radio);
                        radio.attr('type','radio');
                        radio.attr('name','sala');
                        radio.attr('class','form-check-input s');
                        radio.attr('id','sala');
                        radio.attr('value', obj[i].idSala);
    
                        var l = $('<lavel>');
                        col.append(l);
                        l.text(obj[i].idSala);
    
                        // Para fecha y hora
                        var fecha = obj[i].fecha +'/'+obj[i].hora
                        var row1 = $('<div>');
                        $('.fecha').append(row1);
                        row1.attr('class','row f');
    
                        var col1 = $('<div>');
                        $('.fecha').append(col1);
                        col1.attr('class','col m-uto f');
    
                        var radio1 = $('<input>');
                        col1.append(radio1);
                        radio1.attr('type','radio');
                        radio1.attr('name','fecha');
                        radio1.attr('class','form-check-input f');
                        radio1.attr('id','fecha')
                        radio1.attr('value', fecha);
    
                        var l1 = $('<lavel>');
                        col1.append(l1);
                        l1.text('Fecha: ' + obj[i].fecha + ' Hora: ' + obj[i].hora);
                        
                    }
            }
            $('.aceptar').hide();
            $('.cont').show();
        });
    });
    $('.pelicula').focus(function(){
        $('.aceptar').show();
        $('.s').remove();
        $('.f').remove();
        $('.sala-fecha').hide();
        $('.num_entrada').hide();
        $('.cont').hide();
        $('.cont1').hide();
        $('.total').hide();
    });
    $('.cont').click(function(){
        if($("#sala").is(':checked') && $("#fecha").is(':checked')){
            $('.num_entrada').show();
            $('.cont').hide();
            $('.men').text('');
            $('.cont1').show();
        }
        else{
            $('.men').text('Error comprueba que todo este relleno');
        }
    });
    $('.cont').click(function(){
        if($("#sala").is(':checked') && $("#fecha").is(':checked')){
            $('.num_entrada').show();
            $('.cont').hide();
            $('.men').text('');
            $('.cont1').show();
        }
        else{
            $('.men').text('Error comprueba que todo este relleno');
        }
    });
    var valor = 0;
    var tipo = null;
    $('.cont1').click(function(){
        if ($('.reserva').val()== ""){
            $('small#reserva').attr('class','text-danger');
            $('small#reserva').text('Este campo es obligatorio');
            $('.reserva').css('border-style','solid');
            $('.reserva').css('border-color','red');
        }
        else {
            $('small#reserva').text('');
            $('.reserva').css('border-style','solid');
            $('.reserva').css('border-color','green');
            $.post("../controlador/salaRe.php", function(r){
                var obj = JSON.parse(r);
                for (let i = 0; i < obj.length; i++) {
                    if ($('#sala').val()==obj[i].idSala) {
                        var butacas =  parseInt(obj[i].butaca);
                        valor = parseInt($('.reserva').val());
                       if (butacas > valor){
                            valor = obj[i].butaca - $('.reserva').val();
                            $('.reserva').attr('max', valor);
                            tipo = obj[i].tipo;
                        }
                        else{
                            if ($('#sala').val()==0) {
                                $('small#reserva').attr('class','text-danger');
                                $('small#reserva').text('No quedan entradas');
                                $('.reserva').css('border-style','solid');
                                $('.reserva').css('border-color','red');
                            }
                            else{
                                if (butacas < valor){
                                    $('.reserva').css('border-style','solid');
                                    $('.reserva').css('border-color','red');
                                    $('small#reserva').attr('class','text-danger');
                                    $('small#reserva').text('Solo quedan ' + obj[i].butaca);
                                }
                            }
                        }
                    }
                }
            });
            $.post("../controlador/tarifaRe.php", function(r){
                var obj = JSON.parse(r);
                for (let i = 0; i < obj.length; i++) {
                    var partes = $('#fecha').val().split('/');
                    var fecha = new Date(partes[0]);  
                    var hora = partes[1].split(':');
                    var h = parseFloat(hora[0] + '.' + hora[1]);  
                    var semana = fecha.getDay();
                    if (semana == 3){
                        $('#tarifa').text('Tarifa: Día espectador');
                        if (obj[i].nombre == 'Día espectador'){
                            var suma = obj[i].precio*$('#reserva').val()
                            $('.precio').html('<strong>Precio:</strong>' + suma);
                            proyeccion= obj[i].idProyeccion;
                        }
                    }
                    else{
                        if(semana == 6){
                            $('#tarifa').text('Tarifa: Día pareja');
                            if (obj[i].nombre == 'Día pareja'){
                                var n =parseInt( $('#reserva').val());
                                var par =0;
                                if (n%2!=0){
                                    while (n > par){
                                        par = par + 2
                                        n--;
                                    }
                                    var suma = ((parseInt(obj[i].precio)*par)/2)+7;
                                    $('.precio').html('<strong>Precio:</strong>' + suma);
                                    proyeccion= obj[i].idProyeccion;
                                }
                                else{
                                    var suma = (parseInt(obj[i].precio)*$('#reserva').val())/2;
                                    $('.precio').html('<strong>Precio:</strong>' + suma);
                                    proyeccion= obj[i].idProyeccion;
                                }
                            }
                        }
                        else{
                            if (semana == 6 && h ==12.00 ||  semana == 0 && h == 12.00){
                                $('#tarifa').text('Tarifa: Matinal');
                                if (obj[i].nombre == 'Matinal'){
                                    var suma = obj[i].precio*$('#reserva').val()
                                    $('.precio').html('<strong>Precio:</strong>' + suma);
                                    proyeccion= obj[i].idProyeccion;
                                }
                            }
                            else{
                                if (obj[i].nombre == 'Entrada normal'){
                                    $('#tarifa').text('Tarifa: Entrada normal');
                                    var suma = obj[i].precio*$('#reserva').val();
                                    $('.precio').html('<strong>Precio:</strong>' + suma);
                                    proyeccion= obj[i].idProyeccion;
                                }
                            }
                        }
                    }
                }
            });
            $('.cont1').hide();
            $('.total').show();
            $('.enviar').show();
        }
        
    });
    $('.enviar').click(function(){
        if($('#sala').val() != '' && valor != 0 && tipo != null && proyeccion != null && $('.reserva').val()!=null){
            var updateSala = {'resultado':{'idSala': $('#sala').val(), 'butaca':valor, 'tipo':tipo}};
            $.ajax({
                url: "../controlador/updateButaca.php",
                type: "POST",
                data: updateSala
            });
            var insertReserva = {'resultado':{'idUsuario':sessionStorage.getItem("idUsuario"),'idProyeccion':proyeccion,'butaca':$('.reserva').val()}}
            $.ajax({
                url: "../controlador/insertReserva.php",
                type: "POST",
                data: insertReserva
            });
        }
        else{
            alert('Error revisa los campos');
        }
    });
    $('.atras').click(function(){
        window.location.replace("../vista/mas.php");
    });
    if (sessionStorage.getItem("id") != 0 && sessionStorage.getItem("id") != 1){
        window.location.replace("../vista/mas.php");
    }
});