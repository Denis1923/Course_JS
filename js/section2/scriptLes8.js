"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const str = "test";
console.log(str.length);

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);

//!!! в консоле можно ввести  console.dir(number) - и увидеть методы над number

console.log(str[3]); 

let fruit = "Some fruite";
console.log(fruit.lastIndexOf("e") + ", " + fruit.indexOf("e"));

console.log(fruit.slice(5,10));
console.log(fruit.slice(-5,-1));
console.log(fruit.substring(5,10));

const num = 12.2;
console.log(Math.round(num)); //округление

const test = "12.2px";
console.log(parseInt(num));
console.log(parseFloat(num));