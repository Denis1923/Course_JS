"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

// function showThis(a, b) {
//     console.log('this :>> ', this);

//     function sum() {
//         console.log('this :>> ', this);
//         return a + b;
//     }

//     //console.log('sum() :>> ', sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log('this :>> ', this);    
//         }
//         shout();       
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// function sayName() {
//     console.log('this :>> ', this);
//     console.log('this.name :>> ', this.name);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log('double() :>> ', double(3));

// 1) обычная функция: this = window, если стоит use strict, то будет undefiend
// 2) Контекст у методов объекта = сам объект
// 3) this d конструктор и классах - это новый экземпляр объекта
// 4) ручная привязка this: call, apply bind\


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundСolor = 'red'; 
    console.log('this :>> ', this);
});

const obj ={
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log('this :>> ', this);
        };
        say();
    }
   
};

obj.sayNumber();

const double = a => a * 2;
console.log('double(4) :>> ', double(4));


