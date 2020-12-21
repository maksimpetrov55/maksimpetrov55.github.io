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
$mail->Username = 'mailprint1251@yandex.ru';                                  // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '3ui45gt3lig';                                              // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                                                    // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                                            // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mailprint1251@yandex.ru');                                    // от кого будет уходить письмо?
$mail->addAddress('8007755246@mail.ru');                                      // Кому будет уходить письмо

//$mail->addAddress('ellen@example.com');                                     // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');                               // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');                          // Optional name

    // for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
    //     $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
    //     $filename = $_FILES['userfile']['name'][$ct];
    //     if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
    //         $mail->addAttachment($uploadfile, $filename);
    //     } else {
    //         $msg .= 'Failed to move file to ' . $uploadfile;
    //     }
    // }

$mail->isHTML(true);                                                          // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '<br>Имя: ' .$input1. '<br>Email: ' .$input2. '<br>Телефон: ' .$input3. '<br>' ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: index.html');
}


?>