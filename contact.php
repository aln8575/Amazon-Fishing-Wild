<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/*
====================================
PHPMailer
====================================
*/

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

/*
====================================
CONFIG PRIVADA
ARQUIVO FORA DO public_html
====================================
*/

$config = require __DIR__ . '/../.env.php';

/*
====================================
ACEITA SOMENTE POST
====================================
*/

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    header("Location: index.html");
    exit;
}

/*
====================================
DADOS FORMULÁRIO
====================================
*/

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

/*
====================================
ANTI SPAM
====================================
*/

if (!empty($_POST["_honeypot"])) {

    die("Spam detected.");
}

/*
====================================
VALIDAÇÕES
====================================
*/

if ($name === "" || $email === "" || $message === "") {

    die("Please fill in all fields.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    die("Invalid email address.");
}

/*
====================================
PHPMailer
====================================
*/

$mail = new PHPMailer(true);

try {

    $mail->CharSet = "UTF-8";

    /*
    ====================================
    SMTP HOSTINGER
    ====================================
    */

    $mail->isSMTP();

    $mail->Host = "smtp.hostinger.com";

    $mail->SMTPAuth = true;

    /*
    ====================================
    DADOS PRIVADOS
    ====================================
    */

    $mail->Username = $config['SMTP_USERNAME'];

    $mail->Password = $config['SMTP_PASSWORD'];

    /*
    ====================================
    SSL
    ====================================
    */

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

    $mail->Port = 465;

    $mail->Timeout = 10;

    /*
    ====================================
    REMETENTE
    ====================================
    */

    $mail->setFrom(
        $config['SMTP_USERNAME'],
        "Amazon Fishing Wild"
    );

    /*
    ====================================
    DESTINO
    ====================================
    */

    $mail->addAddress(
        $config['SMTP_USERNAME'],
        "Amazon Fishing Wild"
    );

    /*
    ====================================
    REPLY TO
    ====================================
    */

    $mail->addReplyTo($email, $name);

    /*
    ====================================
    EMAIL HTML
    ====================================
    */

    $mail->isHTML(true);

    $mail->Subject = "New Contact Request - Amazon Fishing Wild";

    /*
    ====================================
    SEGURANÇA HTML
    ====================================
    */

    $safeName = htmlspecialchars(
        $name,
        ENT_QUOTES,
        "UTF-8"
    );

    $safeEmail = htmlspecialchars(
        $email,
        ENT_QUOTES,
        "UTF-8"
    );

    $safeMessage = nl2br(
        htmlspecialchars(
            $message,
            ENT_QUOTES,
            "UTF-8"
        )
    );

    /*
    ====================================
    TEMPLATE EMAIL
    ====================================
    */

    $mail->Body = "

    <div style='
        font-family: Arial, sans-serif;
        background:#f4f1ea;
        padding:40px;
    '>

      <div style='
          max-width:700px;
          margin:auto;
          background:#ffffff;
          border-radius:20px;
          overflow:hidden;
          border:1px solid #ddd;
      '>

        <div style='
            background:#122620;
            color:#f4d58d;
            padding:30px;
        '>

          <h2 style='margin:0;'>
            New Contact Request
          </h2>

          <p style='
              margin-top:10px;
              color:#f3eee4;
          '>
            Amazon Fishing Wild Website
          </p>

        </div>

        <div style='
            padding:30px;
            color:#122620;
        '>

          <p>
            <strong>Name:</strong>
            {$safeName}
          </p>

          <p>
            <strong>Email:</strong>
            {$safeEmail}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style='
              background:#f7f4ee;
              padding:20px;
              border-radius:12px;
              line-height:1.7;
          '>

            {$safeMessage}

          </div>

        </div>

      </div>

    </div>

    ";

    /*
    ====================================
    FALLBACK TEXTO
    ====================================
    */

    $mail->AltBody = "

    Name: {$name}

    Email: {$email}

    Message:
    {$message}

    ";

    /*
    ====================================
    ENVIAR
    ====================================
    */

    $mail->send();

    header("Location: thanks");

    exit;

} catch (Exception $e) {

    echo "

    <div style='
        font-family:Arial;
        padding:40px;
    '>

      <h2>Email Error</h2>

      <p>
        Message could not be sent.
      </p>

      <pre>
{$mail->ErrorInfo}
      </pre>

    </div>

    ";
}