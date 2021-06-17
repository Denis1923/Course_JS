"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
};

// console.log(options.colors.border);

// //удaление
// delete options.name;
// console.log(options);

//чтобы получить значение свойтсва, надо обратиться через []
// let counter = 0;
// for (let key in options){    
//     if(typeof(options[key]) == 'object'){
//         for (let i in options[key]){
//             console.log(`Property ${i}, have znach ${options[key][i]}`);
//             counter++;
//         }
//     }
//     else{
//         console.log(`Property ${key}, have znach ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options)); //выводит массивно члены объекта
// console.log(Object.keys(options).length); //показывает кол-во член объекта
// options.makeTest();

//деструктуризация
const {border, bg} = options.colors;

console.log(options)
console.log(border);