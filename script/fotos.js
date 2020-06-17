$(document).ready(function(){
    $.post("../controlador/cartelera.php", function(r){
        var obj = JSON.parse(r);
        // Coge el id de la pelicula para que me de el album de fotos
        for (let i = 0; i < obj.length; i++) {
            if (sessionStorage.getItem('idFoto') == obj[i].idPelicula) {
                var parte = obj[i].otros.split(',');
                for (let j = 0; j < parte.length; j++) {
                    if (j == 0) {
                        var div1 = $("<div>");
                        div1.attr('class','carousel-item active');
                        $('.carousel-inner').append(div1);
                    }
                    else {
                        var div1 = $("<div>");
                        div1.attr('class','carousel-item');
                        $('.carousel-inner').append(div1);
                    }
                    var img1 = $("<img>");
                    img1.attr('src',parte[j]);
                    img1.attr('class','d-block w-100 img-thumbnail');
                    $(div1).append(img1);
                }
            }
        }
    });
    $('input').click(function(event){
        var e = event.currentTarget;
        if ($(e).val() == 'Atras') {
            window.history.back();
        }
    });
});