const boxPosition = document.querySelector('.box');
const arrowUp = document.querySelector('.up');
const arrowLeft = document.querySelector('.left');
const arrowDown = document.querySelector('.down');
const arrowRight = document.querySelector('.right');
const input = document.querySelector('.form > input');
const button = document.querySelector('.form > button');

let boxPositionLeft = boxPosition.offsetLeft
let boxPositionTop = boxPosition.offsetTop

let num = 10;

const position = (ev, directions) => {

  console.log( ev.repeat)
  if(directions === 'up'|| ev.code === 'ArrowUp' || ev.repeat ) {
    boxPosition.style.top = boxPositionTop - num + 'px'
    boxPositionTop = boxPosition.offsetTop
  }

  if(directions === 'left' || ev.code === 'ArrowLeft' ) {
    boxPosition.style.left = boxPositionLeft - num + 'px'
    boxPositionLeft = boxPosition.offsetLeft
  }

  if(directions === 'down' || ev.code === 'ArrowDown' || ev.repeat) {
    boxPosition.style.top = boxPositionTop + num + 'px'
    boxPositionTop = boxPosition.offsetTop
  }

  if(directions === 'right' || ev.code === 'ArrowRight') {
    boxPosition.style.left = boxPositionLeft + num + 'px'
    boxPositionLeft = boxPosition.offsetLeft
  }

}
// !!!событие на клик мыши

arrowUp.addEventListener('click', ev => {
  position(ev, 'up');
})
arrowLeft.addEventListener('click', ev => {
  position(ev, 'left')
})
arrowDown.addEventListener('click', ev => {
  position(ev, 'down')
})
arrowRight.addEventListener('click', ev => {
  position(ev, 'right')
})

// !!!событие на клавиатуру

document.addEventListener('keydown', ev => position(ev))

// !!!событие на изминения input 

button.addEventListener('click', ev => {
  num = +input.value
  
})