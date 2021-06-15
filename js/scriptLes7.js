"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

let num = 20;

//fun declaration
function showFirstMessage(text){
    console.log(text);
    let num = 10;
}
let name = "Hello World";
showFirstMessage(name);
console.log(num);

function calc(a, b){
    return a + b;
}

console.log(calc(2,5));
console.log(calc(1,4));
console.log(calc(5,4));

function ret(){
    let num = 50;
    
    ///

    return num;
}

const anotherNum = ret();

console.log(anotherNum);

//fun expression. Отличаетс я от предыдущего тем что должен вызываться до ее объявления
const logger = function(){
    console.log("Hello");
};

//стрелочная функция (JS6), лямда-выражения

const cal = (a,b) => a + b ; // в одну строчку
//или
const cals = (a,b) => {return a + b} ; //блочная запись, если есть несоклько строк

console.log(cal(4,5));
console.log(cals(9,8));