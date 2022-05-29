const algorithm = document.querySelector('select[name="algorithm"]');
let blockAlgorithm = document.querySelector('.listAlgorithm');
let step = 'one';

const getAlgorithm = () => {
    const result = algorithm.value;
    const boolen = result === step;
    if(boolen) {
        switch(step) {
            case 'one':
                blockAlgorithm.insertAdjacentHTML('afterbegin', '<li>Подойти к холодильнику</li>');
                step = 'two';
                return;
            case 'two':
                blockAlgorithm.insertAdjacentHTML('beforeEnd', '<li>Открыть дверь</li>');
                step = 'three';
                return;
            case 'three':
                blockAlgorithm.insertAdjacentHTML('beforeEnd', '<li>Достать колбасу</li>');
                step = 'four';
                return;
            case 'four':
                blockAlgorithm.insertAdjacentHTML('beforeEnd', '<li>Закрыть дверь</li>');
                return;
            default:
                console.error('Что то не то. Попробуйте заново.');
                
        }
    } else {
        blockAlgorithm.insertAdjacentHTML('beforeEnd', '<li>Неправельние действие в алгоритме. Попробуйте заново.</li>');
    }
    
}

algorithm.addEventListener('change', getAlgorithm);

