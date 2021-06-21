"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

//touchstart - касание пальца эл-та
//touchmove - перемещение пальца
//touchend - убран палец
//touchenter - палец зашел за пределы эл-та и оторвался
//touchleave - палец зашел за пределы эл-та и не оторвался
//touchcancel - точка соприкосновения не регается на поверхности
//touches - кол-во всех пальцев

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log('e.touches :>> ', e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('touchmove');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('touchend');
    });
});
