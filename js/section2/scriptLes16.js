"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const box = document.getElementById('box');
console.log('box :>> ', box);

const btns = document.getElementsByTagName('button'); // document.getElementsByTagName('button')
console.log('btns :>> ', btns); //console.log('btns :>> ', btns[1]);

const circles =  document.getElementsByClassName('circle');
console.log('circles :>> ', circles);

const hearts = document.querySelectorAll('.heart');
console.log('hearts :>> ', hearts);

hearts.forEach(item => {
    console.log('item :>> ', item);
});

const oneHeart = document.querySelector('.heart');
console.log('oneHeart :>> ', oneHeart);