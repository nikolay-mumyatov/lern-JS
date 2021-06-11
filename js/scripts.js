"use strict";

const main = document.querySelector(".main");

function DomElement(selector, height, width, background, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.background = background;
  this.fontSize = fontSize;
}

DomElement.prototype.addElement = function (text) {
  if (this.selector[0] === ".") {
    let newDiv = document.createElement("div");
    newDiv.classList.add(this.selector.substr(1));
    newDiv.style.cssText = `height: ${this.height}`;
    newDiv.style.cssText += `width: ${this.width}`;
    newDiv.style.cssText += `background-color: ${this.background}`;
    main.append(newDiv);

  } else if (this.selector[0] === "#") {
    let newP = document.createElement("p");
    newP.setAttribute("id", this.selector.substr(1));
    newP.style.cssText = `font-size: ${this.fontSize}`;
    newP.innerHTML = text;
    if (main.querySelector('div')) {
      let box = main.querySelector('div');
      box.append(newP);
    } else {
      main.append(newP);
    }
    
  } else {
    console.log("Ошибка");
  }
};

let block = new DomElement(".block", "200px", "300px", "#bdbdf2");
let p = new DomElement("#paragraph", "", "", "", "24px");

block.addElement();
p.addElement('Привет мир!');
