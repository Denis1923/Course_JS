"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

function first(){
    //задержка
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

//first();
//second();

//callback - это ф-ция, которая должна быть выполнена после того как другая ф-ция выполниться

function learnJS(lang, callback){
    console.log(`Я учу ${lang}`);
    callback();
}

function done(){
    console.log('я прошел!')
}

learnJS('JS', done);

learnJS('JS', function() {
    console.log('Я прошел этот урок');
}); //аннониманя ф-ция внутри learnJS
