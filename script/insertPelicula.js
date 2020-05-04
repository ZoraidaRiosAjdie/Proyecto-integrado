$(document).ready(function(){
    $.post("../controlador/pelicula.php", function(r){
        var obj = JSON.parse(r);
        var titulo = [];
        var select = null;
        var fecha = null;
        var minuto = null;
        var lista =[];
        var valor;
        var ti = null;
        var anio = null;
        var duracion= null;
        var fecha_estreno = null;
        var calificacion = {'calificacion': $('.calificacion').val()};
        var sinopsis = null;
        var genero = null;
        var actor = [];
        var papel = [];
        var listaAc = [];
        var listaPa = [];
        var objActor = null;
        var t = null;
        var listaTA = [];
        for (let i = 0; i < obj.length; i++) {
            titulo.push(obj[i].titulo);
        }
        $('input').blur(function(event){
            var evento = event.currentTarget;
            if ($(evento).val()== ""){
                ti=null;
                anio = null;
                duracion = null;
                fecha_estreno = null;
                select = 'small#'+$(evento).attr('id');
                $(select).attr('class','text-danger');
                $(select).text('Este campo es obligatorio');
                $(evento).css('border-style','solid');
                $(evento).css('border-color','red');
                if ($(evento).attr('class') == 'form-control actores'){
                    actor.removeItem($(evento).attr('id'));
                }
                if ($(evento).attr('class') == 'form-control papeles'){
                    papel.removeItem($(evento).attr('id'));
                }
            }
            else {
                $(select).text('');
                $(evento).css('border-style','solid');
                $(evento).css('border-color','green');
                if ($(evento).attr('class') == 'form-control actores'){
                    actor.push($(evento).attr('id'));
                }
                if ($(evento).attr('class') == 'form-control papeles'){
                    papel.push($(evento).attr('id'));
                }
                if ($(evento).attr('id') == 'titulo'){
                    for (let i = 0; i < titulo.length; i++) {
                        if(titulo[i] != $(evento).val()){

                            $(select).text('');
                            $(evento).css('border-style','solid');
                            $(evento).css('border-color','green');
                            ti={'titulo':$(evento).val()};
                        }
                        else{
                            t = titulo[i];
                        }
                    }
                    if(t == $(evento).val()){
                        ti=null;
                        $(select).attr('class','text-danger');
                        $(select).text('Esta pelicula ya existe');
                        $(evento).css('border-style','solid');
                        $(evento).css('border-color','red');
                    }
                }
                if ($(evento).attr('id') == 'anio'){
                    validarAño($('input#anio').val());
                    if ($(select).text()==''){
                        anio = {'anio': $('input#anio').val()};
                    }
                }
                if ($(evento).attr('id') == 'duracion'){
                    var min = $('input#duracion').val().split(':');
                    minuto = (min[0]/60)+min[1];  
                    duracion = {'duracion':minuto};
                }
                if ($(evento).attr('id') == 'fecha'){
                    var parte = $('input#fecha').val().split('/');
                    var mes = covertirMes(parte[1]);
                    fecha = parte[0] + 'de mes de' + parte[2]; 
                    fecha_estreno = {'fecha' : fecha};
                }
                if ($(evento).attr('id') == 'genero'){
                    genero = {'genero' : $(evento).val('')};
                }
                $('input.actor').blur(function(event){
                    var evento = event.currentTarget;
                    select = 'small#'+$(evento).attr('id');
                    if ($(evento).val() != ''){
                        $(select).text('');
                        $(evento).css('border-style','solid');
                        $(evento).css('border-color','green');
                        actor.push($(evento).attr('id'));
                    } 
                    else {
                        if ($(evento).val() == ''){
                            $(select).attr('class','text-danger');
                            $(select).text('Este campo es obligatorio');
                            $(evento).css('border-style','solid');
                            $(evento).css('border-color','red');
                            actor.removeItem($(evento).attr('id')); 
                        }
                    }
                });
                $('input.papel').blur(function(event){
                    var evento = event.currentTarget;
                    select = 'small#'+$(evento).attr('id');
                    // alert($(evento).val());
                    if ($(evento).val() != ''){
                        $(select).text('');
                        $(evento).css('border-style','solid');
                        $(evento).css('border-color','green');
                        papel.push($(evento).attr('id'));
                    } 
                    else {
                        if ($(evento).val() == ''){
                            $(select).text('Este campo es obligatorio');
                            $(evento).css('border-style','solid');
                            $(evento).css('border-color','red');
                            papel.removeItem($(evento).attr('id'));
                            
                        }
                    }
                });
            }
        });
        $('textarea').blur(function(){
            if ($('textarea').val()== ""){
                $('small#sinopsis').attr('class','text-danger');
                $('small#sinopsis').text('Este campo es obligatorio');
                $('textarea').css('border-style','solid');
                $('textarea').css('border-color','red');
                sinopsis = null;
            }
            else {
                $('small#sinopsis').text('');
                $('textarea').css('border-style','solid');
                $('textarea').css('border-color','green');
                sinopsis = {'sinopsis':$('textarea').val()};
            }
        });
        $('select.mode').click(function(){
            if ($('select.mode').val()== 'url'){
                $('small#mode').text('Asegurate de poner la imagen en la carpeta imagen');
                $('.formato').show();
            }
            else{
                if ($('select.mode').val()== 'http'){
                    $('small#mode').text('');
                    $('.formato').hide();
                }
            }
            
        });
        $('input:checkbox').click(function(event){
            var evento = event.currentTarget;
            if( $(evento).prop('checked') ) {
                valor = $(evento).val();
                lista.push(valor);
            }
            else{
                var attr = $(evento).attr('id');
                removeItemFromArr(lista,attr);
                var re = '#h'+attr
                $(re).remove();
            }
        });
        $('.calificacion').click(function(){
            calificacion={'calificacion': $('.calificacion').val()}
        });
        Array.prototype.unique=function(a){
            return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
        });
        $('input.insert').click(function(){
            listaAc = actor.unique();
            listaPa = papel.unique();
            listaPa.sort();
            listaAc.sort();
            var c = null;
            var p = null;
            for (let i = 0; i < listaPa.length; i++) {
                c= listaAc[i].substring(2,3);
                p= listaPa[i].substring(2,1);
                if (c != p){
                    listaAc.removeItem(listaAc[i]);
                    listaPa.removeItem(listaPa[i]);
                } 
            }
            for (let i = 0; i < listaAc.length; i++) {
                c = 'input#'+listaAc[i];
                p = 'input#'+listaPa[i];
                var elemento = $(c).val()+" "+'(' + $(b).val() + ')' ;
                listaTA.push(elemento);
            }

        });
        
    });
    function removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
    function validarAño(n){
        patron = /\d{4}/;
        if (patron.test(n) && n >= 1890){
            $('small#anio').text('');
        } 
        else{
            $('small#anio').attr('class','text-danger');
            $('input#anio').css('border-style','solid');
            $('input#anio').css('border-color','red');
            $('small#anio').text("El año debe de ser un número con 4 dígitos.");
        }
    }
    function covertirMes(n){
        mes = ["enero", "febrero", "marzo", "abril", ".ayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        num_mes = [01,02,03,04,05,06,07,08,09,10,11,12];
        num = 0;
        for (let i = 0; i < num_mes.length; i++) {
            if (num_mes[i] == n){
                num = n;
            }
        }
        for (let i = 0; i < mes.length; i++) {
            if (mes[i]==num){
                return mes[i];
            }            
        }
    }
    Array.prototype.removeItem = function (a) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == a) {
                for (var i2 = i; i2 < this.length - 1; i2++) {
                    this[i2] = this[i2 + 1];
                }
                this.length = this.length - 1;
                return;
            }
        }
    };
});