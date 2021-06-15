"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

let num = 2;

// while(num < 10)
// {
//     console.log(num);
//     num++;    
// }

// num = 5;
// console.log("-----------------");
// do {
//     console.log(num);
//     num++;  
// }while(num < 10);


// num = 5;
// console.log("-----------------");
// for(let i = 5; i < 10; i++ ){
//     console.log(num);
//     num++;
// }

for(let i = 1; i < 10; i++ ){
    if(num%2 == 0)
        continue;
    else if(num%2 == 1)
        break;
    num++;
}