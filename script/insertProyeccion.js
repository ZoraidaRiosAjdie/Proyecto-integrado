$(document).ready(function(){
    // if (sessionStorage.getItem("id") !=1){ 
    //     window.location.replace("../vista/principal.php");
    // }
    var cont = 0;
    var lidSala=[];
    var todoTarifa = [];
    var normal=[];
    var lselect = [];
    var lfecha = [];
    var lhora = [];
    var listaCont=[];
    var idMax = null;
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
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio, 'idTipo': obj[i].idTipo};
                todoTarifa.push(json);
            }
            else {
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio, 'idTipo': obj[i].idTipo};
                normal.push(json);
            }
        }
    });
    $.post("../controlador/salaRe.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            var option1 = $('<option>');
            $('#idSala').append(option1);
            option1.val(obj[i].idSala);
            option1.text(obj[i].idSala);
            lidSala.push(obj[i].idSala);
        }
        $('input').click(function(event){
            var e = event.currentTarget;
            if ($(e).val() == 'Atras') {
                window.location.replace("../vista/insertPelicula.php");
            }
            else{
                if ($(e).val() == 'Insertar sala') {
                    if ($('#fecha').val()!=null  && $('#hora').val()!=null && $('#idSala').val()!=null) {
                        var insertPelicula = {'resultado' : {'anio': sessionStorage.getItem("anioPelicula"), 'titulo': sessionStorage.getItem("tituloPelicula"), 'pais': sessionStorage.getItem("paisPelicula"), 'genero': sessionStorage.getItem("generoPelicula"), 'duracion':sessionStorage.getItem("duracionPelicula"), 'fecha_estreno': sessionStorage.getItem("fechaPelicula"), 'calificacion': sessionStorage.getItem("calificacionPelicula"), 'sinopsis': sessionStorage.getItem("sinopsisPelicula"), 'actores': sessionStorage.getItem("actoresPelicula"), 'imagen' : sessionStorage.getItem("imagenPelicula"), 'mostrar': 0}};
                        $.ajax({
                            url: "../controlador/insertPelicula.php",
                            type: "POST",
                            data: insertPelicula
                        });
                        $.post("../controlador/maxIdPelicula.php", function(e){
                            var obj = JSON.parse(e);
                            idMax= parseInt(obj.idPelicula) + 1;
                        });
                        $.post("../controlador/soloPro.php", function(v){
                            var proyeccion= null;
                            var obj1 = JSON.parse(v);
                            // for (let i = 0; i < obj.length; i++) {
                                for (let j = 0; j < obj1.length; j++) {
                                    var partesHora = $('#hora').val().split(':');
                                    var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
                                    var string = $('#fecha').val() + 'T' + $('#hora').val() + 'Z';
                                    var fechaHora = new Date(string);
                                    var semana = fechaHora.getDay();
                                    if (obj1[j].idSala != $('#idSala').val() && $('#fecha').toString() != obj1[j].fecha && $('#hora').val() != obj1[j].hora) {
                                        for (let p = 0; p < todoTarifa.length; p++) {
                                            var dia = todoTarifa[p].dia;
                                            var hO = todoTarifa[p].hO;
                                            var hE = todoTarifa[p].hE
                                            if (proyeccion == null) {
                                                for (let s = 0; s < dia.length; s++) {
                                                    if (semana == dia[s]) {
                                                        for (let l = 0; l < hO.length; l++) {
                                                            if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
                                                                if (todoTarifa[p].rebaja == null) {
                                                                    proyeccion = {'resultado' : {'idSala':$('#idSala').val(), 'idPelicula':idMax, 'idTipo':todoTarifa[p].idTipo, 'fecha': $('#fecha').val(), 'hora':$('#hora').val() }};   
                                                                    $.ajax({
                                                                            url: "../controlador/insertProyeccion.php",
                                                                            type: "POST",
                                                                            data: proyeccion
                                                                    });
                                                                     
                                                                }
                                                            }
                                                        }
                                                    }  
                                                }
                                            }
                                            
                                        }
                                        if (proyeccion == null) {
                                            for (let q = 0; q < normal.length; q++) {
                                                proyeccion = {'resultado' : {'idSala':$('#idSala').val(), 'idPelicula':idMax, 'idTipo':normal[q].idTipo, 'fecha': $('#fecha').val(), 'hora':$('#hora').val() }};   
                                                                    
                                                $.ajax({
                                                        url: "../controlador/insertProyeccion.php",
                                                        type: "POST",
                                                        data: proyeccion
                                                });
                                                       
                                            }
                                        }
                                    }
                                    else{
                                        $('.mensaje').text('Este dato ya existe');
                                    }
                                }
                            alert('Se ha insertado correctamente');
                            window.location.replace("../vista/pelicula.php");
                        });
                    }
                    else{
                        alert('Hay campos vacios');
                    }
                    
                }      
            }
        });
    });
    
});