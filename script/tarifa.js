$(document).ready(function(){
    //  si no es administrardor no puede entrar
    if (sessionStorage.getItem("id") !=1 ){ 
        window.history.back();
    }
    // Crea la tabla de tarifas con sus datos
    $.post("../controlador/tarifaAdmin.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            var tr1 = $('<tr>');
            $('tbody').append(tr1);
            tr1.attr('id', obj[i].idTipo)

            var td1 = $('<td>');
            tr1.append(td1);
            td1.text(obj[i].nombre);

            var td2 = $('<td>');
            tr1.append(td2);
            td2.text(obj[i].definicion);


            var td3 = $('<td>');
            tr1.append(td3);
            td3.text(obj[i].precio);

            var td4 = $('<td>');
            tr1.append(td4);
            //  Si la entrada es normal no tiene boton eliminar
            if (obj[i].idTipo != 1){
                var button1 = $('<input>');
                td4.append(button1);
                button1.attr('value','Eliminar');
                button1.attr('type','button');
                button1.attr('class','btn btn-primary float-right eliminar ml-3');
                button1.attr('id', obj[i].idTipo); 
            }
            var button2 = $('<input>');
            td4.append(button2);
            button2.attr('value','Modificar');
            button2.attr('type','button');
            button2.attr('class','btn btn-primary float-right modificar');
            button2.attr('id', obj[i].idTipo);  
        }
        $(':button').click(function(r){
            var e = r.currentTarget;
            if ($(e).val() == 'Insertar tarifa') {
                window.location.replace("../vista/insertTarifa.php");
            }
            else {
                if ($(e).val() == 'Modificar') {
                    sessionStorage.setItem("idTipoMod", $(e).attr('id'));
                    window.location.replace("../vista/modificarTarifa.php");
                }
                else {
                    var a = null; 
                    // Lo he realizado de este modo para que no se haga más de una 
                    // vez la eliminación
                    $.post("../controlador/soloPro.php", function(p){
                        var obj1 = JSON.parse(p);
                        if ($(e).val() == 'Eliminar') {
                            for (let i = 0; i < obj1.length; i++) {
                                if ($(e).attr('id') == obj1[i].idTipo) {
                                    a = obj1[i].idTipo;
                                }
                            }
                            if (a == null) {
                                insert = {'resultado' : {'idTipo':$(e).attr('id')}};
                                $.ajax({
                                    url: "../controlador/borrarTarifa.php",
                                    type: "POST",
                                    data: insert
                                });
                            }
                            else {
                                alert ('Esta tarifa esta en uso');
                            }
                        }
                    });
                    
                }
            }
        });
    });
});