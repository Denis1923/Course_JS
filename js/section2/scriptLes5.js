"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

// if(4 > 4)
//     console.log("OK");
// else if (4 < 5)
//     console.log("Yes!");
// else 
//     console.log("Error")

// let num = 50 > 10 ? "OK":"Error";
// console.log(num);
let n = 3;

switch(n)
{
    case 1:
        console.log(`${n} != 1`);
        break;
    case 2:
        console.log(`${n} === 2`);
        break;
    default:
        console.log(`${n}, такого числа нет`);
        break;

}