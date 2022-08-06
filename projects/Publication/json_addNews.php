<?php

if ($_FILES['news_img']['error'] == 0) {

    if (0 < $_FILES['file']['error']) {
        echo 'Error: ' . $_FILES['file']['error'] . '<br>';
    } else {
        move_uploaded_file($_FILES['file']['tmp_name'], 'images/' . $_FILES['file']['name']);
    }

    $json = file_get_contents('json/news.json');
    $jsonArray = json_decode($json, true);

    $result = array(
        'title' => $_POST["title"],
        'content' => $_POST["content"],
        'imagePath' => 'images/' . $_FILES['file']['name']
    );

    $jsonArray["news"][] = $result;
    file_put_contents('json/news.json', json_encode($jsonArray, JSON_UNESCAPED_UNICODE));
    echo ('$dir');
}
