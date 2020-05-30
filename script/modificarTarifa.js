$(document).ready(function(){
    $.post("../controlador/tarifaAdmin.php", function(r){
        var obj = JSON.parse(r);
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].idTipo == sessionStorage.getItem("idTipoMod")) {
                $('#nombre').val(obj[i].nombre);
                $('#precio').val(obj[i].precio);
                $('#definicion').val(obj[i].definicion);
            }
        }
    });
    $(':button').click(function(r){
        var e = r.currentTarget
        if ($(e).val() == "Atras") {
            window.location.replace("../vista/tarifaAdmin.php");
        }
        else {
            if ($(e).val() == "Modificar") {
                if ($('#nombre').val() != '' && $('#precio').val() != '') {
                    insert = {'resultado' : {'idTipo':sessionStorage.getItem("idTipoMod"),'nombre': $('#nombre').val(), 'precio': $('#precio').val(), 'definicion': $('#definicion').val()}};
                    $.ajax({
                        url: "../controlador/modificarTarifa.php",
                        type: "POST",
                        data: insert
                    });
                    window.location.replace("../vista/tarifaAdmin.php");

                }
                else {
                    alert ('Hay campos en blanco');
                }
                
            }
        } 
        
    });
});