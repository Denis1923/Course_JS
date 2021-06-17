"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

let a = 5,
    b = a;

b = b + 5; // b+= 5

// console.log(a);
// console.log(b);

const obj = {
    a: 5, 
    b: 1
};

// const copy = obj; //передаем по ссылке
// copy.a = 10;

// console.log(copy);
// console.log(obj);

//1 ввариант - клонирования
function copy(mainObj) {
    let objCopy = {};
    
    for (const key in mainObj) {
        objCopy[key] = mainObj[key];
    }    

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumber = copy(numbers);

newNumber.a = 10;
//newNumber.c.x = 10; //!-изменить и в numbers так как сделали поверхностную копию

// console.log(numbers);
// console.log(newNumber);

//2 вариант
const add = { 
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);
// console.log(clone);

//3 вариант
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = ' asasas';
// console.log(newArray);
// console.log(oldArray);

//4 вариант
const video = ['youtube','more','rutube'],
      blogs = ['WP','LJ','blogger'],
      internet = [...video, ...blogs, 'VK', 'FB']; //Spread операция вытаскивает данные

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];
const newArr = [...array];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};
console.log('q :>> ', q);
console.log('newQ :>> ', newQ);