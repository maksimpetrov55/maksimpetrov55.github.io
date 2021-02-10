<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$input1 = $_POST['form_name'];
$input2 = $_POST['form_phone'];
$input3 = $_POST['form_text'];


//$mail->SMTPDebug = 3;                                                       // Enable verbose debug output

//$mail->isSMTP();                                                            // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';                                               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                                                       // Enable SMTP authentication
$mail->Username = 'mailpost1231@yandex.ru';                                   // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'sf51s65ff16se4f';                                          // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                                                    // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                                            // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mailpost1231@yandex.ru');                                     // от кого будет уходить письмо?
$mail->addAddress('maksimpetrov55@yandex.ru');                                // Кому будет уходить письмо




$mail->isHTML(true);                                                          // Set email format to HTML

$mail->Subject = 'New order!';
$mail->Body    = '<br>Name: ' .$input1. '<br>Phone: ' .$input2. '<br>Order: ' .$input3. '<br>' ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: index.html');
}


?>