const boxPositionArrow = document.querySelectorAll('.arrow');
const inputNumber = document.getElementById('number');
const inputWidth = document.getElementById('width');
const inputHeight = document.getElementById('height');
const btnGenerate = document.querySelector('.generate');
const fieldBoxBariers = document.querySelectorAll('.field_box-barrier');
const field = document.querySelector('.field');
const fieldBox = document.querySelector('.field_box');

let fieldTop = fieldBox.offsetTop;
let fieldLeft = fieldBox.offsetLeft;

let widthField = field.offsetWidth;
let heightField = field.offsetHeight;

let checkRandomWidth = 0;
let checkRandomHeight = 0;


const getRandomPosisionNumberForHeight = value => {
  let randomHeight = Math.floor(Math.random() * value * 100) - 26;
  let zeroHeight = randomHeight >= 0 && randomHeight <= 26 || randomHeight < 0;
  
  while(true ) {

    if( (checkRandomHeight - randomHeight >= 26 || checkRandomHeight === 0 || randomHeight - checkRandomHeight >= 26)  && !zeroHeight ) {
      break;
    }
    randomHeight = Math.floor(Math.random() * value * 100) - 26;
    zeroHeight = randomHeight >= 0 && randomHeight <= 26 || randomHeight < 0;
  }

  checkRandomHeight = randomHeight;
  return randomHeight
}

const getRandomPosisionNumberForWidth = (value) => {
  let randomWidth = Math.floor(Math.random() * value * 100) - 26;
  let zeroWidth = randomWidth >= 0 && randomWidth <= 26 || randomWidth < 0;
  
  while(true ) {

    if( (checkRandomWidth - randomWidth >= 26 || checkRandomWidth === 0 || randomWidth - checkRandomWidth >= 26) && !zeroWidth ) {
      break;
    }
    randomWidth = Math.floor(Math.random() * value * 100) - 26;
    zeroWidth = randomWidth >= 0 && randomWidth <= 26 || randomWidth < 0;
  }
  
  checkRandomWidth = randomWidth;
  return randomWidth
}

const getPositionElements = (elNodeList, width, height )=> {

  for(let el of elNodeList) {
    if(el.className !== "field_box" ) {
      let fieldBarierTop = el.offsetTop;
      let fieldBarierLeft = el.offsetLeft;
      
      el.style.top = (el.offsetTop * 0) + getRandomPosisionNumberForWidth(height)  + 'px';
      fieldBarierTop = el.offsetTop;

      el.style.left = (el.offsetLeft * 0) + getRandomPosisionNumberForHeight(width)  + 'px';
      fieldBarierLeft = el.offsetLeft;
      
    }
  }
}

const getNumbersElements = (value) => {
  let arrayDiv = []
  for(let i = 1; i <= value; i++) {
    let tagElement = `<div class="field_box-barrier field_box-barrier-${i}"></div>`;
    arrayDiv.push(tagElement);
  }
  let stringElements = arrayDiv.join('');
  field.insertAdjacentHTML('beforeend', stringElements);

}

btnGenerate.addEventListener('click', ev => {
  let valueBariers = inputNumber.value;
  let valueWidth = inputWidth.value;
  let valueHeight = inputHeight.value;
  field.style.width = (widthField * 0) + (+valueWidth * 100) + 'px';
  field.style.height = (heightField * 0) + (+valueHeight * 100) + 'px';
  widthField = field.offsetWidth;
  heightField = field.offsetHeight;

  getNumbersElements(+valueBariers, ev);
  getPositionElements(field.children, +valueWidth, +valueHeight);
  

})


const isPositionElementRight = (arrayNodeList) => {

  for(let el of arrayNodeList) {
    
    const checkRight = (el.offsetLeft - (fieldLeft + 25 ) ) <= 10 && (el.offsetLeft - (fieldLeft + 25 ) ) >= 0;
    const checkTop = el.offsetTop < fieldTop + 25 ;
    const checkBottom = fieldTop < el.offsetTop + 25;
  
    if( el.offsetTop === fieldTop && checkRight  ) {
      return false;
    }
    if(el.offsetTop > fieldTop && checkRight && checkTop ) {
      return false;
    }
    if(el.offsetTop < fieldTop && checkRight && checkBottom ) {
      
      return false;
    }
    
  }
  return true;

}

const isPositionElementLeft = (arrayNodeList) => {

  for(let el of arrayNodeList) {
    
    const checkLeft = ((el.offsetLeft + 32) - fieldLeft )  <= 10 && ((el.offsetLeft + 32) - fieldLeft ) >= 0;
    const checkTop = el.offsetTop < fieldTop + 25 ;
    const checkBottom = fieldTop < el.offsetTop + 25;
  
    if( el.offsetTop === fieldTop && checkLeft  ) {
      return false;
    }
    if(el.offsetTop > fieldTop && checkLeft && checkTop ) {
      
      return false;
    }
    if(el.offsetTop < fieldTop && checkLeft && checkBottom ) {
      
      return false;
    }
    
  }
  return true;

}

const isPositionElementTop = (arrayNodeList) => {

  for(let el of arrayNodeList) {

    const checkTop = (el.offsetTop + 32) - fieldTop <= 10 && (el.offsetTop + 32) - fieldTop >= 0;
    const checkLeft = el.offsetLeft < fieldLeft + 25; 
    const checkRight = fieldLeft < el.offsetLeft + 25;

    if(el.offsetLeft === fieldLeft && checkTop) {
      return false;
    }
    if(el.offsetLeft > fieldLeft && checkTop && checkLeft) {
      return false;
    }
    if(el.offsetLeft < fieldLeft && checkTop && checkRight) {
      return false;
    }

  }
  return true;
}

const isPositionElementDown =(arrayNodeList) => {

  for(let el of arrayNodeList) {
    const checkDown = (fieldTop + 30) - el.offsetTop <= 10 && (fieldTop + 30) - el.offsetTop >= 0;
    const checkLeft = el.offsetLeft < fieldLeft + 25; 
    const checkRight = fieldLeft < el.offsetLeft + 25;

    if(el.offsetLeft === fieldLeft && checkDown) {
      return false;
    }

    if(el.offsetLeft > fieldLeft && checkDown && checkLeft) {
      return false;
    }

    if(el.offsetLeft < fieldLeft && checkDown && checkRight) {
      return false;
    }
  }
  return true;
}

const isPositionElements = (arrayNodeList, direction) => {


  if(direction === 'js-right') {
    return isPositionElementRight(arrayNodeList);
    
  }
  if(direction === 'js-left') {
    return isPositionElementLeft(arrayNodeList);
    
  }
  if(direction === 'js-up') {
    return isPositionElementTop(arrayNodeList);
    
  }
  if(direction === 'js-down') {
    return isPositionElementDown(arrayNodeList);
    
  }

  return true;
  
}



const getNewPositionBox = (ev, arrow) => {

  const pos = isPositionElements(field.children, arrow);
 
  if(arrow === 'js-up' && (fieldTop - 10) >= 0 && pos) {
    
    fieldBox.style.top = fieldTop - 10 + 'px';
    fieldTop = fieldBox.offsetTop;
    
  } 
  if(arrow === 'js-left' && (fieldLeft - 10 ) >= 0 && pos ) {
    fieldBox.style.left = fieldLeft - 10 + 'px';
    fieldLeft = fieldBox.offsetLeft;

  }
  if(arrow === 'js-down' && (fieldTop + 34) <= heightField && pos ) {
    fieldBox.style.top = fieldTop + 10 + 'px';
    fieldTop = fieldBox.offsetTop;

  }
  if(arrow === 'js-right' && (fieldLeft + 34 ) <= widthField && pos) {
    fieldBox.style.left = fieldLeft + 10 + 'px';;
    fieldLeft = fieldBox.offsetLeft;;

  }
}

// цикл переберает коллекцию (стрелки управления) и вызывается событие на нажатом элементе
for(let arrow of boxPositionArrow) {
  arrow.addEventListener('click', ev => {
    const arrow = ev.target.className.split(' ');
    const  arrowBtn = arrow[arrow.length -1];
    
    getNewPositionBox(ev, arrowBtn);
    
  })
}






