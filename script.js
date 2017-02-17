// var name = 'Vasilii';
 // var admin = name;
 // alert(admin);

 // 'use strict';
 // var name = 'Vasilii';
 // var admin = name;
 // alert(admin);

 // var isPrompt = prompt('Your name', '');
 // if (isPrompt !== ''){alert("Your name is " + isPrompt)}
 // (isPrompt !== '') ? alert("Your name is " + isPrompt) : alert('vi nichego ne vveli');
 // var isConfirm = confirm('Да или нет?');
 // alert(isConfirm);

 // var age = prompt("Vash vozrst", 18);
 // var massage = (age <= 3) ? "Zdravstvyi malish" :
 // (age <= 18) ? "Hi" : (age <= 100) ? "zdravstvyite" : 'XZ';
 // alert(massage);

 // var browser = prompt('kakim browserom vi polsuetes', 'firefox');
 // (browser == 'firefox') ? (alert('ya ya')) : (alert('beee'));

 // if ("0") {
 // 	alert("chto to");
 // }

 // var jS = prompt("Kakovo ofic nazvanie javascript", "");

 // ( jS == "EcmaScript" ) ? ( alert("Yes") ) : ( alert(" Ne znaete? 'EcmaScript'! ") )

 // var someChislo = prompt("Vvedite chislo", "");
 // if (+someChislo > 0) {
 // 	alert("1");
 // } else if (+someChislo < 0) {
 // 	alert("-1");
 // } else if (+someChislo == 0) {
 // 	alert("0");
 // }

 // var login = prompt("Vvedite login", "");
 // if (login == 'Админ') {

 // 	var password = prompt("Vvedite parol", "");
 // 	if (password == 'Чёрный Властелин'){
 // 		alert('Dobro pozhalovat');
 // 	} else if (password == null) {
 // 		alert('Parol neveren');
 // 	} else {
 // 		alert('Vhod otmenen');
 // 	}
 	
 // } else if (login == null) {

 // 	alert('Vhod otmenen');
 // } else {
 // 	alert('Ya vas ne znayu');
 // }

 // if (a + b < 4) {
 //   result = 'Мало';
 // } else {
   // 	 result = 'Много';
 // }


 // var a = 3;
 // var b = 2;
 // // (a + b < 4) ? (result = 'Мало') : (result = 'Много');
 // result = (a + b < 4) ? 'Мало' : 'Много';
 // alert(result);

 // var message;

 // if (login == 'Вася') {
  	//  message = 'Привет';
 // } else if (login == 'Директор') {
  	//  message = 'Здравствуйте';
 // } else if (login == '') {
  	//  message = 'Нет логина';
 // } else {
  	//  message = '';
 // }

 // var message = '';
 // var login;
 
 // //login = 'Вася';
 // //login = 'Директор';
 // login = '';

  	//  		message = (login == 'Вася') ? 'Привет' :
  	//  		 (login == 'Директор') ? 'Здравствуйте' :
  	//  		 (login == '') ? 'Нет логина' :
  	//  		 '';

  	//  		alert(message);

   // var age = prompt("vvedite age", "");
   // if (age>=14 && age<=90){
   // 	alert(age);
   // } else {
   // 	alert('vozrast ne tot');
   // }

   // if (age <= 14 && age >= 90) 
   // if !(age>=14 && age<=90)

   // if ( null >= 0 && NaN == NaN || !(null == 0 || alert(4)) || alert(2) ){ alert(true)}



   //! "" + 1 + 0  //1	//10
 // "" - 1 + 0	//-1
 // true + false	//1
 // 6 / "3"	//2
 // "2" * "3"	//6
 //! 4 + 5 + "px"	//NaN	//"9px"
 //! "$" + 4 + 5	//NaN	//"$45"
 // "4" - 2	//2
 // "4px" - 2	//NaN
 // 7 / 0	//Infinity
 //! "  -9\n" + 5	//-4	//"-9\n5"
 // "  -9\n" - 5	//-14
 // 5 && 2	//2
 // 2 && 5	//5
 // 5 || 0	//5
 // 0 || 5	//5
 // null + 1	//1
 // undefined + 1	//NaN
 // null == "\n0\n"	//false
 // +null == +"\n0\n"	//true
 //! 3 + 5 + 10 + "кукушка" + 15 //"18кукушка15"

 
 // var i = 0;
 // while (++i < 5) alert( i );   
 // // 1 2 3 4

 // var i = 0;
 // while (i++ < 5) alert( i );
 // //1 2 3 4 5

 // for (var i = 0; i < 5; i++) alert( i );
 // // 0 1 2 3 4

 // for (var i = 0; i < 5; ++i) alert( i );
 // // 0 1 2 3 4

 //При помощи цикла for выведите чётные числа от 2 до 10.
 // for (var i = 2; i <= 10; i += 2) {
 // 	alert(i);
 // }

 // for (var i = 0; i < 3; i++) {
 		// 	 alert( "номер " + i + "!" );
 // }

 // var i = 0;
 // while (i<3){
 // 	alert( "номер " + i + "!" );
 // 	i++;
 // }

 // var isPrompt;
 // while (true){
 // 	isPrompt = prompt("vvedite chislo bolee 100", '');
 // 	console.log(isPrompt);
 // 	if(isPrompt>100) {break};
 // 	if(isPrompt===null) {break};
 // }
 // do{
 // 	isPrompt = prompt("Vvedite chislo, bolshee 100", 0);
 // } while (isPrompt <= 100 && isPrompt != null);


 // var i,j,flag, maxI;

 // maxI= prompt("vvedite max znachenie podscheta", 10);
 // nextPrime:
 // for (i = 2; i<=maxI; i++){

 // 	for (j = 2, flag = 0; j < i; j++){
 // 		// if(i%j == 0) {flag = 1};
 // 		if(i%j == 0) continue nextPrime;
 // 		//console.log('i='+i+'; j='+j+'; flag='+flag);
 // 	}

 // 	// if(flag == 1) {
 // 	// 	continue;
 // 	// } else {alert(i)}
 // 	alert(i);
 // }

		
 // switch (browser) {
 //   case 'IE':
 //     alert( 'О, да у вас IE!' );
 //     break;

 //   case 'Chrome':
 //   case 'Firefox':
 //   case 'Safari':
 //   case 'Opera':
 //     alert( 'Да, и эти браузеры мы поддерживаем' );
 //     break;

 //   default:
 //     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
 // }

 // var browser = prompt("vvedite vash browser", '');
 // if (browser == "IE") {
 //     alert( 'О, да у вас IE!' );
 // } else if ( browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera' ){
 // 	alert( 'Да, и эти браузеры мы поддерживаем' );
 // } else {
 // 	alert( 'Мы надеемся, что и в вашем браузере все ок!' )
 // }

 // var a = +prompt('a?', '');

 // if (a == 0) {
 //   alert( 0 );
 // }
 // if (a == 1) {
 //   alert( 1 );
 // }

 // if (a == 2 || a == 3) {
 //   alert( '2,3' );
 // }

 // switch(a){
 // 	case 0:
 // 		alert("0");
 // 		break;
 // 	case 1:
 // 		alert("1");
 // 		break;
 // 	case 2:
 // 	case 3:
 // 		alert( '2,3' );
 // 		break;
 // 	default:
 // 		alert("xz");

 // }

 // function count() {
 //   // переменные i,j не будут уничтожены по окончании цикла
 //   for (var i = 0; i < 3; i++) {
 //     var j = i * 2;
 //   }

 //   alert( i ); // i=3, последнее значение i, при нём цикл перестал работать
 //   alert( j ); // j=4, последнее значение j, которое вычислил цикл
 // }
	
 //   alert( i ); // i=3, последнее значение i, при нём цикл перестал работать
 //   alert( j ); // j=4, последнее значение j, которое вычислил цикл

 // function showMessage(from, text) {
 //   from = '**' + from + '**'; // меняем локальную переменную from
 //   alert( from + ': ' + text );
 // }

 // var from = "Маша";

 // showMessage(from, "Привет");

 // alert( from );

 // function checkAge(age) {
 //   if (age > 18) {
 //     return true;
 //   } else {
 //     return confirm('Родители разрешили?');
 //   }
 // }
 // var age = 9;
 // function checkAge(age) {
 //   return (age > 18) ? (true) : (confirm('Родители разрешили?'));		
 // }

 // var result = checkAge(age);
 // console.log(result);
 // var age = 19;
 // function checkAge(age) {
 //   return (age > 18) || (confirm('Родители разрешили?'));
 // }
 // console.log(checkAge(age));

 // function showMinNumber(num1, num2){
 // 	var result = (num1<num2) ? num1 : num2;
 // 	return result;
 // }

 // console.log(showMinNumber(12,-1));

 // var base = +(prompt("base=",""));
 // var exponent = +(prompt("exponent=",""));

 // function pow(x, n){
 // 	if ((x>0) && (n>0)){
 // 		var powNumber = Math.pow(x, n);
 // 	return powNumber;
 // 	} else {
 // 		return "chisla ne naturalnie";
 // 	}
 // }

 // var result = pow(base, exponent)
 // console.log(result);





 // function sayHi() {
 //   alert( "Привет" );
 // }

 // alert( sayHi ); // выведет код функции
 // use strict
 // var age = +prompt("Сколько вам лет?", 20);

 // if (age >= 18) {
 //   function sayHi() {
 //     alert( 'Прошу вас!' );
 //   }
 // } else {
 //   function sayHi() {
 //     alert( 'До 18 нельзя' );
 //   }
 // }

 // sayHi();

 // var age = prompt('Сколько вам лет?');

 // var sayHi = (age >= 18) ?
 //   function() { alert('Прошу Вас!');  } :
 //   function() { alert('До 18 нельзя'); };

 // sayHi();

	

 // function pow(x, n){
 // 	if ((x>0) && (n>0)){
 // 		var powNumber = Math.pow(x, n);
 // 	return powNumber;
 // 	} else {
 // 		return "chisla ne naturalnie";
 // 	}
 // }

 // function pow(x,n){
 // 	if (n!=1){
 // 		return x * pow(x, n-1);
 // 	} else {
 // 		return x;
 // 	}
 // }
 // alert(pow(2,3));

 // function sumTo(n){
 // 	var summ = 0;
 // 	for(var i = 1; i <= n; i++){
 // 		summ += i;
 // 	}
 // 	return summ;
 // }
 // alert(sumTo(100));

 // function sumTo(n){
 // 	var summ = 0;
 // 	if (n>1){
 // 		return summ = n + sumTo(n-1);
 // 	} else{
 // 		return 1;
 // 	}
 // }
 // alert(sumTo(3));

 // function sumTo(n){
 // 	var summ = ( n*(n+1) )/2;
 // 	return summ;
 // }
 // alert(sumTo(3)); 

 // function factorial(n){
 // 	var f = n;
 // 	if (n == 1) return 1;
 // 	f *= factorial(n-1);
 // 	return f;
 // }
 // alert(factorial(5)); 

 // function fib(n){
 // 	var f1 = 1;
 // 	var f2 = 1;
 // 	var f3;
 // 	for (var i = 3; i <= n; i++){
 // 		f3 = f1 + f2;
 // 		f1 = f2;
 // 		f2 = f3;
 // 	}
 // 	return f3;
 // }
 // alert(fib(7));


 // function fib(n){
 // 	return n <=1 ? n : fib(n-1) + fib(n-2);
 // }
 // alert(fib(7));


 // var f = function fib(n){
 // 	return n <=1 ? n : fib(n-1) + fib(n-2);
 // }
 // alert(f(7));

 

// var i = 0;
// while ( (i != 10) && (i < 30) ) {
//   i += 0.2;
//   console.log(i);
// }

// var a = +prompt("a=", 0);
// var b = +prompt("b=", 0);
// console.log(a+b);

// alert( 6.35.toFixed(20) );

// alert( (0.1 + 0.2 ).toFixed(1) + '$' );

// var decimal = prompt("decimal", "");

// function getDecimal(num){
// 	var splitNum = (""+num).split('.');
// 	return +("0."+splitNum[1]);
// }

// alert(getDecimal(decimal));

// var exp = prompt("exp=", "");

// function fibBinet(n){
// 	var f = (1 + Math.sqrt(5))/2;
// 	return Math.pow(f, n)/Math.sqrt(5) ;
// }

// alert(fibBinet(exp));

// function fib(n) {
//   var a = 1,
//     b = 0,
//     x;
//   for (i = 0; i < n; i++) {
//     x = a + b;
//     a = b
//     b = x;
//   }
//   return b;
// }

// alert(fib(exp));


// var randMax = prompt("max=", 1);

// function rMax(randMax){
// 	return Math.random() * randMax;
// }

// console.log(rMax(randMax));

// var randMin = prompt("min=", 0);
// var randMax = prompt("max=", 1);

// function rMax(randMax, randMin){
// 	return Math.random() * (randMax - randMin) + randMin;
// }

// console.log(rMax(randMax, randMin));

// var min = Math.round(prompt("min=", 0));
// var max = Math.round(prompt("max=", 1));

// function randomInteger(min, max){
// 	return Math.round((Math.random().toFixed(2) * 100 * (max + 1 - min) + min)/100);
// }

// console.log(randomInteger(min, max));


// function ucFirst(str){
// 	return str.charAt(0).toUpperCase() + str.substring(1);
// }

// alert(ucFirst(""));


 // function checkSpam(str){
 // 	 if ( str.toUpperCase().indexOf('viagra'.toUpperCase()) >= 0) return true;
 //  	 if ( str.toUpperCase().indexOf('XXX'.toUpperCase()) >= 0) return true;
 //  	 return false;
 //  }

 //alert(checkSpam('buy ViAgRA now'));
 //alert(checkSpam('free xxxxx'));
// alert('xxx'.toUpperCase().indexOf('xxx'.toUpperCase()));
 //alert(checkSpam('111222   1111111'));


// function truncate(str, maxlength){
// 	if ( str.length > maxlength ) {
// 		var newStr = str.slice( 0, ( maxlength - 3 ) ) + "...";
// 	} else {
// 		var newStr = str;
// 	}
// 	return newStr;
// }


// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хоте..."
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 10));
// truncate("Всем привет!", 20) = "Всем привет!"
// alert(truncate("Всем привет!", 20));

// "$120"

// function extractCurrencyValue(str){
// 	return +str.slice(1);
// }
// alert(extractCurrencyValue('$120'));

// var user = {};
// user.name = "Вася";
// console.log(user);
// user.username = "Петров";
// console.log(user);
// user.name = "Сергей";
// console.log(user);
// delete user.name;
// console.log(user);



// function isEmpty(obj) {
//   for (var code in obj) {
//   	return false;
//   }
//   return true;
// }

// var schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "подъём";

// alert( isEmpty(schedule) ); // false

// "use strict";

// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// var summ = 0;
// for (var key in salaries){
//   summ += salaries[key];
// }

// console.log(summ);
// //... ваш код выведет 650


// "use strict";

// var salaries = {
//   // "Вася": 100,
//   // "Петя": 300,
//   // "Даша": 250
// };

// var name = '';
// var max = 0;

// for (var key in salaries){
// 	if ( salaries[key] > max ) {
// 	 	name = key;
// 	 	max = salaries[key];
// 	}
// }

// (max != 0) ? alert(name) : alert('нет сотрудников');

// до вызова
// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(menu){
// 	for (var key in menu){
// 		if (isNumeric(menu[key])) {menu[key] = menu[key]*2}
// 	}
// return menu;
// }

// multiplyNumeric(menu);

// console.log(menu);


// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }


// var user = {
//   name: "Вася",
//   age: 30
// };

// var clone = {}; // новый пустой объект

// // скопируем в него все свойства user
// for (var key in user) {
//   clone[key] = user[key];
// }

// // теперь clone - полностью независимая копия
// clone.name = "Петя"; // поменяли данные в clone

// alert( user.name ); // по-прежнему "Вася"

// var goods = [1,2,3,4];

// var a = goods.length;

// console.log(goods[a-1]);

// var goods = [1,2,3,4];

// goods.push('Компьютер');

// alert(goods);


 // var ar = ['Джаз', 'Блюз'];
 // ar.push('Рок-н-Ролл');
 // ar[ar.length - 2] = 'Классика';
 // alert(ar.shift());
 // ar.unshift('Рэп', 'Регги');
 // alert(ar);

// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

// var rand = Math.floor(Math.random() * arr.length);

// alert(arr[rand]);


    // Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
    // Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
    // При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
    // Выводит сумму всех значений массива


// !isNaN(parseFloat(n)) && isFinite(n)


// var mass = [];

// while(true){
// 	var arr = prompt("arr=", 0);

// 	if (arr === '')  break;
// 	if (arr === null)  break;
// 	if (isNaN(arr)) break;


// 	mass.push(arr);
// }
// console.log(mass);

// var summ = 0;

// for (var i = 0; i < mass.length; i++){
// 	summ += +mass[i];
// }

// console.log(summ);


// var arr = [1,2,3,4,5,'test'];

// function find(arr, x){
// 	for (var i = 0; i < arr.length; i++){
// 		if (arr[i] === x) return i;
// 	}
// 	return -1;
// }

// alert(find(arr,1));

// создаем пустой массив и проверяем поддерживается ли indexOf
// if ([].indexOf) {

//   var find = function(array, value) {
//     return array.indexOf(value);
//   }

// } else {
//   var find = function(array, value) {
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] === value) return i;
//     }

//     return -1;
//   }

// }


// var arr = [5, 4, 3, 8, 2, 1, 0];

// var filtered = filterRange(arr, 1, 5);

// alert(filtered);

// function filterRange(arr, min, max){
// 	var newArr = [];
// 	for (var i = 0; i < arr.length; i++){
// 		if ((arr[i] >= min) && (arr[i] <= max)){
// 			newArr.push(arr[i])
// 			console.log(arr[i])
// 		}
// 	}
// 	return newArr;
// }



// Целое число, большее 1, называется простым, если оно не делится нацело
// ни на какое другое, кроме себя и 1.

// Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до
// n выглядит так:

//     Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
//     Пусть p=2, это первое простое число.
//     Зачеркнуть все последующие числа в списке с разницей в p, т.е.
//     2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
//     Поменять значение p на первое не зачеркнутое число после p.
//     Повторить шаги 3-4 пока p2 < n.
//     Все оставшиеся не зачеркнутыми числа – простые.

// Посмотрите также анимацию алгоритма.

// Реализуйте «Решето Эратосфена» в JavaScript, используя массив.

// Найдите все простые числа до 100 и выведите их сумму.

// function delNums(n){

// }

// var obj = {
//   className: 'open menu'
// };

// function addClass(obj, x){
// 	var arr = obj.className.split(' ');

// 	for(var i = 0; i < arr.length; i++){
// 		if (arr[i] == x) {
// 			return 0;
// 		}
// 	}

// 	arr.push(x);

// 	obj.className = arr.join(" ");
// };

// addClass(obj, 'x');

// alert(obj.className);

// Напишите функцию camelize(str), которая преобразует строки вида 
// «my-short-string» в «myShortString».

// function camelize(str){
// 	var arr = str.split("-");

// 	for (var i = 1; i < arr.length; i++){
// 		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
// 		// console.log(arr[i]);
// 		// console.log(arr[i][0].toUpperCase());
// 		// console.log(arr[i].slice(1));
// 	}

// 	return arr.join('');
// }

// alert(camelize('my-short-string'));  //myShortString
// alert(camelize('list-style-image'));
// alert(camelize('-webkit-transition'));


// var obj = {
//   className: 'open menu one class me'
// };

// function removeClass(obj, cls){
// 	var arr = obj.className.split(" ");

// 	for (var i = 0; i < arr.length; i++){
// 		if (arr[i] === cls) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}

// 	return obj.className = arr.join(" ");
// }

// console.log(removeClass(obj, "menu"));
// console.log(removeClass(obj, 'open')); 
// console.log(removeClass(obj, 'me'));

// var arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b){
// 	for (var i = 0; i < arr.length; i++){
// 		if ( (arr[i] < a) || (arr[i] > b) ){
// 			arr.splice(i--,1);
// 		}
// 	}
// }

// filterRangeInPlace(arr, 1, 4);
// console.log(arr);


// var arr = [5, 2, 1, -10, 8];

// function fnSort(a,b){
// 	return b-a;
// }

// arr.sort(fnSort);

// alert( arr ); // 8, 5, 2, 1, -10


// var arr = ["HTML", "JavaScript", "CSS"];
// var arrSorted = [];

// arrSorted = arr.slice().sort();


// alert( arrSorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// var arr = [1, 2, 3, 4, 5];

// function rnd(a,b){
// 	return Math.random() - 0.5;
// }

// arr.sort(rnd);

// alert( arr );

// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya , masha , vovochka ];

// function sortAge(a,b){
// 	return a.age - b.age;
// }

// people.sort(sortAge);

// for(var i = 0; i < people.length; i++){
// 	alert(people[i].name);
// }

// var list = {
//   value: 1,
//   next: {
//   	value: 2,
//   	next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };



// function printList(tmp){
// 	var tmp = list;

// 	while(tmp){
// 		alert(tmp.value);
// 		tmp = tmp.next;
// 	}
// }

// printList(list);


// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// // alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

// function  aclean(arr){
// 	var newArr = {};

// 	for (var i = 0; i < arr.length; i++){
// 		sorted = arr[i].toLowerCase().split('').sort().join("");
// 		newArr[sorted] = arr[i];
// 	}
	
// 	var result = [];

// 	for (var key in newArr){
// 		result.push(newArr[key]);
// 	}
// 	return result;
// }


// alert(aclean(arr));


// function unique(arr) {
//   var newArr = {};

//   for (var i = 0; i < arr.length; i++ ){
//   	string = arr[i];
//   	newArr[string] = string;
//   	// console.log(string);
//   }

//   var result = [];

//   for (var key in newArr){
//   	result.push(newArr[key]);
//   }

//   return result;
// }

// var strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", "8-()"
// ];

// alert( unique(strings) ); // кришна, харе, 8-()


// var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = arr.map(function(len){
// 	return len.length;
// });

// alert( arrLength ); // 4,5,2,5


// function f(x) {
//   "use strict"; // для браузеров с поддержкой строгого режима

//   arguments[0] = 5;
//   alert( x ); // не 5, а 1! Переменная "отвязана" от arguments
// }

// f(1);

// function f(x) {
//   alert( arguments.length ? 1 : 0 );
// }

 // f(undefined);
// f();

// function sum(){
// 	var summ = 0;

// 	for(var i =0; i < arguments.length; i++ ){
// 		summ += arguments[i];
// 	}

// 	return summ;
// }

// alert(sum(1,2,3));


// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;

// function walkIn(arr) {
//   for (var key in arr) arr[key]++;
// }

// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) arr[i]++;
// }

// function bench(f) {
//   for (var i = 0; i < 10000; i++) {f(arr); console.log(arr[i]);};
// }

// console.time("All Benchmarks");

// console.time("walkIn");
// bench(walkIn);
// console.timeEnd("walkIn");

// console.time("walkLength");
// bench(walkLength);
// console.timeEnd("walkLength");

// console.timeEnd("All Benchmarks");



// 20 февраля 2012 года, 3 часа 12 минут

// var date = new Date(2012, 1, 20, 3, 12, 0, 0);

// document.write(date);

// function getWeekDay(date){
//   var day = date.getDay();
//   // var newDay;

//   // switch(day){
//   //   case 0 : newDay = "вс";
//   //     break;
//   //   case 1 : newDay = "пн";
//   //     break;
//   //   case 2 : newDay = "вт";
//   //     break;
//   //   case 3 : newDay = "ср";
//   //     break;
//   //   case 4 : newDay = "чт";
//   //     break;
//   //   case 5 : newDay = "пт";
//   //     break;
//   //   case 6 : newDay = "сб";
//   //     break;
//   // }

//   // return newDay;

//   var days = ['вс','пн','вт','ср','чт','пт','сб'];
// return days[day];
// }


// var date = new Date(2012,0,3);  // 3 января 2012
// alert( getWeekDay(date) );      // Должно вывести 'вт'


//  function getLocalDay(date){
//    var day = date.getDay();

//    // var newDay = [7,1,2,3,4,5,6];
//    //return newDay[day];
//    if (day == 0) day = 7;
//     return day;
//  }

//  var date = new Date(2012, 0, 1);  // 3 янв 2012
// alert( getLocalDay(date) );       // вторник, выведет 2


// function getDateAgo(date, days){
//   var newDate = new Date(date);
// newDate.setDate(newDate.getDate() - days)
//   return newDate;
// }

// var date = new Date(2015, 0, 2);

// alert(getDateAgo(date, 2));
// alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
// alert(date);


// function getLastDayOfMonth(year, month){
//   var lastDay = new Date(year, month+1, 0);

//   return lastDay.getDate();
// }

//  // getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
//  alert(getLastDayOfMonth(2012, 1));
//  alert(getLastDayOfMonth(2013, 5));



// function getSecondsToday(){
// // getHours(), getMinutes(), getSeconds(), getMilliseconds()
//   var date = new Date();
//   var seconds = date.getHours()*60*60 + date.getMinutes()*60 + date.getSeconds();

//   return seconds;
// }

// console.log(getSecondsToday());

// function  getSecondsToTomorrow(){
//   // var date = new Date();
//   // var seconds = date.getHours()*60*60 + date.getMinutes()*60 + date.getSeconds();
//   // var toToday = 24*3600 - seconds;

//   // return toToday;

//   //second realisation
//   var now = new Date();

//   var tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);

//   var diff = tomorrow - now;

//   return Math.round(diff/1000);
// }

// console.log(getSecondsToTomorrow());



// function formatDate(date){

//   var dd = date.getDate();
//   if (dd < 10) {dd = '0' + dd;}

//   var mm = date.getMonth()+1;
//   if (mm < 10) {mm = '0' + mm;}

//   var yy = date.getFullYear()%100;
//   if (yy < 10) {yy = '0' + yy;}
  
// return dd + '.' + mm + '.' + yy;
// }

// var d = new Date(2014, 0, 30); // 30 января 2014

// alert(formatDate(d));

// function test(){
// 	alert(window);

// 	window = 5;

// 	alert(window);
// }

// test();

/*Напишите функцию formatDate(date), которая выводит дату
 date в формате дд.мм.гг:

Например:

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'

P.S. Обратите внимание, ведущие нули должны присутствовать,
 то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.*/

// function formatDate(d){
//   var day = d.getDate();
//   if (day < 10) {day = '0' + day;}
//   // console.log(day);

//   var month = d.getMonth();
//   if (month < 10) {month = '0' + month;}
//   // console.log(month);

//   var year = d.getFullYear()%100;
//   if (year < 10) {year = '0' + year;}  
//   // console.log(year);
//   return day + '.' + month + '.' + year;
// }

// var d = new Date(2014, 0, 3); // 30 января 2014
// console.log( formatDate(d) ); // '30.01.14'
////////////////////////////////////////

// Напишите функцию formatDate(date), которая форматирует дату date так:

//     Если со времени date прошло менее секунды, то возвращает "только что".
//     Иначе если со времени date прошло менее минуты, то "n сек. назад".
//     Иначе если прошло меньше часа, то "m мин. назад".
//     Иначе полная дата в формате "дд.мм.гг чч:мм".

// Например:

// function formatDate(date) { /* ваш код */ }

// alert( formatDate(new Date(new Date - 1)) ); // "только что"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

// function formatDate(date){
//   var realDate = new Date();
//   var diff = (realDate - date);
//   // console.log(c);

//   if (diff < 1 * 1000) {return "только что";}
//   if (diff < 60 * 1000) {return diff/1000 + " сек. назад";}
//   if (diff < 3600 * 1000) {return Math.round( diff/(1000*60) ) + " мин. назад";}

//   var day = date.getDate();
//   if (day < 10) {day = '0' + day;}

//   var month = date.getMonth() + 1;
//   if (month < 10) {month = '0' + month;}

//   var year = date.getFullYear()%100;
//   if (year < 10) {year = '0' + year;}

//   var hour = date.getHours();
//   if (hour < 10) {hour = '0' + hour;}

//   var min = date.getMinutes();
//   if (min < 10) {min = '0' + min;}



//   return day + '.' + month + '.' + year + ' ' + hour + ':' + min;
// }

// var date = new Date(new Date - 86400 * 1000);

// console.log(formatDate(date));

////////////////////////////////////////
// sum(a)(b) = a+b.

// function sum(a){
//     return function(b){
// 		return a + b;
// 	}
// };

// alert(sum(1)(2)); // 3
// alert(sum(5)(-1)); // 4

///////////////////////////////////////////////////////

// function makeBuffer() {
// 	var buf = '';

// 	function makeBuffer(){
// 		if (arguments.length > 0){
// 			buf = buf + arguments[0];
// 		} else {
// 		return buf;
// 		}
// 	}

// 	makeBuffer.clear = function(){
// 		buf = '';
// 	}

// 	return makeBuffer;
// }

// var buffer = makeBuffer();

// console.log( buffer() );

// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');

// // получить текущее значение
// console.log( buffer() ); // Замыкания Использовать Нужно!

// var buffer2 = makeBuffer();
// buffer2(0);
// buffer2(1);
// buffer2(0);

// console.log( buffer2() ); // '010'

// buffer.clear();

// console.log( buffer() ); // ""



///////////////////////////////////////////////////

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// // // по полю name (Вася, Маша, Петя)
// // users.sort(function(a, b) {
// //   return a.name > b.name ? 1 : -1;
// // });

// // // по полю age  (Маша, Вася, Петя)
// // users.sort(function(a, b) {
// //   return a.age > b.age ? 1 : -1;
// // });


// function byField(field){
// 	return function(a,b){
// 		return a[field] > b[field] ? 1 : -1;
// 	}
// }


// users.sort(byField('name'));
// users.forEach(function(user){
// 	alert(user.name);
// });

// users.sort(byField('age'));
// users.forEach(function(user){
// 	alert(user.name);
// });

//////////////////////////////////////////////

// var arr = [1, 2, 3, 4, 5, 6, 7];

// alert(filter(arr, function(a) {
// 	return a % 2 == 0;
// })); // 2,4,6


// function filter(arr, func){
// 	var newArr = [];

// 	for (var i = 0; i < arr.length; i++){
// 		if (func(arr[i])) {newArr.push(arr[i])}
// 	}

//   return newArr;
// }

// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

// function filter(arr, func){
// 	var newArr = [];

// 	for(var i = 0; i < arr.length; i++){
// 		if (func(arr[i])){newArr.push(arr[i])}
// 	}

// 	return newArr;
// };


// function inBetween(a, b){
// 	return function(c){
// 		return (a <= c) && (c <= b);
// 	}
// }


// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2

// function filter(arr, func){
// 	var newArr = [];

// 	for(var i = 0; i < arr.length; i++){
// 		if (func(arr[i])) {newArr.push(arr[i])}
// 	}

// 	return newArr;
// }

// function inArray(someArray){
// 	return function(c){
// 		for (var i = 0; i < someArray.length; i++) {
// 			return someArray[i] == c;
// 		}
// 	}
// };


// var buffer = makeBuffer();


////////////////////////////////////////////
// var arr = [1, 2, 3, 4, 5, 6, 7];

// function filter(arr, func){
//   var newArr = [];

//   for (var i = 0; i < arr.length; i++){
//     if (func(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// alert(filter(arr, function(a) {
//   return a % 2 == 0
// })); // 2,4,6

// ////////////////////////////////////////////
// function makeArmy() {

//   var shooters = [];

//   for (var i = 0; i < 10; i++) {

//     var shooter = function me() {
//       alert( me.i );
//     };
//     shooter.i = i;

//     shooters.push(shooter);
//   }

//   return shooters;
// }

// var army = makeArmy();

// army[0](); // 0
// army[1](); // 1

// ////////////////////////////////////////////
// function makeArmy() {

//   var shooters = [];

//   for (var i = 0; i < 10; i++) {

//     var shooter = (function(x) {

//       return function() {
//         alert( x );
//       };

//     })(i);

//     shooters.push(shooter);
//   }

//   return shooters;
// }

// var army = makeArmy();

// army[0](); // 0
// army[1](); // 1

////////////////////////////////////////
// var massage = 'Hellow!!!!';


// +function(){
//   var massage = 'hi';

//   function al(){
//     console.log(massage);
//   }
//   al();
// }();

// function hi(){
//   console.log(massage);
// }


// hi();

////////////////////////////////////////

// var calculator = {
//   x: '',
//   y: '',

//   read: function(){
//     this.x = prompt('введите х', '');
//     this.y = prompt('введите y', '');
//   },

//   mul: function(){
//     return( +(this.x) * +(this.y) );
//   },

//   sum: function(){
//     return( +(this.x) + +(this.y) );
//   },
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// //////////////////////////////////////////////
// var ladder = {
//   step: 0,
//   up: function() { // вверх по лестнице
//     this.step++;
//     return this;
//   },
//   down: function() { // вниз по лестнице
//     this.step--;
//     return this;
//   },
//   showStep: function() { // вывести текущую ступеньку
//     alert( this.step );
//     return this;
//   }
// };

/////////////////////////////////////////////
// function sum(a){
// 	var summA = a;

// 	function f(b){
// 		summA += b;
// 		return f;
// 	}

// 	f.toString = function(){
// 		return summA;
// 	}

// 	return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15


// function Calculator(){
//   this.x = '';
//   this.y = '';

//   this.read = function(){
//     this.x = prompt('введите х', '');
//     this.y = prompt('введите y', '');
//     return this;
//   }

//   this.mul = function(){
//     return( +(this.x) * +(this.y) );
//   }

//   this.sum = function(){
//     return( +(this.x) + +(this.y) );
//   }
// };

// var calc = new Calculator();

// calc.read();
// alert(calc.sum());
// alert(calc.mul());

///////////////////////////////////////

// function Accumulator(startingValue){
//   this.value = +startingValue;

//   this.read = function(){
//     return this.value += +prompt('value = ',0);
//   }
// }

// var accumulator = new Accumulator(1);
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение

////////////////////////////////////////////

// function Calculator(){

//   this.calculate = function(str){
//     var method = str.split(' ');

//     if (method[1] === '+') {
//       return +method[0] + +method[2];
//     }

//     if (method[1] === '-') {
//       return +method[0] - +method[2];
//     }
//   }

//   // this.addMethod(name, func){
    
//   // }

// }

// var calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// var calc = new Calculator;

/////////////////////////////////////////////

// function User(fullName) {
//   this.fullName = fullName;

//   Object.defineProperties(this, {
//     firstName:{
//       get: function(){
//         return this.fullName.split(' ')[0];
//       },

//       set: function(value){
//         this.fullName = value + this.fullName.split(' ')[1];
//       }
//     },

//     lastName:{
//       get: function(){
//         return this.fullName.split(' ')[1];
//       },

//       set: function(value){
//         this.fullName = this.fullName.split(' ')[0] + value;
//       }

//     }    

//   });
// };

// var vasya = new User("Василий Попкин");

// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин

// // запись в lastName
// vasya.lastName = 'Сидоров';

// alert( vasya.fullName ); // Василий Сидоров

///////////////////////////////////////////////////////////////

// function Article() {
//   this.created = new Date();

//   Article.count();
// }

// Article.dates = [];

// Article.count = function(){
//     return this.dates.push(new Date());
// }


// Article.showStats = function(){
//   var i = this.dates.length;

//   console.log('Всего ' + this.dates.length + ', последняя ' + this.dates[i-1]);
// };


// new Article();
// new Article();
// Article.showStats();


// // Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)

/////////////////////////////////////////////////


// function sumArgs() {
// 	var args = [].slice.call(arguments);
// 	console.log(args);

//     return args.reduce(function(a, b) {
//     	return a + b;
//     });
// }

// console.log( sumArgs(1, 2, 3)); // 6

///////////////////////////////////////////////////

// function showFullName(){
// 	var args = [].slice.call(arguments);
// 	var name = args.sort();
//   return name;
// }
// console.log(showFullName(3,2,5));

///////////////////////////////////////////////////

// function applyAll(func){
//   var arg = [].slice.call(arguments,1);

//   return func.apply(this , arg);
//   // console.log(arg);
// }

// alert( applyAll(Math.max, 2, -2, 3) ); // 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2


// function f(a, b) {
//   alert( this );
//   alert( a + b );
// }

// // вместо
// // var g = bind(f, "Context");
// var g = f.bind("Context");
// g(1, 2); // Context, затем 3
///////////////////////////////////////////////

// var user = {
//   firstName: "Вася",
//   sayHi: function() {
//     alert( this.firstName );
//   }
// };

// setTimeout(function(){
// user.sayHi();}, 1000); // undefined (не Вася!)

// function f(){
//   alert( this );
// }

// function bind(func, context) {
//   return function() { // (*)
//     return func.apply(context, arguments);
//   };
// }

// // setTimeout(bind(f,'Vasya'), 1000); // undefined (не Вася!)



// function f(a, b) {
//   alert( this );
//   alert( a + b );
// }

// var g = bind(f, "Context");
// g(1, 2); // Context, затем 3

//////////////////////////////////////////////

// function bind(func, context /*, args*/) {
//   var bindArgs = [].slice.call(arguments, 2); // (1)
//   function wrapper() {                        // (2)
//     var args = [].slice.call(arguments);
//     var unshiftArgs = bindArgs.concat(args);  // (3)
//     return func.apply(context, unshiftArgs);  // (4)
//   }
//   return wrapper;
// }
////////////////////////////////////////////////

// function f() {
//   alert( this );
// }

// var user = {
//   // g: f.bind("Hello")
//   g: f.bind("Hello")
// }

// user.g();

// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;
// alert( sayHi.test ); // 5

// var bound = sayHi.bind({
//   name: "Вася"
// });

// alert( bound.test ); // что выведет? почему?

///////////////////////////////////////////////////

// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function() {
//     alert( this.login + ' вошёл в сайт' );
//   },

//   loginFail: function() {
//     alert( this.login + ': ошибка входа' );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginOk, this.loginFail);
//   }
// };

// user.checkPassword();

// var vasya = user;
// user = null;
// vasya.checkPassword();

////////////////////////////////////////////

// var a = {
//   name: 'Vasya',
//   age: 21,

//     valueOf: function(){
//     return this.age;
//   },

//   toString: function(){
//     return this.name;
//   },
// };

// alert( +a );
// alert( a + 1 );
// alert( a + "3" );


// var room = {
//   number: 777,

//   valueOf: function() { return this.number; },
//   toString: function() { return this.number; }
// };

// alert( +room );  // 777, вызвался valueOf

// delete room.valueOf; // valueOf удалён

// alert( +room );  // 777, вызвался toString

// var a = {
//   summa: function(y){
//     this.x += y;
//     return this;
//   }
// }



// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

///////////////////////////////////////////////////
// var obj = {};

// function A() {
//   return obj;
// }
// function B() {
//  return obj;
// }

// var a = new A;
// var b = new B;

// alert( a == b ); // true

///////////////////////////////////////////////////////

// function Calculator(){
//   this.arg1 = 0;
//   this.arg2 = 0;

//   this.read = function(){
//     this.arg1 = +prompt('arg1=', '0');
//     this.arg2 = +prompt('arg2=', '0');
//   }

//   this.sum = function(){
//     return this.arg1 + this.arg2;
//   }

//   this.mul = function(){
//     return this.arg1 * this.arg2;
//   }
// }

// var a = new Calculator();
// a.read();
// console.log(a.sum());
// console.log(a.mul());

// function Accumulator(startingValue){
//   this.value = startingValue;
  
//   this.read = function(){
//     var arg = +prompt('arg=', '');
//     this.value += arg;
//   }
// }




// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение

/////////////////////////////////////////////////////////////////

// function Calculator(){
// var methods = {
//     '+': function(a,b){
//       return a + b;
//     },

//     '-': function(a,b){
//       return a - b;
//     },
//   }

//   this.calculate = function(str){
//     args = str.split(' ');
//     a = +args[0];
//     op = args[1];
//     b = +args[2];

//     if ( (typeof(a) !== 'number') || (typeof(op) !== 'string') || (typeof(b) !== 'number')) {
//       return NaN;
//     }

//     return methods[op](+a,+b);
//   }

//   this.addMethod = function(op, func){
//     return methods[op] = func;
//   }
// }

  

// var calc = new Calculator();

// console.log( calc.calculate("3 + 7") ); // 10
// console.log( calc.calculate("3 - 7") ); // 10


// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** t");
// alert( result ); // 8

// var result = powerCalc.calculate("2 / 1");
// alert( result ); //

/////////////////////////////////////////////////////////////////

// function Article(){

//   Article.date = new Date();
//   if (Article.count == undefined) Article.count = 0;
//   Article.count ++;

//   if (Article.arrDates == undefined) Article.arrDates = [];
//   Article.arrDates.push(Article.date);

//   Article.lastDate = Article.arrDates[Article.count-1];
// }

//   Article.showStats = function(){
//    alert('Всего: ' + Article.count + ', Последняя: ' + Article.lastDate);
//   }

// Article.count = 0;

// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)

///////////////////////////////////////////////////////

// var user = {
//   firstName: "Вася",
//   surname: "Петров"
// }

// Object.defineProperty(user, "fullName", {

//   get: function() {
//     return this.firstName + ' ' + this.surname;
//   },

//   set: function(value) {
//       var split = value.split(' ');
//       this.firstName = split[0];
//       this.surname = split[1];
//     }
// });

// alert( user.firstName ); // Петя
// alert( user.surname ); // Иванов
// user.fullName = "Петя Иванов";
// alert( user.firstName ); // Петя
// alert( user.surname ); // Иванов

///////////////////////////////////////////////////

// function User(fullName) {
//   this.fullName = fullName;

//   Object.defineProperty(this, "firstName", {
//     get: function() {
//       return this.fullName.split(" ")[0];
//     },

//     set: function(newName){
//       this.fullName = newName + " " + this.fullName.split(" ")[1];
//     }
//   });

//   Object.defineProperty(this, "lastName", {
//     get: function() {
//       return this.fullName.split(" ")[1];
//     },

//     set: function(newSorname){
//       this.fullName = this.fullName.split(" ")[0] + " " + newSorname;
//     }
//   });
// };

// var vasya = new User("Василий Попкин");

// // чтение firstName/lastName
// alert( vasya.firstName ); // Василий
// alert( vasya.lastName ); // Попкин

// // запись в lastName
// vasya.lastName = 'Сидоров';

// alert( vasya.fullName ); // Василий Сидоров

///////////////////////////////////////////////////

// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }

// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

// function sumArgs() {
//   var arr = [].slice.call(arguments);

//   return arr.reduce(function(a,b){
//     return a + b;
//   });
// }

// alert( sumArgs(1, 2, 3) )

//////////////////////////////////////////////////

// function applyAll(){
//   var args = [].slice.call(arguments);
//   var fn = args[0];
//   args = args.slice(1);



//   return fn.apply(null,args);
// }

// alert( applyAll(Math.max, 2, -2, 3) );

// alert( applyAll(Math.min, 2, -2, 3) );

// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//   return [].reduce.call(arguments, function(a, b) {
//     return a + b;
//   });
// }

// function mul() { // перемножает аргументы: mul(2,3,4) = 24
//   return [].reduce.call(arguments, function(a, b) {
//     return a * b;
//   });
// }

// alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
// alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24


///////////////////////////////////////////////////////

// var user = {
//   firstName: "Вася",
//   sayHi: function() {
//     alert( this.firstName );
//   }
// };

// var f = user.sayHi();
// setTimeout(f, 1000);

// function f() {
//   alert( this );
// }

// var user = {
//   g: f.bind("Hello")
// }

// // user.g();
// var test = 6;

// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;
// alert( sayHi.test ); // 5

// var bound = sayHi.bind({
//   name: "Вася",
//   test: "Вася"
// });

// alert( bound.test ); // что выведет? почему?

// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   loginOk: function() {
//     alert( this.login + ' вошёл в сайт' );
//   },

//   loginFail: function() {
//     alert( this.login + ': ошибка входа' );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
//   }
// };

// user.checkPassword();

//////////////////////////////////////////////////

// "use strict";

// function ask(question, answer, ok, fail) {
//   var result = prompt(question, '');
//   if (result.toLowerCase() == answer.toLowerCase()) ok();
//   else fail();
// }

// var user = {
//   login: 'Василий',
//   password: '12345',

//   // метод для вызова из ask
//   loginDone: function(result) {
//     alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//   },

//   checkPassword: function() {
//     ask("Ваш пароль?", this.password,
      
//         this.loginDone.bind(this, true),
//         this.loginDone.bind(this, false)
//     );
//   }
//   // //
//   //  checkPassword: function() {
//   //   ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
//   // }
//   // //
// };

// var vasya = user;
// user = null;
// vasya.checkPassword();

////////////////////////////////////////////////////////////

//  function makeLogging(work, log){
//   return function(){
//     var arr = [].slice.call(arguments);
//     log.push(arr);

//     var result = work.apply(this, arguments);
//     return result;
//   };
//  }

//  function work(a,b) {
//   alert( a + b );
// }

//  var log = [];
// work = makeLogging(work, log);

// // work(1); // 1, добавлено в log
// // work(5); // 5, добавлено в log

// // for (var i = 0; i < log.length; i++) {
// //   alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
// // }

// work(1, 2); // 3
// work(4, 5); // 9

// for (var i = 0; i < log.length; i++) {
//   var args = log[i]; // массив из аргументов i-го вызова
//   alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
// }

////////////////////////////////////////////////////////////

// function f(x) {
//   return Math.random() * x; // random для удобства тестирования
// }

// var cashe = [];

// function makeCaching(f) {
//   function wrapper(x){
//     var arg = f.call(this,x);

//     if (cashe.length == 0){
//       cashe.push(arg);
//     }

//     for(var i = 0; i < cashe.length; i++){
//       if (cashe[i] == arg) {
//         return cashe[i];
//       } else {
//         cashe.push(arg);
//       }

//     }

//   }
//   return wrapper;
// }

// func = makeCaching(f);

// var a, b;

// a = func(1);
// b = func(1);
// alert( a == b ); // true (значение закешировано)

// b = f(2);
// alert( a == b ); // false, другой аргумент => другое значение


/////////////////////////////////////////////////////
// function returnDate(d){
//   var year = +d.getFullYear()%100;
//   if (year < 10) {year = '0' + year};

//   var month = d.getMonth() + 1;
//   if (month < 10) {month = '0' + month};

//   var day = d.getDate();
//   if (day < 10) {day = '0' + day};

//   var date = day + '.' + month + '.' + year;

//   return date;
// }


// function formatDate(date) {
//    if (typeof(date) == 'number'){
//     var d = new Date(date*1000);

//     return returnDate(d);
//    }

//    if (typeof(date) == 'string'){
//     var d = new Date(date);

//     return returnDate(d);
//    }

//    if (Array.isArray(date)){
//    if (date[0] < 10) {date[0] = '0' + date[0]};
//    date[1] = +date[1]+1;
//    if (date[1] < 10) {date[1] = '0' + date[1]};
//    date[2] = (+date[2])%100;
//    if (date[2] < 10) {date[2] = '0' + date[2]};

//    var d = date[2] + '.' + date[1] + '.' + date[0];
//    // d = new Date(d);

//    return d;
//    }

//    if (toString.call(date) == "[object Date]"){
//    return returnDate(date);
//    }
// }

// alert( formatDate('2011-10-02') ); // 02.10.11
// alert( formatDate(1234567890) ); // 14.02.09
// alert( formatDate([2014, 0, 1]) ); // 01.01.14
// alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14

//////////////////////////////////////////////////////////////

// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };

// var jstr = JSON.stringify(leader);

// console.log(jstr);

// var obj = JSON.parse(jstr);

// console.log(obj);

////////////////////////////////////////////////////////////////
// function printNumbersInterval(){
//   var i = 1;
//   var timerId = setInterval(
//     function(){
//       console.log(i);
//       if (i == 20) {clearTimeout(timerId)};
//       i++;
//     },100);
// }

// printNumbersInterval();
///////////////////////////////////////////////////////////////////

// function printNumbersInterval(){
//   var i = 1;
//   var timerId = setTimeout(
//     function timer(){
//       console.log(i);
//       if (i < 20) {
//         i++;
//         timerId = setTimeout(timer, 100);
//       }
//     },100);
// }

// printNumbersInterval();

/////////////////////////////////////////////////////////////////

// setTimeout(function() {
//   alert( i );
// }, 100);

// var i;

// function hardWork() {
//   // время выполнения этого кода >100 мс, сам код неважен
//   for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
// }

// hardWork();

/////////////////////////////////////////////////////////////////

// function Runner() {
//   this.steps = 0;

//   this.step = function() {
//     this.doSomethingHeavy();
//     this.steps++;
//   };

//   function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }

//   this.doSomethingHeavy = function() {
//     for (var i = 0; i < 25; i++) {
//       this[i] = fib(i);
//     }
//   };

// }

// var runner1 = new Runner();
// var runner2 = new Runner();

// // запускаем бегунов
// var t1 = setInterval(function() {
//   runner1.step();
// }, 15);

// var t2 = setTimeout(function go() {
//   runner2.step();
//   t2 = setTimeout(go, 15);
// }, 15);

// // кто сделает больше шагов?
// setTimeout(function() {
//   clearInterval(t1);
//   clearTimeout(t2);
//   alert( runner1.steps );
//   alert( runner2.steps );
// }, 5000); 

/////////////////////////////////////////////////////////////////////

// function f(x) {
//   alert( x );
// }

// function delay(f, ms){
//   return function(){
//     var savedThis = this;
//     var savedArg = arguments;

//     var res = setTimeout(function(){
//       f.apply(savedThis, savedArg)
//     }, ms);

//     return res;
//   }
// }

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);

// f1000("тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд

//////////////////////////////////////////////////////////////////////

// var term = prompt('enter math term', '');

// var a = new Function('a', 'return ' + term);

// alert(a());

// //////////////////////////////////////////////////////////////////////
// "use strict"

// function debounce(f, ms){
//   var state = null;
//   var COLDOWN = 1;
//   return function(){
//     if (state) return;

//     f.apply(this, arguments);

//     state = COLDOWN;

//     var res = setTimeout(function(){ state = null; }, ms);
//   }
// }

// function f(x) { alert(x); }
// var f = debounce(f, 1000);

// f(1); // выполнится сразу же
// f(2); // игнор

// setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
// setTimeout( function() { f(4) }, 1100); // выполнится
// setTimeout( function() { f(5) }, 1500); // игнор
// setTimeout( function() { f(6) }, 100); // игнор (прошло только 100 мс)
// setTimeout( function() { f(7) }, 500); // игнор (прошло только 100 мс)
// setTimeout( function() { f(8) }, 500); // игнор (прошло только 100 мс)

//////////////////////////////////////////////////////////////////////

// var data = "Has Error"; // в данных ошибка

// try {

//   var user = JSON.parse(data); // <-- ошибка при выполнении
//   alert( user.name ); // не сработает

// } catch (e) {
//   // ...выполнится catch
//   alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз" );
//   // alert( e.name );
//   // alert( e.message );
//   alert( e );
// }

// var data = '{ "age": 30 }'; // данные неполны

// try {

//   var user = JSON.parse(data); // <-- выполнится без ошибок

//   if (!user.name) {
//     // throw new SyntaxError("Данные некорректны");
//     throw console.log("Данные некорректны");
//   }

//   alert( user.name );

// } catch (e) {
//   alert( "Извините, в данных ошибка" );
//   alert(e);
// }

// var f = function(a) {
//   console.log(a)
// };

// // затормозить функцию до одного раза в 1000 мс
// var f1000 = throttle(f, 1000);

// f1000(1); // выведет 1
// f1000(2); // (тормозим, не прошло 1000 мс)
// f1000(3); // (тормозим, не прошло 1000 мс)

// // когда пройдёт 1000 мс...
// // выведет 3, промежуточное значение 2 игнорируется

// function throttle(func, ms) {

//   var isThrottled = false,
//     savedArgs,
//     savedThis;

//   function wrapper() {

//     if (isThrottled) { // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments); // (1)

//     isThrottled = true;

//     setTimeout(function() {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }

//   return wrapper;
// }

// function CoffeeMachine(power) {
//   this.waterAmount = 0;
//   var timerId;

//   var WATER_HEAT_CAPACITY = 4200;

//   var self = this;

//   function getBoilTime() {
//     return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   function onReady() {
//     alert( 'Кофе готово!' );
//   }

//   this.run = function() {
//     timerId = setTimeout(onReady, getBoilTime());
//   };

//   this.stop = function(){
//     clearTimeout(timerId);
//   };

// }

// var coffeeMachine = new CoffeeMachine(50000);
// coffeeMachine.waterAmount = 200;

// coffeeMachine.run();
// // coffeeMachine.stop(); // кофе приготовлен не будет

// function User() {
//   var firstName, surName;

//   this.setFirstName = function(value){
//     firstName = value;
//   };

//   this.setSurname = function(value){
//     surName = value;
//   };

//   this.getFullName = function(){
//     return firstName + ' ' + surName;
//   };
// }

// var user = new User();
// user.setFirstName("Петя");
// user.setSurname("Иванов");

// alert( user.getFullName() ); // Петя Иванов

// function CoffeeMachine(power, capacity) {
//   this.getPower = function(){
//     return power;
//   }

//   this.setWaterAmount = function(amount) {
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить воды больше, чем " + capacity);
//     }

//     waterAmount = amount;
//   };

//   this.getWaterAmount = function() {
//     return waterAmount;
//   };

// }

// var cofee = new CoffeeMachine(100, 1000);

// alert(cofee.getPower());

// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;

//   var WATER_HEAT_CAPACITY = 4200;

//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   this.setWaterAmount = function(amount) {
//     if (amount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if (amount > capacity) {
//       throw new Error("Нельзя залить больше, чем " + capacity);
//     }

//     waterAmount = amount;
//   };

//   function onReady() {
//     alert( 'Кофе готов!' );
//   }

//   this.run = function() {
//     setTimeout(onReady, getTimeToBoil());
//   };

//   this.addWater = function(addAmount){
//     if (addAmount < 0) {
//       throw new Error("Значение должно быть положительным");
//     }
//     if ((waterAmount + +addAmount) > capacity) {
//       throw new Error("Нельзя залить больше, чем " + capacity);
//     }
//     return waterAmount += addAmount;
//   };

// }

// var coffeeMachine = new CoffeeMachine(100000, 400);
// coffeeMachine.addWater(200);
// coffeeMachine.addWater(100);
// // coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
// coffeeMachine.run();

// function CoffeeMachine(power, capacity) {
//   var waterAmount = 0;

//   var timerId;

//   this.isRunning = function() {
//     return !!timerId;
//   };

//   var WATER_HEAT_CAPACITY = 4200;

//   function getTimeToBoil() {
//     return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//   }

//   this.setWaterAmount = function(amount) {
//     // ... проверки пропущены для краткости
//     waterAmount = amount;
//   };

//   this.getWaterAmount = function(amount) {
//     return waterAmount;
//   };

//   function onReady() {
//     alert( 'Кофе готов!' );
//   }

//   this.setOnReady = function(newOnReady) {
//     onReady = newOnReady;
//   };

//   this.run = function() {
//     timerId = setTimeout(function() {
//       timerId = null;
//       onReady();
//     }, getTimeToBoil());
//   };

// }

// var coffeeMachine = new CoffeeMachine(20000, 500);
// coffeeMachine.setWaterAmount(100);

// alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

// coffeeMachine.run();
// alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

// coffeeMachine.setOnReady(function() {
//   alert( "После: " + coffeeMachine.isRunning() ); // После: false
// });

// var head = {
//   glasses: 1
// };

// var table = {
//   pen: 3
// };

// var bed = {
//   sheet: 1,
//   pillow: 2
// };

// var pockets = {
//   money: 2000
// };

// table.__proto__ = head;
// bed.__proto__ = table;
// pockets.__proto__ = bed;


// console.log(pockets.pen);
// // 3

// console.log(bed.glasses);
// // 1

// console.log(table.money);
// //undefined.

// var begin = new Date();
// console.log(pockets.glasses);
// var end = new Date();
// var diff = end - begin;
// console.log(diff);

// var begin = new Date();
// console.log(head.glasses);
// var end = new Date();
// var diff = end - begin;
// console.log(diff);

// Function.prototype.defer = function(t){
//   var f = this;
//   return function(){
//     var arg = arguments;
//     var self = this;
//     setTimeout(function(){
//       f.apply(self,arg);
//     }, t);
//   }
// }

// function f(a,b) {
//   alert( a+b );
// }

// f.defer(1000)(2,2); // выведет "привет" через 1 секунду

// function CoffeeMachine(power) {
//   this._waterAmount = 0;

//   this._power = power;
// }

//   CoffeeMachine.prototype._WATER_HEAT_CAPACITY = 4200;

//   CoffeeMachine.prototype._getTimeToBoil = function() {
//     return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
//   }

//   CoffeeMachine.prototype.run = function() {
//     setTimeout(function() {
//       alert( 'Кофе готов!' );
//     }, this._getTimeToBoil());
//   };

//   CoffeeMachine.prototype.setWaterAmount = function(amount) {
//     this._waterAmount = amount;
//   };

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();

// function Hamster() {
//   this.food = []; // пустой "живот"
// };

// // Hamster.prototype.food = []; // пустой "живот"

// Hamster.prototype.found = function(something) {
//   this.food.push(something);
// };

// // Создаём двух хомяков и кормим первого
// var speedy = new Hamster();
// var lazy = new Hamster();

// speedy.found("яблоко");
// speedy.found("орех");

// alert( speedy.food.length ); // 2
// alert( lazy.food.length ); // 2 (!??)

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.walk = function() {
//   alert( "ходит " + this.name );
// };

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype = Animal.prototype;

// Rabbit.prototype.walk = function() {
//   alert( "прыгает! и ходит: " + this.name );
// };

// var rab = new Rabbit('кроль');

// rab.walk();
// // Animal.prototype.walk();

// function Animal(name) {
//   this.name = name;

//   this.walk = function() {
//     alert( "ходит " + this.name );
//   };

// }

// function Rabbit(name) {
//   Animal.apply(this, arguments);
// }
// Rabbit.prototype = Object.create(Animal.prototype);

// Rabbit.prototype.walk = function() {
//   alert( "прыгает " + this.name );
// };

// var rabbit = new Rabbit("Кроль");
// rabbit.walk();

// function Animal() {}

// function Rabbit() {}
// Rabbit.prototype = Object.create(Animal.prototype);

// var rabbit = new Rabbit();

// alert( rabbit.constructor == Rabbit );  //false
// alert( rabbit.constructor == Animal );  // true

// function Clock(options) {
//   this._template = options.template;
// }

// Clock.prototype._render = function render() {
//   var date = new Date();

//   var hours = date.getHours();
//   if (hours < 10) hours = '0' + hours;

//   var min = date.getMinutes();
//   if (min < 10) min = '0' + min;

//   var sec = date.getSeconds();
//   if (sec < 10) sec = '0' + sec;

//   var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

//   console.log(output);
// };

// Clock.prototype.stop = function() {
//   clearInterval(this._timer);
// };

// Clock.prototype.start = function() {
//   this._render();
//   var self = this;
//   this._timer = setInterval(function() {
//     self._render();
//   }, 1000);
// };

 
// function NewClock(options){
//   Clock.apply(this, arguments);
//   this._precision = +options.precision||1000;
// }

// NewClock.prototype = Object.create(Clock.prototype);
// NewClock.prototype.constructor = NewClock;

// NewClock.prototype.start = function() {
  
//     this._render();
//     var self = this;
//     this._timer = setInterval(function() {
//       self._render();
//   }, this._precision);

  
// };


//     var clock = new NewClock({
//       template: 'h:m:s',
//       precision: 2000
//     });
//     clock.start();

// function Menu(state) {
//   this._state = state || Menu.STATE_CLOSED;
// };

// Menu.STATE_OPEN = 1;
// Menu.STATE_CLOSED = 0;

// Menu.prototype.open = function() {
//   this._state = Menu.STATE_OPEN;
// };

// Menu.prototype.close = function() {
//   this._state = Menu.STATE_CLOSED;
// };

// Menu.prototype._stateAsString = function() {
//   switch (this._state) {
//     case Menu.STATE_OPEN:
//       return 'открыто';

//     case Menu.STATE_CLOSED:
//       return 'закрыто';
//   }
// };

// Menu.prototype.showState = function() {
//   alert(this._stateAsString());
// };

// /////////////////////////////////////////////
// // Конструктор потомка
// function AnimatingMenu(state) {
//   Menu.apply(this, arguments);
// }

// AnimatingMenu.prototype = Object.create(Menu.prototype);

// // Желательно и constructor сохранить
// AnimatingMenu.prototype.constructor = AnimatingMenu;

// AnimatingMenu.STATE_ANIMATING = 2;

// AnimatingMenu.prototype.open = function() {
//   this._state = AnimatingMenu.STATE_ANIMATING;

//   this._timer = setTimeout(function() {
//       Menu.prototype.open(), 1000});
// };

// AnimatingMenu.prototype.close = function() {
//   clearTimeout(this._timer);
//   Menu.prototype.close.apply(this);
// };

// AnimatingMenu.prototype._stateAsString = function() {
//   switch (this._state) {
//     case AnimatingMenu.STATE_ANIMATING:
//       return 'анимация';

//     default:
//       return Menu.prototype._stateAsString.call(this);
//   }
// };

// // var AnimatingMenu = Menu; // замените на ваш код для AnimatingMenu

//     // использование..

//     var menu = new AnimatingMenu();

//     menu.showState(); // закрыто

//     menu.open();
//     menu.showState(); // анимация

//     setTimeout(function() {
//       menu.showState(); // открыто

//       menu.close();
//       menu.showState(); // закрыто (закрытие без анимации)
//     }, 1000);

