"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const now = new Date(); // нумерация месяца идет с 0 
    // new Date.parse('2021-09-09');
// console.log('now :>> ', now); //текущая дата

console.log('now.getFullYear() :>> ', now.getFullYear());
console.log('now.getMonth() :>> ', now.getMonth());
console.log('now.getDay() :>> ', now.getDay()); //день недели
console.log('now.getDate() :>> ', now.getDate()); //число месяцы (дата дня)
console.log('now.getUTCHours() :>> ', now.getUTCHours());

console.log('now.getHours() :>> ', now.getHours());
console.log('now.setHours(24) :>> ', now.setHours(24));
console.log('now :>> ', now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //i возвожу в степень 3  
}

let end = new Date();
alert(`Цикл отработал за ${end - start} миллисекунд`);