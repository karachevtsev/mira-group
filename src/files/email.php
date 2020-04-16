<?php
    $recepient = "miragroupspzoo@gmail.com";
    $sitename = "MIRA-GROUP";

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $message = trim($_POST["message"]);

    $messageAll = "Имя: $name \nФамилия: $email \nТелефон: $phone \nСообщение: $message";

    $pagetitle = "Новая заявка с сайта \"$sitename\"";
    mail($recepient, $pagetitle, $messageAll, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
