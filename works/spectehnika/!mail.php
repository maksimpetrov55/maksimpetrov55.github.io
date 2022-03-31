<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$input1 = $_POST['calc_phone'];
$input2 = $_POST['calc_data'];

//$mail->SMTPDebug = 3;                                                       // Enable verbose debug output

//$mail->isSMTP();                                                            // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';                                               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                                                       // Enable SMTP authentication
$mail->Username = 'mailpost1231@yandex.ru';                                      // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'sf51s65ff16se4f';                                             // Ваш пароль от почты с которой будут отправляться письма
//$mail->SMTPSecure = 'TLS';                                                    // Enable TLS encryption, `ssl` also accepted
$mail->SMTPSecure = 'ssl';                                                    // Enable TLS encryption, `ssl` also accepted
//$mail->Port = 587;                                                            // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->Port = 465;                                                            // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mailpost1231@yandex.ru');                                        // Имя почты с которой будут отправляться письма
$mail->addAddress('hello@mst-rent.ru');                                       // Имя почты на которую будут отправляться письма

$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта mvm24.ru';
$mail->Body    = '<br>Телефон: ' .$input1. '<br><br>Данные заказа:<br>' .$input2. '<br>' ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: index.html');
}


?>