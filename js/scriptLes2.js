"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

let numberA = 5;
let numberB = 2.5;

//console.log(numberA/0); //infinity
//console.log('string' * 9); //NaN - не число

const persone = "Alex"; //string

const bool = false; //bool

//console.log(some) //is not defined - нет переменной 

let und;
//console.log(und); //undefined - нет значений

const obj = {
    name: "Denis",
    age: 24,
    isMariend: false
};

console.log(obj.name);
console.log(obj["name"]);

//arrray
let arr = ['1','2','3','4','5','6', { a: 34}, 78, [1,2]];
console.log(arr[8]);
