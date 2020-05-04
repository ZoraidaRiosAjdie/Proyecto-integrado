$(document).ready(function(){
    var cont = 9;
    $('.eliminar').hide();
    $('.añadir_actor').click(function(){
        if (cont > 0) {
            // Crear fila de actor
            var ac = 'row actor'+cont;
            var div1 = $('<div>');
            $("div.actores").after(div1);
            div1.attr('class', ac);
            // Crear columna actor
            var div2 = $('<div>');
            $(div1).append(div2);
            div2.attr('class','col');
            // titulo actor
            var label1 = $('<label>');
            $(div2).append(label1);
            label1.text('Actores');
            // input actor
            var input1 = $('<input>');
            $(div2).append(input1);
            input1.text('Actores');
            input1.attr('type','text');
            var b = 'ac'+ cont
            input1.attr('class','form-control actor');
            input1.attr('id', b);
            // small
            var small1 = $('<small>');
            $(div2).append(small1);
            small1.attr('id', b);
            // Crear columna papel
            var div3 = $('<div>');
            $(div1).append(div3);
            div3.attr('class','col');
            // titulo papel
            var label2 = $('<label>');
            $(div3).append(label2);
            label2.text('Papel que interpreta');
            // input papel
            var c = 'p'+cont;
            var input2 = $('<input>');
            $(div3).append(input2);
            input2.text('Actores');
            input2.attr('type','text');
            input2.attr('class','form-control papel');
            input2.attr('id', c);
            input2.val('');
            // small
            var small2 = $('<small>');
            $(div3).append(small2);
            small2.attr('id', c);
            cont--;
        }
        else{
            $('.añadir_actor').hide();
        }
        $('.eliminar').show();
        
    });
    $('input:checkbox').click(function(event){
        var evento = event.currentTarget;
        if ($(evento).is(":checked")){
            var h = 'h' + $(evento).val();
            var row = $('<div>');
            $('.sala').append(row);
            row.attr('class','row');
            row.attr('id', h);

            var col4 = $('<div>');
            row.append(col4);
            col4.attr('class','col');

            var titulo = $('<label>');
            titulo.text('Fecha de la sala: ' + $(evento).val());
            titulo.attr('id', h);
            col4.append(titulo);

            var br1 = $('<br>');
            col4.append(br1);

            var fecha = $('<input>');
            fecha.attr('type','date');
            fecha.attr('id', h);
            col4.append(fecha);

            var col3 = $('<div>');
            $(row).append(col3);
            col3.attr('class','col');

            var titulo1 = $('<label>');
            titulo1.text('Hora de la sala: ' + $(evento).val());
            titulo1.attr('id', h);
            col3.append(titulo1);

            var br2 = $('<br>');
            col3.append(br2);

            var hora = $('<input>');
            hora.attr('type','time');
            hora.attr('id', h);
            col3.append(hora);
        }
    });
    var i = 10;
    $('.eliminar').click(function(){
        if (i >= 1){
            var actor = '.actor' + i;
            $(actor).remove();
            i--;
        }
        else{
            $('.eliminar').hide();
        }
    });
});