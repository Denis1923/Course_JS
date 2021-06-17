"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const arr = [2, 0, 1, 12, 3, 4, 15, 8];

arr.sort(); //отсортирует как [ 0, 1, 12, 15, 2, 3,  4,  8  ]

arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){ return a- b; } //для правильной сортировки

arr.pop(); //удаляет
console.log(arr);

arr.push(10); //добавляет
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    
}

//выводит значение
for (const value of arr) {
    console.log(value);
}
console.log();
console.log(arr.length); //ориентируется по последниму индексу+1
console.log();

//выводит индекс
for (const value in arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {   
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; ')); //объединить в строку, но разделить через ;