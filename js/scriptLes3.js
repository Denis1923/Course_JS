"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

//alert('Hello!');

// const result = confirm("Ты здесь?");
// console.log(result);

// const answer = prompt("Вам есть 19?",""); //знак +prompt ,делает тип данных number
// console.log(answer + 5);
//console.log(typeof(answer)); //проверить какой тип данных переменной 

//!ВАЖНО: вся информация которая приходит от пользователя, всегда ввиду СТРОКИ

// const answers = [];
// answers[0] = prompt("Как тебя зовут","");
// answers[1] = prompt("Какая твоя фамилия","");
// answers[2] = prompt("Сколько тебе лет","");

// document.write(answers);

//console.log(typeof(null)); //это ошибка, хоть и не выводит

// const category = 'toys';

// console.log(`https://don.ru/${category}/5`); //интерпаляция происходит за счет косых кавычек ` `

const names = "Denis";
alert(`Hello, ${names}`);