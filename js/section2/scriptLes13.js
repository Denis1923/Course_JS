"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

let str = "some";
let strObj = new String(str);

// console.log(typeof(str)); //string
// console.log(typeof(strObj)); //object

//console.dir([1,2,3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

const jonh = Object.create(solder); //новая запись новая запись прототипирования

// const jonh = {
//     health: 100
// };

//jonh.__proto__ = solder; //устаревший формат прототипирования

//Object.setPrototypeOf(jonh, solder); //новая запись прототипирования (1 парам = куда, 2 парам = откуда)


jonh.sayHello();
//console.log('john :>> ', jonh.armor);