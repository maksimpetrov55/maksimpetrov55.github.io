<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $input4 = $_POST['form_input4'];

// if ( $input4 != 0 ) {
//     exit();
// }

$input1 = $_POST['form_name'];
$input2 = $_POST['form_phone'];
$input3 = $_POST['form_email'];
$input4 = $_POST['form_text_1'];
// $input5 = $_POST['form_text_2'];
// $input6 = $_POST['form_text_3'];
// $input7 = $_POST['form_text_4'];
// $input8 = $_POST['form_text_5'];
// $input9 = $_POST['form_text_6'];
// $input10 = $_POST['form_text_6'];



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
$mail->addAddress('info@mkm39.ru.com');                           // Кому будет уходить письмо

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

$mail->Subject = 'Заявка с сайта МКМ';
//$mail->Body    = '<br>Имя: ' .$input1. '<br>Телефон: ' .$input2. '<br>Email: ' .$input3. '<br>Text: ' .$input5. '<br>' .$input6. '<br>' .$input7. '<br>' .$input8. '<br>' .$input9. '<br>' ;
$mail->Body    = '<br>Имя: ' .$input1. '<br>Телефон: ' .$input2. '<br>Email: ' .$input3. '<br>Text: ' .$input4. '<br>';
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    header('location: index.html#tnks');
}


?>