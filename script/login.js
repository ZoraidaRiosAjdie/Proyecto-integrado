
$(document).ready(function(){
    $.post("../controlador/login.php", function(r){
        $('.entrar').click(function(){
            var obj = JSON.parse(r);
            if(obj.resultado == "noo existe"){
                $('.mensaje').text("Error en contraseña o usuario");
            }
            else{
                window.location.replace("../controlador/registro.php");
            }
        });
    });
});