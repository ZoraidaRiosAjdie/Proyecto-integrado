<?php
    $url="http://localhost/pruebaPHPDocumentor/service.php"; 
    $uri="http://localhost/pruebaPHPDocumentor"; 
    $cliente = new SoapClient(null,array('location'=>$url,'uri'=>$uri)); 
    $getPVP = $cliente->prueba(); 