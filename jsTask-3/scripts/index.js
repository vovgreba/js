

// home work LV1
//  изменить код с урока, через if

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const result = document.querySelector(".result");
const button = document.querySelector(".button");

button.addEventListener("click", function () {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  const val3 = Number(input3.value);

  const impossibleTriangle = val2 + val1 < val3 || val3 + val1 < val2 || val2 + val3 < val1;
  const equilateralTriangle = val1 === val2 && val2 === val3;
  const isoscelesTriangle = val1 === val2 || val1 === val3 || val2 === val3;
  const notANumber = !isNaN(val1) || !isNaN(val2) || !isNaN(val3);

  
  if(notANumber) {
    if(impossibleTriangle) {
      console.log('Triangle is impossible to create');
    } else if(equilateralTriangle) {
      console.log('Rovnostoronniy');
      
    } else if(isoscelesTriangle) {
      console.log('Rovnobedrenniy');
    } else {
      console.log('ordinary');
    }
  } else {
    console.log('Not a number value was detected. Triangle cannot be created');

  }

});


// home work LV2

// Дописать условия для египетського треугольника 



button.addEventListener("click", function () {
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  const val3 = Number(input3.value);

  const impossibleTriangle = val2 + val1 < val3 || val3 + val1 < val2 || val2 + val3 < val1;
  const equilateralTriangle = val1 === val2 && val2 === val3;
  const isoscelesTriangle = val1 === val2 || val1 === val3 || val2 === val3;
  const notANumber = !isNaN(val1) || !isNaN(val2) || !isNaN(val3);
  
  let minKut = Math.min(val1,val2,val3);
  let maxKut = Math.max(val1,val2,val3);
  let middleKut = null;

  let midleKutB = val1 < val2 && val2 < val3 || val1 > val2 && val2 > val3;
  let midleKutC = val3 > val1 && val3 < val2 || val3 > val2 && val3 < val1;

  if(midleKutB) {
    middleKut = val2;
  } else if(midleKutC) {
    middleKut = val3;
  } else {
    middleKut = val1;
    
  }

  const egyptianTriangle = minKut % 3 === 0 && maxKut % 5 === 0 && middleKut % 4 === 0;

  
  if(notANumber) {
    if(impossibleTriangle) {
      console.log('Triangle is impossible to create');
    }else if(equilateralTriangle) {
      console.log('Rovnostoronniy');
    } else if(isoscelesTriangle) {
      console.log('Rovnobedrenniy');
    } else if(egyptianTriangle) {
      console.log('The Egyptian Triangle');
    }else {
      console.log('ordinary');
    }

  }else {
    console.log('Not a number value was detected. Triangle cannot be created');
  }

});


// home work LV3

// == | ===
// const input = document.querySelector(".input"); // 11:00am
// military time (24h) | meridian time (pm | am)  | valid time (hh:mm | hh:mm:a)

const input = document.querySelector('.input');

button.addEventListener('click', ev => {
  const value = input.value;

  let numberTime = value[0];
  numberTime += value[1];
  let numberSeconds = value[3];
  numberSeconds += value[4];
  const checkValidTimeMeridian = Number(numberTime) >= 0 && Number(numberTime) <= 12;
  const checkValidTimeMilitary = Number(numberTime) >= 0 && Number(numberTime) <= 24;
  const checkValidSeconds = Number(numberSeconds) >= 0 && Number(numberSeconds) <= 60;

  const checkMeridian = value[value.length - 2] === 'a' && value[value.length - 1] === 'm' || value[value.length - 2] === 'p' && value[value.length - 1] === 'm';

  if(checkMeridian && checkValidTimeMeridian && checkValidSeconds) {
    console.log('meridian time');
  }else if(!checkMeridian && checkValidTimeMilitary && checkValidSeconds) {
    console.log('military time');
  } else {
    console.log('Введите корректное время!')
  }

})

