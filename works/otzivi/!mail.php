<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$input1 = $_POST['form_mail'];
$input2 = $_POST['form_phone'];
$input3 = $_POST['form_data'];

//$mail->SMTPDebug = 3;                                                       // Enable verbose debug output

//$mail->isSMTP();                                                            // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';                                               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                                                       // Enable SMTP authentication
$mail->Username = 'maxpv1@ya.ru';                                              // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '@@racdd3g9';                                    // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                                                    // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                                            // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('maxpv1@ya.ru');                                                // Имя почты с которой будут отправляться письма
$mail->addAddress('maksimpetrov55@yandex.ru');                                        // Кому будет уходить письмо

for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
    $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
    $filename = $_FILES['userfile']['name'][$ct];
    if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
        $mail->addAttachment($uploadfile, $filename);
    } else {
        $msg .= 'Failed to move file to ' . $uploadfile;
    }
}


$mail->isHTML(true);                                                          // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '<br>Почта: ' .$input1. '<br>Телефон: ' .$input2. '<br><br>Данные заказа:<br>' .$input3. '<br>' ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: index.html');
}


?>