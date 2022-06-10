const input = document.querySelector('.input');
const res = document.querySelector('.res');
const btn = document.querySelectorAll('.btn');
const btnPlus = document.querySelectorAll('.plus');

let result = 0;

input.addEventListener('keydown', ev => {
  console.log(ev.key);
  if(ev.key === 'Backspace') {
    input.value = '';
  }

  if( ev.key === '+') {
    result += Number(input.value);
    input.value = '';
  } 

  if(ev.key === 'Enter') {
    result += Number(input.value);
    input.value = result;
    result = 0;
  }
})

const getResultCalculator = (ev) => {

  if(ev === 'C') {
    input.value = '';
  }

  if(ev === '+') {
    result += Number(input.value);
    input.value = '';
  } 

  if(ev !== '+' && ev !== '=' && ev !== 'C' ) {
    input.value += ev;
  }

  if(ev === '=' ) {
    result += Number(input.value);
    input.value = result;
    result = 0;
  }

}

const getEventListener = el => {

  el.addEventListener('click', ev => {
    
    const innerBtn = ev.target.innerText

    getResultCalculator(innerBtn)

  })
}

  btn.forEach(el => {

    getEventListener(el);
    
  })







