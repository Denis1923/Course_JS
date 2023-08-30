"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

let number = 5;
const leftDorder = 1;

number = 10;
console.log(number);
// leftDorder = 2; //ошибка так как константа не изменяется

// прямых констант не бывает
const obj =  {
    a: 50
};
obj.a= 10;
console.log(obj);

//происходит "хостинг"  - это когда вызов переменнной происходит до ее объявления
console.log(name);
var name = 'Denis'; //старая версия объявления переменных

{
    let result = 50;
}

console.log(result);
