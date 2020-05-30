$(document).ready(function(){
    $(':button').click(function(r){
        var e = r.currentTarget
        if ($(e).val() == "Atras") {
            window.location.replace("../vista/tarifaAdmin.php");
        }
        else {
            if ($(e).val() == "Insertar") {
                if ($('#nombre').val() != '' && $('#precio').val() != '' ) {
                    insert = {'resultado' : {'nombre': $('#nombre').val(), 'precio': $('#precio').val(), 'definicion': $('#definicion').val()}};
                    $.ajax({
                        url: "../controlador/insertTarifa.php",
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