<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Новости</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="/js/ajax.js"></script>
</head>

<body>
    <div class="container">
        <header class="header">
            <div class="news_formDiv">
                <form method="POST" action="" class="form_newsAdd" id="form_newsAdd" enctype="multipart/form-data">
                    <input type="text" name="title" class="news_title" id="news_title" placeholder="Название"></br>
                    <textarea name="content" class="news_content" id="news_content" cols="60" rows="5" placeholder="Текст для анонса"></textarea></br>
                    <label for="news_img">Выберите картинку</label>
                    <input type="file" name="news_img" class="news_img" id="news_img" placeholder="Изображение" accept=".jpg, .jpeg, .png"></br>
                    <button id="btn_addNews">Добавить</button>
                    <p id="result"></p>
                </form>
            </div>
        </header>
        <div class="content">
            <?
            $json = file_get_contents('json/news.json');
            $data = json_decode($json);

            foreach (array_reverse($data->news) as $res) {
                echo "<div class='content_block'>";
                echo "<h1 class='content_block_title'>" . $res->title . "</h1>";
                echo "<img class='content_block_img' src='" . $res->imagePath . "'>";
                echo "<p class='content_block_content'>" . $res->content . "</p>";
                echo "</div>";
            }
            ?>
        </div>


    </div>

</body>

</html>