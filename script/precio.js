$(document).ready(function(){
    
    $.post("../controlador/cartelera.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (sessionStorage.getItem("idPelicula")== obj[i].idPelicula) {
                $('#titulo').val(obj[i].titulo);
            };
        }
    });
    var parte = sessionStorage.getItem("fechaHora").split('/');
    var fecha = parte[1] + ' ' + parte[0];
    $('#hf').val(fecha);
    $('#sala').val(sessionStorage.getItem("idSala"));
    $('#entrada').val(sessionStorage.getItem("entrada"));
    $.post("../controlador/tarifaRe.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            var string = parte[0] + 'T' + parte[1] + 'Z';
            var fechaHora = new Date(string);
            var semana = fechaHora.getDay();
            if (semana == 3){
                $('#tarifa').val('Día espectador');
                if (obj[i].nombre == 'Día espectador'){
                    var suma = obj[i].precio * parseInt(sessionStorage.getItem("entrada"));
                    $('#precio').val(suma);
                }
            }
            else{
                if(semana == 6){
                    $('#tarifa').val('Día pareja');
                    if (obj[i].nombre == 'Día pareja'){
                        var n =parseInt(sessionStorage.getItem("entrada"));
                        var par =0;
                        if (n%2!=0){
                            while (n > par){
                                par = par + 2
                                n--;
                            }
                            var suma = ((parseInt(obj[i].precio)*par)/2)+7;
                            $('#precio').val(suma);
                        }
                        else{
                            var suma = (parseInt(obj[i].precio) * sessionStorage.getItem("entrada")) / 2;
                            $('#precio').val(suma);
                        }
                    }
                }
                else{
                    if (semana == 6 && h ==12.00 ||  semana == 0 && h == 12.00){
                        $('#tarifa').val('Matinal');
                        if (obj[i].nombre == 'Matinal'){
                            var suma = obj[i].precio * sessionStorage.getItem("entrada")
                            $('#precio').val(suma);
                        }
                    }
                    else{
                        if (obj[i].nombre == 'Entrada normal'){
                            $('#tarifa').val('Entrada normal');
                            var suma = obj[i].precio * sessionStorage.getItem("entrada");
                            $('#precio').val(suma);
                        }
                    }
                }
            }
        }
    });
    $(':button').click(function(){
        window.location.replace("../vista/reserva.php");
    });
    $(':submit').click(function(){
            var updateSala = {'resultado':{'idSala': sessionStorage.getItem("idSala"), 'butaca':sessionStorage.getItem("butaca"), 'tipo':sessionStorage.getItem("tipo")}};
            var insertReserva = {'resultado':{'idUsuario':sessionStorage.getItem("idUsuario"),'idProyeccion':sessionStorage.getItem("idProyeccion"),'butaca':sessionStorage.getItem("butaca1")}};      
            $.ajax({
                url: "../controlador/updateButaca.php",
                type: "POST",
                data: updateSala
            });
            
            $.ajax({
                url: "../controlador/insertReserva.php",
                type: "POST",
                data: insertReserva
            });
            $('input').removeAttr("disabled");
        
    });
    $.post("../controlador/login.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (sessionStorage.getItem("idUsuario") == obj[i].idUsuario) {
                var email = 'mailto:'+ obj[i].email;
                $('form').attr('action', email);
            }
        } 
    });
    if (sessionStorage.getItem("id") != 0 && sessionStorage.getItem("id") != 1){
        window.location.replace("../vista/mas.php");
    }
});