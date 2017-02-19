-- phpMyAdmin SQL Dump
-- version 4.6.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Фев 19 2017 г., 18:34
-- Версия сервера: 5.5.53-MariaDB
-- Версия PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `filiatix`
--

-- --------------------------------------------------------

--
-- Структура таблицы `movies`
--

CREATE TABLE `movies` (
  `id` int(10) NOT NULL,
  `movie_title` tinytext NOT NULL,
  `movie_genre` varchar(100) NOT NULL,
  `movie_year` smallint(4) NOT NULL,
  `movie_rate` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `movies`
--

INSERT INTO `movies` (`id`, `movie_title`, `movie_genre`, `movie_year`, `movie_rate`) VALUES
(1, 'Матрица', 'боевик', 1999, 5),
(2, 'Властелин колец', 'фэнтези', 2001, 4),
(3, 'Игра престолов', 'фэнтези', 2011, 5),
(16, 'Войны клонов', 'мультфильм', 2008, 3);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
