$(document).ready(function(){
    $('.usuario').hide();
    if (sessionStorage.getItem("id")== 0 || sessionStorage.getItem("id")== 1){
        $('.usuario').show();
        $.post("../controlador/login.php", function(r){
            var obj = JSON.parse(r);
            for (let i = 0; i < obj.length; i++) {
                if (sessionStorage.getItem("idUsuario") == obj[i].idUsuario) {
                    $('.foto').attr('src', obj[i].imagen);
                    $('.foto').attr('class', 'img-thumbnail rounded-circle imagen');
                }
            }
        });
    }
    $('#reserva').hide();
    $.post("../controlador/reserva.php", function(r){
        var obj = JSON.parse(r);
        var usuario = null;
        for (let i = 0; i < obj.length; i++) {
            if (sessionStorage.getItem("idUsuario") == obj[i].idUsuario) {
                usuario = obj[i].idUsuario;
            }
        }
        if (usuario != null) {
            $('#reserva').show();
        }
    });
    $('#sesion').click(function(){
        sessionStorage.clear();
        window.location.replace("../vista/login.php");
    });
});