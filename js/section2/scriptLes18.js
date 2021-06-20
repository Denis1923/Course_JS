"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

const btns = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };
// btn.onclick = function() {
//     alert('Second Click');
// }; //выполнится второе

// сначала выполниться 1, а потом 2
// btn.addEventListener('click', () => {
//     alert('Click');
// }); //1 param - тазвание события
// btn.addEventListener('click', () => {
//     alert('Second Click');
// }); //1 param - тазвание события

// btn.addEventListener('mouseenter', (event) => { //или e вместо event
//     console.log('"Hover" :>> ', event.target);
//     //event.target.remove(); //удаляет эл-т
//  }); 

let i = 0;
const deleteElement = (e) => {
    //e.target.remove();
    console.log('e.target :>> ', e.target);
    console.log('object :>> ', e.type);
    // i++
    // if(i == 1 ){
    //     btn.removeEventListener('click', deleteElement);
    // }
};
// btn.addEventListener('click', deleteElement);
// overlay.removeEventListener('click', deleteElement);

btns.forEach(item =>{
    item.addEventListener('click', deleteElement, {once: true}); //once - срабатывает 1 раз
});

//!!!_вспытие событий - это когда обработчик событий сначала срабатывает на вложенном эл-те, затем на родителей и выше и выше поднимаясь по иерархии//

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('e.target :>> ', event.target);
});


