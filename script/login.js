
$(document).ready(function(){
    $.post("../controlador/login.php", function(r){
        var obj = JSON.parse(r);
        var existe = null;
        $('.entrar').click(function(){
            for (let i = 0; i < obj.length; i++) {
            // var lista={'nombre':obj[i].nombre , 'pwd':obj[i].pwd};
            // objeto.push(lista);
                if ($('.nombre').val()== obj[i].nombre && $('.pwd').val()== obj[i].pwd){
                        existe = {'resultado':obj[i].admin};
                }
            }
            if (existe == null){
                $('.mensaje').text("Error en contraseña o usuario");
            }
            else {
                $.ajax({
                    url: "../controlador/admin.php",
                    type: "POST",
                    data: existe
                });
            }
            // for (let i = 0; i < objeto.length; i++) {
            //     if ($('.nombre').val()== objeto[i].nombre){
            //         nombre_existe = $('.nombre').val();
            //     }
            // } 
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