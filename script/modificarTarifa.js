$(document).ready(function(){
    if (sessionStorage.getItem("id") !=1 ){ 
        window.history.back();
    }
    listaSemana = [];
    listaHorario = [];
    lista = [];
    var listaH = [];
    $.post("../controlador/tarifaAdmin.php", function(r){
        // Recojo los datos de la tarifa seleccionada y las pongo en los 
        // campos correspondientes
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].idTipo == sessionStorage.getItem("idTipoMod")) {
                $('#nombre').val(obj[i].nombre);
                $('#precio').val(obj[i].precio);
                $('#definicion').val(obj[i].definicion);
                if (obj[i].semana.length == 1) {
                    listaSemana.push(obj[i].semana);
                }
                else {
                    var parte = obj[i].semana.split(',');
                    for (let j = 0; j < parte.length; j++) {
                        listaSemana.push(parte[j]);
                    }
                }
                var parte = obj[i].horario.split(',');
                for (let j = 0; j < parte.length; j++) {
                    listaHorario.push(parte[j]);
                }
                if (obj[i].rebaja != null) {
                    var rebaja = obj[i].rebaja.split('*');
                    $('#rebaja1').val(rebaja[0]);
                    $('#rebaja2').val(rebaja[1]);
                }        
            }
        }
        
        for (let i = 0; i < listaHorario.length; i++) {
            if (listaHorario[i].length > 5) {
                var parte = listaHorario[i].split('-');
                for (let j = 0; j < parte.length; j++) {
                    listaH.push(parte[j]);
                }
            }
            else {
                listaH.push(listaHorario[i]);
            }
            
        }
        // Para ver los semana y que nos salga luego el input con las fechas
        for (let i = 0; i < listaSemana.length; i++) {
            var l = '#'+ listaSemana[i];
            $(l).attr('checked',true);

            var d = 'd'+ listaSemana[i];
            var h =  'h'+ listaSemana[i];

            var r1 =  'r1'+ listaSemana[i];
            var r2 =  'r2'+ listaSemana[i];

            var row = $('<div>');
            $('.hora').append(row);
            row.attr('class', 'row');
            row.attr('id', r1)

            var col = $('<div>');
            row.append(col);
            col.attr('class', 'col');

            var p = $('<h3>');
            col.append(p);
            p.text(semana(listaSemana[i]));

            var row1 = $('<div>');
            $('.hora').append(row1);
            row1.attr('class', 'row');
            row1.attr('id', r2)

            var col1 = $('<div>');
            row1.append(col1);
            col1.attr('class', 'col');

            var label1 = $('<label>');
            col1.append(label1);
            label1.text('Desde: ');

            for (let j = 1; j < listaH.length;j=+2) {
                var check1 = $('<input>');
                col1.append(check1);
                check1.attr('type', 'time');
                check1.attr('class', 'form-control ');
                check1.attr('id', d);
                check1.val(listaH[j]);
            }
            var col2 = $('<div>');
            row1.append(col2);
            col2.attr('class', 'col');

            var label2 = $('<label>');
            col2.append(label2);
            label2.text('Hasta: ');
            
            for (let j = 0; j < listaH.length; j=+2) {
                var check2 = $('<input>');
                col2.append(check2);
                check2.attr('type', 'time');
                check2.attr('class', 'form-control ');
                check2.attr('id', h);
                check2.val(listaH[j])
            }

            lista.push(listaSemana[i]);
        }
        $(':input').click(function(r){
            var e = r.currentTarget
            if ($(e).val() == "Atras") {
                window.location.replace("../vista/tarifaAdmin.php");
            }
            else {
                if ($(e).val() == "Modificar") {
                    var listaTH = [];
                    if ($('#nombre').val() != '' && $('#precio').val() != '') {
                        for (let i = 0; i < lista.length; i++) {
                            var d = '#d'+lista[i];
                            var h = '#h'+lista[i];
                            var string = $(d).val() + '-' + $(h).val();
                            listaTH.push(string);
                        }
                        if ($('#rebaja1').val() == '' || $('#rebaja2').val() == '') {
                            insert = {'resultado' : {'idTipo':sessionStorage.getItem("idTipoMod"),'nombre': $('#nombre').val(), 'precio': $('#precio').val(), 'definicion': $('#definicion').val(), 'semana': listaSemana.toString(), 'horario': listaTH.toString(),'rebaja' : null}};
                            
                            $.ajax({
                                url: "../controlador/modificarTarifa.php",
                                type: "POST",
                                data: insert
                            });
                            alert ('No se va a introducir rebaja');
                            window.location.replace("../vista/tarifaAdmin.php"); 
                        }
                        else{
                            var rebaja = $('#rebaja1').val() + '*' + $('#rebaja2').val();
                            insert = {'resultado' : {'idTipo':sessionStorage.getItem("idTipoMod"),'nombre': $('#nombre').val(), 'precio': $('#precio').val(), 'definicion': $('#definicion').val(), 'semana': listaSemana.toString(), 'horario': listaTH.toString(),'rebaja' : rebaja}};
                            $.ajax({
                                url: "../controlador/modificarTarifa.php",
                                type: "POST",
                                data: insert
                            });
                            window.location.replace("../vista/tarifaAdmin.php"); 
                        }
                    }
                    else {
                        alert ('Hay campos en blanco');
                    }
                    
                }
                else {
                    // Para los nuevos ckeck de las semanas
                    if ($(e).is(':checked')) {
                        var d = 'd'+ $(e).val();
                        var h =  'h'+ $(e).val();
    
                        var r1 =  'r1'+ $(e).val();
                        var r2 =  'r2'+ $(e).val();
    
                        var row = $('<div>');
                        $('.hora').append(row);
                        row.attr('class', 'row');
                        row.attr('id', r1)
    
                        var col = $('<div>');
                        row.append(col);
                        col.attr('class', 'col');
    
                        var p = $('<h3>');
                        col.append(p);
                        p.text(semana($(e).val()));
    
                        var row1 = $('<div>');
                        $('.hora').append(row1);
                        row1.attr('class', 'row');
                        row1.attr('id', r2)
    
                        var col1 = $('<div>');
                        row1.append(col1);
                        col1.attr('class', 'col');
    
                        var label1 = $('<label>');
                        col1.append(label1);
                        label1.text('Desde: ');
    
                        var check1 = $('<input>');
                        col1.append(check1);
                        check1.attr('type', 'time');
                        check1.attr('class', 'form-control ');
                        check1.attr('id', d);
    
                        var col2 = $('<div>');
                        row1.append(col2);
                        col2.attr('class', 'col');
    
                        var label2 = $('<label>');
                        col2.append(label2);
                        label2.text('Hasta: ');
                        
                        var check2 = $('<input>');
                        col2.append(check2);
                        check2.attr('type', 'time');
                        check2.attr('class', 'form-control ');
                        check2.attr('id', h);
    
                        lista.push($(e).val());
                    }
                    else {
                        removeItemFromArr(lista, $(e).val());
                        var r1 = '#r1' + $(e).val();
                        var r2 = '#r2' + $(e).val();
                        $(r1).remove();
                        $(r2).remove();
                    }
                }
            } 
            
        });
    });

    function semana (n){
        var day;
        switch (parseInt(n)){
            case 0:
              day = "Domingo";
              break;
            case 1:
              day = "Lunes";
              break;
            case 2:
               day = "Martes";
              break;
            case 3:
              day = "Miercoles";
              break;
            case 4:
              day = "Jueves";
              break;
            case 5:
              day = "Viernes";
              break;
            case 6:
              day = "Sabado";
        }
        return day;
    }
    // Eliminar de un array un item concreto
    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
});