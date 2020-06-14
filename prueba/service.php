<?php
require_once 'funcion.php';
$uri="http://localhost/pruebaPHPDocumentor"; 
$server = new SoapServer(null,array('uri'=>$uri));
$server->setClass('Funcion');
$server->handle();