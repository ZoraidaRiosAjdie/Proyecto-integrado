
$(document).ready(function(){
    $.post("../controlador/login.php", function(r){
        // $('.entrar').click(function(){
            var obj = JSON.parse(r);
            if(obj.resultado != "noo existe"){
                window.location.replace("../vista/registro.php");
            }
            else{
                $('.mensaje').text("Error en contraseña o usuario");
                
            }
        // });
    });
});