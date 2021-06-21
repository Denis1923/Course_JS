"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

// console.log('document.firstChild :>> ', document.firstChild);
// console.log('document.lastChild :>> ', document.lastChild);

//console.log('document.querySelector("#current").parentNode.parentNode :>> ', document.querySelector("#current").parentNode.parentNode);

// console.log( document.querySelector("[data-current='3']").previousSibling);

//console.log( document.querySelector("[data-current='3']").nextElementSibling);

for (const node of document.body.childNodes) {
    if(node.nodeName == '#text')
        continue;
        
    console.log('node :>> ', node);
}