$(document).ready(function(){
    $.post("../controlador/login.php", function(r){
        var obj = JSON.parse(r);
        var existe = null;
        var id = null;
        // Comprobar si el usuario esta registrado , y que pueda acceder a la pagina
        $('.entrar').click(function(){
            for (let i = 0; i < obj.length; i++) {
                if ($('.nombre').val()== obj[i].nombre && $('.pwd').val()== obj[i].pwd){
                        existe = obj[i].admin;
                        id = obj[i].idUsuario;
                }
            }
            if (existe == null){
                $('.mensaje').text("Error en contraseña o usuario");
            }
            else {
                window.location.replace("../vista/principal.php");
            } 
            sessionStorage.setItem("id", existe);
            sessionStorage.setItem("idUsuario", id);
        }); 
        // Para registrarse
        $('.registro').click(function(){
            window.location.replace("../vista/registro.php");
        }); 
    });
});
