$(document).ready(function(){
    if (sessionStorage.getItem("id") !=1 ){ 
        window.history.back();
    }
    var todoTarifa = [];
    var normal=[];
    var lselect = [];
    var lfecha = [];
    var lhora = [];
    var listaCont=[];
    $.post("../controlador/tarifaAdmin.php", function(e){
        var obj = JSON.parse(e);
        for (let i = 0; i < obj.length; i++) {
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
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio, 'idTipo' : obj[i].idTipo};
                todoTarifa.push(json);
            }
            else {
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio, 'idTipo' : obj[i].idTipo};
                normal.push(json);
            }
        }
    });   
    var lista = [];
    $.post("../controlador/soloPro.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if(sessionStorage.getItem('modIdPro')== obj[i].idProyeccion){
                var row = $('<div>');
                $('#todo').append(row);
                row.attr('class', 'row');

                var col = $('<div>');
                row.append(col);
                col.attr('class', 'col');

                var label1 = $('<label>');
                col.append(label1);
                label1.text('Fecha de proyeccion');

                var text1 = $('<input>');
                col.append(text1);
                text1.attr('class', 'form-control fecha');
                text1.attr('type', 'text');
                text1.val(obj[i].fecha);

                var col1 = $('<div>');
                row.append(col1);
                col1.attr('class', 'col');

                var label2 = $('<label>');
                col1.append(label2);
                label2.text('Hora de proyeccion');

                var text2 = $('<input>');
                col1.append(text2);
                text2.attr('class', 'form-control hora');
                text2.attr('type', 'text');
                text2.val(obj[i].hora);

                var jsonL = {'idProyeccion':obj[i].idProyeccion , 'idSala':obj[i].idSala, 'idPelicula':sessionStorage.getItem("idPeliMod")}
                lista.push(jsonL);
            }
        }
        $('input').click(function(event){
            var e = event.currentTarget;
            if ($(e).val() == 'Atras') {
                window.location.replace("../vista/modificarPro.php");
            }
            else{
                if ($(e).val() == 'Modificar') {
                    if ($('.fecha').val()!=null  && $('.hora').val()!=null) {
                        $.post("../controlador/soloPro.php", function(v){
                            var obj = JSON.parse(v);
                            var proyeccion= null;
                            var partesHora = $('.hora').val().split(':');
                            var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
                            var string = $('.fecha').val() + 'T' + $('.hora').val() + 'Z';
                            var fechaHora = new Date(string);
                            var semana = fechaHora.getDay();
                            for (let i = 0; i < obj.length; i++) {
                                if (obj[i].idProyeccion == sessionStorage.getItem('modIdPro')) {
                                    for (let p = 0; p < todoTarifa.length; p++) {
                                        var dia = todoTarifa[p].dia;
                                        var hO = todoTarifa[p].hO;
                                        var hE = todoTarifa[p].hE
                                        for (let s = 0; s < dia.length; s++) {
                                            if (semana == dia[s]) {
                                                for (let l = 0; l < hO.length; l++) {
                                                    if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
                                                        if (todoTarifa[p].rebaja == null) {
                                                            proyeccion = {'resultado' : {'idProyeccion':sessionStorage.getItem('modIdPro'), 'idSala':obj[i].idSala, 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':todoTarifa[p].idTipo, 'fecha': $('.fecha').val(), 'hora':$('.hora').val()}};
                                                            $.ajax({
                                                                url: "../controlador/modificarPro.php",
                                                                type: "POST",
                                                                data: proyeccion
                                                            });  
                                                        }
                                                    }
                                                }
                                            }  
                                        }
                                    }
                                    if (proyeccion == null) {
                                        for (let q = 0; q < normal.length; q++) {
                                            proyeccion = {'resultado' : {'idProyeccion':sessionStorage.getItem('modIdPro') , 'idSala':obj[i].idSala, 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':normal[q].idTipo, 'fecha': $('.fecha').val(), 'hora':$('.hora').val() }};           
                                            $.ajax({
                                                    url: "../controlador/modificarPro.php",
                                                    type: "POST",
                                                    data: proyeccion
                                            });
                                            // insertado.push(listaCont[i]);       
                                        }
                                    }
                                }
                            }
                        });
                            window.location.replace("../vista/modificarPro.php");
                        // }
                    }
                    else{
                        alert('Hay campos vacios');
                    }

                }
            }
        });
    });
    
});