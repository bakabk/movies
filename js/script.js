var saveMovie = document.forms.save__movie;
var buttonSubmit = document.querySelector('.form__movie_submit');
var form__movie_text = document.querySelector('.form__movie_text');
var rate_background = document.querySelector('.rate_background');

var grid = document.getElementById('table__grid');
var search_field = document.querySelector('.search-field');
var rate;
var MOVIES = []; // изначально пустой массив фильмов
var moviesGenre = ['аниме', 'биографический', 'боевик', 'вестерн', 'военный', 'детектив', 'детский', 'документальный', 'драма', 'исторический', 'кинокомикс', 'комедия', 'концерт', 'короткометражный', 'криминал', 'мелодрама', 'мистика', 'музыка', 'мультфильм', 'мюзикл', 'научный', 'приключения', 'реалити-шоу', 'семейный', 'спорт', 'ток-шоу', 'триллер', 'ужасы', 'фантастика', 'фильм-нуар', 'фэнтези', 'эротика'];
var dateNow = new Date();
var yearNow = dateNow.getFullYear(); // сегодняшняя дата, из расчета что все фильмы добавленные в базу уже выпущены
var firstMovie = 1895; // год первого созданного фильма
///////////////////////////////////////////////////////

// Заполняем год и жанр в форме ввода
(function() {
    for (var i = 0; i < moviesGenre.length; i++) {
        var option = new Option(moviesGenre[i], moviesGenre[i]);
        saveMovie.elements.movie_genre.appendChild(option);
    };

    for (var i = yearNow; i > firstMovie; i--) {
        var option = new Option(i, i);
        saveMovie.elements.movie_year.appendChild(option);
    }
})();
///////////////////////////////////////////////////////

// Функция для заполнения таблици из базы фильмов
function fillTableMovies(ObjMovies) {
    var tbody = grid.getElementsByTagName('tbody')[0];
    grid.removeChild(tbody);
    tbody.innerHTML = '';

    ObjMovies.forEach(function(element, index) {
        tbody.innerHTML += '<tr>' +
            '<td>' + element['movie_title'] + '</td>' +
            '<td>' + element['movie_genre'] + '</td>' +
            '<td>' + element['movie_year'] + '</td>' +
            '<td class="table__grid__rate_background" data-movie_rate="' + element['movie_rate'] + '">' +
            '<div class="table__grid__rate_bar" style="width:' + element['movie_rate'] * 20 + '%' + '"></div></td></tr>';
    });

    grid.appendChild(tbody);
};
///////////////////////////////////////////////////////

// Выставляем рейтинг нового фильма
// Вычисляем расстояние и рисуем звезды в форме
rate_background.onclick = set_rate;

function set_rate(e) {
    e = e || window.event;
    var el = e.currentTarget;

    var coordEl = el.getBoundingClientRect();
    var coordClick = e.clientX - coordEl.left;
    rate = Math.ceil(coordClick / el.clientWidth * 5);

    el.children[0].style.width = rate * 20 + '%';
    drawRate(rate, el);
}

// Функция рисования звезд в таблице
function drawRate(rate, element) {
    element.children[0].style.width = rate * 20 + '%';
}
///////////////////////////////////////////////////////

// Сортируем таблицу в зависимости от TH(только в 1 сторону)
grid.onclick = function(e) {
    e = e || window.event;
    if (e.target.tagName != 'TH') return;

    // Если TH -- сортируем
    sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
};

function sortGrid(colNum, type) {
    var tbody = grid.getElementsByTagName('tbody')[0];

    // Составить массив из TR
    var rowsArray = [].slice.call(tbody.rows);

    // определить функцию сравнения, в зависимости от типа
    var compare;

    switch (type) {
        case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
        case 'rate':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].dataset.movie_rate > rowB.cells[colNum].dataset.movie_rate ? 1 : -1;
            };
            break;
    }

    // сортировать
    rowsArray.sort(compare);

    // Убрать tbody из большого DOM документа для лучшей производительности
    grid.removeChild(tbody);

    // добавить результат в нужном порядке в TBODY
    // они автоматически будут убраны со старых мест и вставлены в правильном порядке
    for (var i = 0; i < rowsArray.length; i++) {
        tbody.appendChild(rowsArray[i]);
    }

    grid.appendChild(tbody);
}
////////////////////////////////////////////////////////

// Функция поиска фильма по его названию
function filterMovies() {
    var searchQuery = search_field.value.toLowerCase();

    var displayMovies = MOVIES.filter(function(index) {
        var searchValue = index.movie_title.toLowerCase();

        return searchValue.indexOf(searchQuery) !== -1;
    });

    fillTableMovies(displayMovies);
}

// Ловим события изменения формы для поиска
search_field.onkeyup = search_field.oninput = filterMovies;
search_field.oninput = filterMovies;
search_field.onpropertychange = function() {
    if (event.propertyName == "value") filterMovies();
}
filterMovies.oncut = function() {
    setTimeout(filterMovies, 0); // на момент oncut значение еще старое
};
////////////////////////////////////////////////////////

// Проводим валидацию формы ввода
buttonSubmit.onclick = function(e) {
    var validete = 0;
    saveMovie.elements.movie_title.style.borderColor = '';
    saveMovie.elements.movie_genre.style.borderColor = '';
    saveMovie.elements.movie_year.style.borderColor = '';
    form__movie_text.style.color = '';

    if (!saveMovie.elements.movie_title.value) {
        validete = 1
        saveMovie.elements.movie_title.style.borderColor = 'red';
    };

    if (saveMovie.elements.movie_genre.value == 'Жанр') {
        validete = 1
        saveMovie.elements.movie_genre.style.borderColor = 'red';
    } else {
        var genreFlag = 0;
        for (var i = 0; i < moviesGenre.length; i++) {
            if (saveMovie.elements.movie_genre.value == moviesGenre[i]) {
                genreFlag = 1;
                break;
            };
        };

        if (genreFlag == 0) {
            validete = 1
            saveMovie.elements.movie_genre.style.borderColor = 'red';
        }
    };

    if ((saveMovie.elements.movie_year.value == 'Год') || ((saveMovie.elements.movie_year.value < firstMovie) || (saveMovie.elements.movie_year.value > yearNow))) {
        validete = 1
        saveMovie.elements.movie_year.style.borderColor = 'red';
    };

    if (!rate) {
        validete = 1
        form__movie_text.style.color = 'red';
    };

    if (!validete) {
        var formReady = {
            movie_title: saveMovie.elements.movie_title.value,
            movie_genre: saveMovie.elements.movie_genre.value,
            movie_year: saveMovie.elements.movie_year.value,
            movie_rate: rate,
        };

        saveMovie.elements.movie_title.value = null;
        saveMovie.elements.movie_genre.value = saveMovie.elements.movie_genre.options[0].value;
        saveMovie.elements.movie_year.value = saveMovie.elements.movie_year.options[0].value;
        rate = null;

        drawRate(rate, rate_background);

        // Отправляем Ajax на добавление в базу новый фильм и возвращаем новый список фильмов
        requestMovie(formReady);

        // Заполняем таблицу с фильмами полученными из базы
        fillTableMovies(MOVIES);
    };
};
////////////////////////////////////////////////////////

// Функция с колбеком для Ajax запроса
function request(callback, obj) {
    var req = getXmlHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState != 4) return;
        var responseText = String(req.responseText);

        callback(responseText);
    };
    req.open(obj.method, obj.url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(obj.send);
};

// Функция для подготовки Ajax запроса
function requestMovie(data) {
    var ticket = {
        request: 'read_db_movies',
        data: 0
    };

    // Если заполнили форму, то передаем объект с данными фильма, если нет 0
    if (data) ticket.data = data;

    var json = JSON.stringify(ticket);

    // Объект, для .OPEN Ajax
    var requestObj = { send: json, url: 'http://nado.pp.ua/filiatix/movies.php', method: 'POST' };

    // Вызываем Ajax зпрос
    request(movieReq, requestObj);

    // Ответ на Ajax запрос
    function movieReq(text) {
        var data = JSON.parse(text);

        // Полученные фильмы передаем в общий массив
        MOVIES = data;

        // Заполняем таблицу
        fillTableMovies(MOVIES);
    };
};

requestMovie();