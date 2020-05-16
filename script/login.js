
$(document).ready(function(){
    $.post("../controlador/login.php", function(r){
        var obj = JSON.parse(r);
        var existe = null;
        var id = null;
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
        $('.registro').click(function(){
            window.location.replace("../vista/registro.php");
        }); 
    });
    // $('.entrar').click(function(){

    // });

    // $.post("../controlador/login.php", function(r){
    //     // $('.entrar').click(function(){
    //         var obj = JSON.parse(r);
    //         if(obj.resultado != "noo existe"){
    //             $.ajax({
    //                 url: "../controlador/admin.php",
    //                 type: "POST",
    //                 data: obj
    //             });
    //             // window.location.replace("../vista/principal.php");
    //         }
    //         else{
    //             $('.mensaje').text("Error en contraseña o usuario");
    //         }
    //     // });
    // });
});
