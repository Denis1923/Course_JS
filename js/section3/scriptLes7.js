"use strict"; //директива, которая переводит в новый стандарт (современный режим), прописывать в начале главного скрипта

class Renctangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    
    calcArea(){
        return this.height * this.width;
    }
}

const square = new Renctangle(5,4);
const s = new Renctangle(20, 100);

// s.height = 10;
// console.log('square.calcArea() :>> ', square.calcArea());

//паследуется от Renctangle
class ColoredRentangleWithText extends Renctangle {
    constructor(height, width, text, bgColor){
        super(height, width); //инициализирует свойства родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRentangleWithText(25, 10 , 'hello', 'red');
div.showMyProps();
console.log('div.calcArea() :>> ', div.calcArea());