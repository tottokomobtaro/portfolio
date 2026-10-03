<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mmm.shyan6102@gmail.com";  // 受信先（Gmail）
    $subject = "お問い合わせ";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $body = "名前: " . $name . "\n";
    $body .= "メール: " . $email . "\n\n";
    $body .= "内容:\n" . $message;

    // From に独自ドメインのアドレスを必ず使う
    $headers = "From: info@mobtaro.com\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $body, $headers)) {
        // thanks.html にリダイレクト
        header("Location: thanks.html");
        exit;
    } else {
        echo "送信に失敗しました。";
    }
}
?>
