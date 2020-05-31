$(document).ready(function(){
    $.post("../controlador/validar.php", function(r){
            var obj = JSON.parse(r);
            var jsonNombre = null;
            var jsonEmail = null;
            var jsonPWD = null;
            var json;
            var nombre = [];
            var email = [];
            var usuario;
            var email1;
            var imagen = null;
            // var pwd = [];
            for (let index = 0; index < obj.length; index++) {
                nombre.push(obj[index].nombre);
                email.push(obj[index].email);
                imagen = obj[index].imagen;
            }
            $('.nombre').blur(function(){
                if ($('.nombre').val()== ""){
                    jsonNombre = null;
                    $('#1').attr('class','text-danger');
                    $('#1').text('Este campo es obligatorio');
                    $('.nombre').css('border-style','solid');
                    $('.nombre').css('border-color','red');
                }
                else {
                    for (let index = 0; index < nombre.length; index++) {
                        
                        if(nombre[index] != $('.nombre').val()){
                            jsonNombre = {'nombre': $('.nombre').val()};
                            $('#1').text('');
                            // $('.barra').attr('style','width:33%');
                            // $('.barra').attr('aria-valuenow','33');
                            $('.nombre').css('border-style','solid');
                            $('.nombre').css('border-color','green');
                        }
                        else{
                            usuario = nombre[index];
                        }
                    }
                    if(usuario == $('.nombre').val()){
                        jsonNombre = null;
                        $('#1').attr('class','text-danger');
                        $('#1').text('Este nombre ya existe');
                        $('.nombre').css('border-style','solid');
                        $('.nombre').css('border-color','red');
                    }
                }
            });
            $('.email').blur(function(){
                if ($('.email').val()== ""){
                    jsonEmail = null;
                    $('#2').attr('class','text-danger');
                    $('#2').text('Este campo es obligatorio');
                    $('.email').css('border-style','solid');
                    $('.email').css('border-color','red');
                }
                else {
                    for (let index = 0; index < email.length; index++) {
                        
                        if(email[index] != $('.email').val()){
                            $('#2').text('');
                            $('.email').css('border-style','solid');
                            $('.email').css('border-color','green');
                            validarEmail($('.email').val());
                        }
                        else{
                            email1 = email[index];
                        }
                    }
                    if(email1 == $('.email').val()){
                        jsonEmail = null;
                        $('#2').attr('class','text-danger');
                        $('#2').text('Este email ya existe');
                        $('.email').css('border-style','solid');
                        $('.email').css('border-color','red');
                    }
                    if ($('#2').text()==''){
                        jsonEmail = {'email': $('.email').val()};
                    }
                }
            });
            $('.pwd').blur(function(){
                if ($('.pwd').val()== ""){
                    $('#3').attr('class','text-danger');
                    $('#3').text('Este campo es obligatorio');
                    $('.pwd').css('border-style','solid');
                    $('.pwd').css('border-color','red');
                    jsonPWD = null;
                }
                else {
                    validarPWD($('.pwd').val());
                    if ($('#3').text()==''){
                        jsonPWD = {'pwd': $('.pwd').val()};
                    }
                }
            });
            $('.aceptar').click(function(){
                if ($('.foto').val() != '' ){
                    imagen = $('.foto').val();
                }
                if (jsonNombre != null && jsonEmail != null && jsonPWD != null){
                    json = {'usuario':[jsonNombre,jsonEmail,jsonPWD,imagen]};
                    $.ajax({
                        url: "../controlador/insertar.php",
                        type: "POST",
                        data: json
                    });
                    window.location.replace("../vista/login.php");
                }
                else{
                    alert('Error compruebe los campos');
                }
            });
            

    });
    function validarEmail(valor) {
        var patron = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (patron.test(valor)){
            $('#2').text('');
            
        } else {
            $('#2').attr('class','text-danger');
            $('.email').css('border-style','solid');
            $('.email').css('border-color','red');
            $('#2').text("La dirección de email es incorrecta.");
        }
    }
    function validarPWD(valor) {
        var patron = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,26}$/;
        if (patron.test(valor)){
            $('#3').text('');
            $('.pwd').css('border-style','solid');
            $('.pwd').css('border-color','green');
        } else {
            $('#3').attr('class','text-danger');
            $('.pwd').css('border-style','solid');
            $('.pwd').css('border-color','red');
            $('#3').text("La contraseña no es valida. La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.");
        }
    }
});