$(document).ready(function(){
    $.post("../controlador/validar.php", function(r){
            var obj = JSON.parse(r);
            var nombre = [];
            var email = [];
            for (let index = 0; index < obj.length; index++) {
                nombre.push(obj[index].nombre);
                email.push(obj[index].email);
            }
            $('.aceptar').click(function(){
                for (let index = 0; index < nombre.length; index++) {
                    if(nombre[index] == $('.nombre').val()){
                        $('#1').text('Este nombre ya existe');
                        // $('nombre').attr('class', 'nombre is-valid');
                    }
                    // else{
                    //     $('nombre').attr('class', 'nombre is-valid');
                    // }
                }
            });
    });
    function validarEmail(valor) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
         alert("La dirección de email " + valor + " es correcta.");
        } else {
         alert("La dirección de email es incorrecta.");
        }
    }
});