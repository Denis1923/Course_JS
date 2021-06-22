"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const box = document.querySelector('.box'),
    btn = document.querySelector('button'),
    // width = box.clientWidth,
    // height = box.clientHeight;
    // width = box.offsetWidth,
    // height = box.offsetHeight;
    width = box.scrollWidth,
    height = box.scrollHeight;

console.log('width, height :>> ', width, height);

btn.addEventListener('click', () =>{
    //box.style.height = box.scrollHeight + 'px';
    console.log('box.scrollTop :>> ', box.scrollTop);
});

// console.log('box.getBoundingClientrect() :>> ', box.getBoundingClientRect().top);
// console.log('box.getBoundingClientrect() :>> ', box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log('style.display :>> ', style.display);