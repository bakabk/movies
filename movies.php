<?php 
    //mysql config
    $mysql_password = '';
    $mysql_user = '';
    $mysql_host = 'localhost';
    $my_database = '';

//Создаем пустой массив для добавления выбранных видео из базы
    $ticket = [];

    $rawPost = file_get_contents('php://input');

// Если данные были переданы...
    if ($rawPost){
        // Разбор пакета JSON
        $requestJs = json_decode($rawPost);

        if ($requestJs->request == 'read_db_movies'){

            $link = mysqli_connect("$mysql_host","$mysql_user","$mysql_password") or die('Не удалось подключиться'.mysqli_connect_error());
            mysqli_select_db($link, "$my_database") or die('Не удалось выбрать базу данных');

            if ($requestJs->data){
                //Выполняем запрос на добавление
                $query = "INSERT INTO `filiatix`.`movies` (movie_title, movie_genre, movie_year, movie_rate) VALUES ('".$requestJs->data->movie_title."','".$requestJs->data->movie_genre."','".$requestJs->data->movie_year."','".$requestJs->data->movie_rate."')";
                $result = mysqli_query($link, $query) or die('Запрос не удался:'.mysqli_error());
            }

            //Выполняем запрос на чтение данных
            $query = "SELECT  id, movie_title, movie_genre, movie_year, movie_rate FROM `filiatix`.`movies`";
            $result = mysqli_query($link, $query) or die('Запрос не удался:'.mysqli_error());

            while( $row = mysqli_fetch_assoc($result) ){
                $arr = array('id'=> $row['id'], 'movie_title' => $row['movie_title'], 'movie_year' => $row['movie_year'], 'movie_genre' => $row['movie_genre'], 'movie_rate' => $row['movie_rate']);
                array_push($ticket, $arr);
            } 

            /* Освобождаем используемую память */
            mysqli_free_result($result); 
            /* Закрываем соединение */
            mysqli_close($link); 
        }
    }

// Заголовки ответа
header('Content-type: text/plain; charset=utf-8');
header("Access-Control-Allow-Origin: *");
// Access-Control-Allow-Origin: http://domain.ru 
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));
// Возвращаем ответ
echo json_encode($ticket, JSON_UNESCAPED_UNICODE);

?>