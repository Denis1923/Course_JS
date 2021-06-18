"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

//toString
//1
console.log('typeof(String(null)) :>> ', typeof(String(null)));
console.log('typeof(String(4)) :>> ', typeof(String(4)));

// //2
console.log('typeof(5 + "") :>> ', typeof(5 + ""));

const num = 5;
console.log('https:/vk.com/catalog/' + num);

const fontSize = 26 + 'px';


// //toNumber

// //1
console.log('typeof(Number("4")) :>> ', typeof(Number('4')));

// //2
console.log('typeof(+"5") :>> ', typeof(+"5"));

// //3
console.log('typeof(parseInt("15px", 10)) :>> ', typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

//toBoolean
//false = 0, "<пустая строка>", null, ubdefined, NaN
//1
let switcher = null;

if (switcher){
    console.log('swither :>> ', switcher);
}

switcher = 1;

if (switcher){
    console.log('swither :>> ', switcher);
}

//2
//console.log('typeof(Boolean("4")) :>> ', typeof(Boolean("4")));

//3
console.log('typeof(!!"232") :>> ', typeof(!!"232"));