"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

//console.log(5 + +"5"); //+ - првиодит к числу

//операторы инкримента и дикремента , постфиксная и префиксная форма
let incr = 10,
    decr = 10;
incr++; //постфиксная
++incr; //префиксная
decr--;
--decr;
//console.log(incr);

//console.log(4*2 === 8);

const isChecked = true,
    isClose = false;
//опертаоры И = && , ИЛИ = || 
console.log(isChecked || isClose);

//операторы сравнения ==, ===, >= , <= , !=
console.log(4*2 == 8);
console.log(4*2 === 8);
console.log(4*2 >= 8);
console.log(4*2 <= 8);
console.log(4*2 != 8);