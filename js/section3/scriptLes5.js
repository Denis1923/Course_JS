"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const num = new Number(3);
console.log('num :>> ', num);
//1 вариант
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Ползователь ${this.name} ушел`);
// };

//2 вараинт (с JS6 появились классы)
class User {
    constructor (name, id){
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello(){
        console.log(`Hello ${this.name}`);
    }
    exit(){
        console.log(`Ползователь ${this.name} ушел`);
    }
}


const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);
console.log('ivan :>> ', ivan);
console.log('ivan :>> ', alex);
ivan.hello();
alex.hello();
ivan.exit();