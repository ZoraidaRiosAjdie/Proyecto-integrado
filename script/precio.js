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
    var string = parte[0] + 'T' + parte[1] + 'Z';
    var fechaHora = new Date(string);
    var semana = fechaHora.getDay();
    // var semana = 4;
    var minH = parte[1].split(':');
    var h = parseFloat(minH[0] + '.' + minH[1]);
    var todo = [];
    var normal = [];
    $.post("../controlador/tarifaAdmin.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            var dia ;
            if (obj[i].semana != null) {
                var dia = obj[i].semana.split(',');
            }
            else{
                var dia = obj[i].semana;
            }
            var part = obj[i].horario.split(',');
            var hora;
            var hO = [];
            var hE = [];
            for (let j = 0; j < part.length; j++) {
                var hOr = part[j].split('-');
                for (let l = 0; l < hOr.length; l++) {
                    if (hOr.length == 2) {
                        var hEntre = hOr[l].split(':');
                        hE.push(parseFloat(hEntre[0] + '.' + hEntre[1]));
                        
                    }
                    else{
                        hora = hOr[l].split(':');
                        hO.push(parseFloat(hora[0] + '.' + hora[1]));
                    }
                }
                if (hO.length == 0) {
                    hO.push('a');
                }
            }
            if (obj[i].idTipo != 1) {
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
                todo.push(json);
            }
            else {
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
                normal.push(json);
            }
        }
        // console.log(todo);
        // console.log(normal);
        for (let i = 0; i < todo.length; i++) {
            var dia = todo[i].dia;
            var hO = todo[i].hO;
            var hE = todo[i].hE
            for (let j = 0; j < dia.length; j++) {
                if (semana == dia[j]) {
                    for (let l = 0; l < hO.length; l++) {
                        if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
                            $('#tarifa').val(todo[i].nombre);
                            if (todo[i].rebaja == null) {
                                var suma = todo[i].precio * parseInt(sessionStorage.getItem("entrada"));
                                $('#precio').val(suma);
                            }
                            else {
                                if (todo[i].rebaja %2 == 0){
                                    var n =parseInt(sessionStorage.getItem("entrada"));
                                    if (n < 2) {
                                        var suma = (parseInt(todo[i].precio) * sessionStorage.getItem("entrada"));
                                        $('#precio').val(suma);
                                    }
                                    else{
                                        var par =0;
                                        if (n%2!=0){
                                            while (n > par){
                                                par = par + 2
                                                n--;
                                            }
                                            var suma = ((parseInt(todo[i].precio)*par)/todo[i].rebaja)+7;
                                            $('#precio').val(suma);
                                        }
                                        else{
                                            var suma = (parseInt(todo[i].precio) * sessionStorage.getItem("entrada")) / todo[i].rebaja;
                                            $('#precio').val(suma);
                                        }
                                    }
                                }
                                else {
                                    var n =parseInt(sessionStorage.getItem("entrada"));
                                    var par =0;
                                    if (n%3!=0){
                                        while (n > par){
                                            par = par + 1
                                            n--;
                                        }
                                        var suma = ((parseInt(todo[i].precio)*par)/todo[i].rebaja)+7;
                                        $('#precio').val(suma);
                                    }
                                    else{
                                        var suma = (parseInt(todo[i].precio) * sessionStorage.getItem("entrada")) / todo[i].rebaja;
                                        $('#precio').val(suma);
                                    }
                                    
                                }
                            }
                        }
                    }
                }  
            } 
        }
        if ($('#precio').val() == '') {
            for (let i = 0; i < normal.length; i++) {
                $('#tarifa').val(normal[i].nombre);
                var suma = (parseInt(normal[i].precio) * sessionStorage.getItem("entrada"));
                $('#precio').val(suma);
            }
        }
    });
    $(':button').click(function(){
        window.location.replace("../vista/reserva.php");
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
    });
    
    if (sessionStorage.getItem("id") != 0 && sessionStorage.getItem("id") != 1){
        window.location.replace("../vista/mas.php");
    }
});