"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'), // document.getElementsByTagName('button')
    circles =  document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
    
///console.log('box :>> ', box);
//console.log('btns :>> ', btns); //console.log('btns :>> ', btns[1]);
//console.log('circles :>> ', circles);
//console.log('hearts :>> ', hearts);
// hearts.forEach(item => {
//     console.log('item :>> ', item);
// });
//console.log('oneHeart :>> ', oneHeart);

//!Inline стили высокий приоритет (важные)
//1 вариант
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

//2 вариант
box.style.cssText = 'background-color: blue; width: 500px'; //`'background-color: ${<переменная>}; width: ${<переменная>}px`

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


//1 вариант
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';    
// }

//2 вариант
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});



const div = document.createElement('div');
//const test = document.createTextNode('Тут был Я!');

div.classList.add('black');
document.body.append(div); //добавление в конец страницы
//wrapper.append(div);      //добавление в конец контейнера класса wrapper
//wrapper.prepend(div);     //добавление в начало контейнера класса wrapper
//hearts[0].before(div);    //добавление перед 1 эл-том 
//hearts[0].after(div);     //добавление после 1 эл-том 
//wrapper.insertBefore(div, hearts[1]); //добавление эл-та после определнного эл-та
//circles[0].remove(); //удаление эл-та
//hearts[0].replaceWith(circles[0]); //переместить эл-т в другой контейнер
//wrapper.replaceChild(circles[0], hearts[0]); //переместить эл-т в другой контейнер

div.innerHTML = "<h1>Hello world</h1>"; //работает с тегами
//div.textContent = "hello"; //работает только с текстом, без тегов

div.insertAdjacentHTML('beforebegin', '<h2>AXAXAXAX</h2>'); //добавляе перед эл-том
//div.insertAdjacentHTML('afterbegin', '<h2>AXAXAXAX</h2>'); //добавляе перед исходным текстом, который есть в div