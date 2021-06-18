"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта
//1+
let t =5; 
//alert(x++);
//2 - 
let a = [] + false - null + true; //[]-пустой массив = string
console.log('a :>> ', a); //NaN
//3 +
let y = 1;
let x = y = 2;
console.log('x :>> ', x);
//4 -
let a2 = [] + 1 + 2;
console.log('a2 :>> ', a2); //12
//5 -
console.log('"1"[0] :>> ', "1"[0]); //1 - так как индекс обращается к 1 сиволу строке
//6 - 
console.log('2 && 1 && null && 0 && undefined :>> ', 2 && 1 && null && 0 && undefined); //null
//7 -
console.log('!!(a && b) == (a && b) :>> ', (!!(1 && 2)) == (1 && 2));
//8 -
//И && - запинается на ЛЖИ
//или ||| - запинается на правде
console.log('null || 2 && 3 || 4 :>> ', null || 2 && 3 || 4);
//9 -
a = [1, 2, 3];
let b = [1, 2, 3];
console.log('a == b :>> ', a == b);
//10 -
console.log('+"Infinity" :>> ', +"Infinity"); //Infinity
//11
console.log('"Ежик">"яблоки" :>> ', "Ежик">"яблоки"); //смотреть надо по Unicode
//12
console.log('0 || "" ||| 2 | undefined || true || false :>> ', 0 || "" || 2 | undefined || true || false);