<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="shortcut icon" href="images/favicon.ico">
<title>mobtaro | CONTACT - 確認画面</title>
<meta name="description" content="mobtaroportfolio">
<meta name="keywords" content="tottokomobtaro,mobtaro,uchidayuri,内田有里,うちだゆり">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/style.css" <?php date_default_timezone_set('Asia/Tokyo'); echo date("ymdHi",filemtime("css/style.css")); ?>">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<script src="js/jquery-3.7.1.min.js" type="text/javascript"></script>
<script src="js/common.js" type="text/javascript"></script>
<script src="js/contact.js" defer></script>
</head>

<body id="home">
    <div id="wrapper">
        <header>
            <div class="nav">
                <div class="logo"><a href="index.html" alt="logo">mobtaro</a></div>
                <nav>
                    <ul>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="works.html">WORKS</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </nav>
            </div>    
            
            <!---ハンバーガーメニュー--->
            <nav class="menu">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li><a href="index.html">TOP</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="works.html">WORKS</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <!---ハンバーガーメニュー--->
            
        </header>

        <main class="contact_p">
            <h1>REVIEW</h1>

            <div class="contact">
                <form class="review_form" action="contact.php" method="post">
                    <p>NAME<br><?= htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8'); ?></p>
                    <p>EMAIL ADDRESS<br><?= htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8'); ?></p>
                    <p>MESSAGE<br><?= nl2br(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8')); ?></p>

                    <!-- hiddenで再送信用 -->
                    <input type="hidden" name="name" value="<?= htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8'); ?>">
                    <input type="hidden" name="email" value="<?= htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8'); ?>">
                    <input type="hidden" name="message" value="<?= htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8'); ?>">

                    <div class="buttons">
                        <button type="button" class="back" onclick="goBack()">&#8592; BACK</button>
                        <button type="submit" class="send">SEND</button>
                    </div>
                </form>
            </div>
        </main>

    </div><!---wrapper-->


<!-- JavaScriptで入力内容を保存して戻る -->
<script>
    const name = <?= json_encode($_POST['name']) ?>;
    const email = <?= json_encode($_POST['email']) ?>;
    const message = <?= json_encode($_POST['message']) ?>;

    // localStorageに保存
    localStorage.setItem('contact_name', name);
    localStorage.setItem('contact_email', email);
    localStorage.setItem('contact_message', message);

    function goBack() {
        window.location.href = "contact.html";
    }
</script>

    <footer>
        <p class="copy"><a href="index.html"><small>&copy; mobtaro</small></a></p>
        <div class="sns">
            <a href="https://x.com/mobtaroooo" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://github.com/tottokomobtaro" target="_blank" ><i class="fa-brands fa-github"></i></a>
        </div>
    </footer>

</body>
</html>
