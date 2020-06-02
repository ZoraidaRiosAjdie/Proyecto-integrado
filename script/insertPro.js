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
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
                todoTarifa.push(json);
            }
            else {
                var json = {'nombre': obj[i].nombre ,'dia':dia , 'hO': hO , 'hE': hE, 'rebaja': obj[i].rebaja, 'precio': obj[i].precio};
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
            lidSala.push(obj[i].idSala)
        }
        $('input').click(function(event){
            var e = event.currentTarget;
            if ($(e).val() == 'Atras') {
                window.location.replace("../vista/modificarPro.php");
            }
            else{
                if ($(e).val() == 'Insertar sala') {
                    if ($('#fecha').val()!=null  && $('#hora').val()!=null && $('#idSala').val()!=null) {
                        lfecha.push($('#fecha').attr('id'));
                        lhora.push($('#hora').attr('id'));
                        lselect.push($('#idSala').attr('id'));
                        $.post("../controlador/soloPro.php", function(re){ 
                            var insertado = [];
                            var proyeccion= null;
                            if (insertado.length < lselect.length){
                                for (let i = 0; i < lselect.length; i++) {
                                    var idF = '#' + lfecha[i];
                                    var idH = '#' + lhora[i];
                                    var idS = '#' + lselect[i];
                                    var partes = $(idF).val().split('/');
                                    var partesHora = $(idH).val().split(':');
                                    var h = parseFloat(partesHora[0] + '.' + partesHora[1]);
                                    var string = partes + 'T' + $(idH).val() + 'Z';
                                    var fechaHora = new Date(string);
                                    var semana = fechaHora.getDay();
                                    
                                    var obj = JSON.parse(re);
                                    if (obj[i].idSala != $(idS).val() && partes.toString() != obj[i].fecha && $(idH).val() != obj[i].hora) {
                                        for (let p = 0; p < todoTarifa.length; p++) {
                                            var dia = todoTarifa[p].dia;
                                            var hO = todoTarifa[p].hO;
                                            var hE = todoTarifa[p].hE
                                            for (let s = 0; s < dia.length; s++) {
                                                if (semana == dia[s]) {
                                                    for (let l = 0; l < hO.length; l++) {
                                                        if (hE[0] <= h || hE[1] >= h || hO[l]==h) {
                                                            if (todoTarifa[p].rebaja == null) {
                                                                proyeccion = {'resultado' : {'idSala':$(idS).val(), 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                                $.ajax({
                                                                        url: "../controlador/insertProyeccion.php",
                                                                        type: "POST",
                                                                        data: proyeccion
                                                                });
                                                                insertado.push(listaCont[i]); 
                                                            }
                                                        }
                                                    }
                                                }  
                                            }
                                        }
                                        if (proyeccion == null) {
                                            for (let q = 0; q < normal.length; q++) {
                                                proyeccion = {'resultado' : {'idSala':$(idS).val(), 'idPelicula':sessionStorage.getItem("idPeliMod"), 'idTipo':obj[i].idTipo, 'fecha': $(idF).val(), 'hora':$(idH).val() }};   
                                                                    
                                                $.ajax({
                                                        url: "../controlador/insertProyeccion.php",
                                                        type: "POST",
                                                        data: proyeccion
                                                });
                                                insertado.push(listaCont[i]);       
                                            }
                                        }
                                    }
                                    else{
                                        $('.mensaje').text('Este dato ya existe');
                                    }
                                 
                                }
                            }
                            window.location.replace("../vista/modificarPro.php");
                        });
                    }
                    else{
                        alert('Hay campos vacios');
                    }
                    
                }
                else{
                    if ($(e).val() == 'Añadir') {
                        cont++;
                        listaCont.push(cont);
                        
                        var f = 'f' + cont ;
                        var h = 'h' + cont ;
                        var s = 's' + cont ;
                        lselect.push(s);
                        lhora.push(h);
                        lfecha.push(f);

                        var row = $('<div>');
                        $('#nuevo').append(row);
                        row.attr('class', 'row p-2')

                        var col2 = $('<div>');
                        row.append(col2);
                        col2.attr('class', 'col');

                        var select = $('<select>');
                        col2.append(select);
                        select.attr('id', s);
                        select.attr('class', "form-control");    
                        for (let i = 0; i < lidSala.length; i++) {
                            var option1 = $('<option>');
                            select.append(option1);
                            option1.val(lidSala[i]);
                            option1.text(lidSala[i]);
                        }
                        var col = $('<div>');
                        row.append(col);
                        col.attr('class', 'col');

                        var text1 = $('<input>');
                        col.append(text1);
                        text1.attr('class', 'form-control');
                        text1.attr('type', 'date');
                        text1.attr('id', f);

                        var col1 = $('<div>');
                        row.append(col1);
                        col1.attr('class', 'col');

                        var text2 = $('<input>');
                        col1.append(text2);
                        text2.attr('class', 'form-control');
                        text2.attr('type', 'time');
                        text2.attr('id', h);
                    }
                }
            }
        });
    });
    
});