"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

// const timerId = setTimeout(function(text) {
//    console.log(text); 
// }, 2000, 'object');

const btn = document.querySelector('.btn');
let timerId, 
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if(pos == 300){
            clearInterval();
        }
        else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);        
//     }
    
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello');

//     id = setTimeout(log, 500);
// }, 500);
