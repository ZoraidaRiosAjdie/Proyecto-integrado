<?php
require_once("funcion.php"); 
require_once("phpDocumentor.phar");
$wsdl = new WSDLDocument( "Funcion", "http://localhost/pruebaPHPDocumentor/service.php", "http://localhost/pruebaPHPDocumentor" ); 
echo $wsdl->saveXML();