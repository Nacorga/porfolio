<?php

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);

$fecha = time();
$fechaFormateada = date("j/n/Y", $fecha);

$correoDestino = "hello@nacorga.com";

//Formateo el asunto del correo
$asunto = "NaCorGa new message";
 
//Formateo el cuerpo del correo
$cuerpo = "<b>Enviado por:</b> " . $name . " el día " . $fechaFormateada . "<br>" . "<b>E-mail:</b> " . $email . "<br>" . "<b>Comentario:</b> " . $message;

$cabeceras = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Envío el mensaje
$enviado = mail( $correoDestino, $asunto, $cuerpo, $cabeceras);

?>