const algorithm = document.querySelector('select[name="algorithm"]');
let blockAlgorithm = document.querySelector('.listAlgorithm');
let step = 'one';

const getAlgorithm = () => {
    const result = algorithm.value;
    const bool = result === step;
    console.log(bool)
    console.log(step)
    console.log(blockAlgorithm)
    if(bool) {
        switch(step) {
            case 'one':
                blockAlgorithm.innerHTML = '<li>Подойти к холодильнику</li>';
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
        return;
    }
    
}

algorithm.addEventListener('change', getAlgorithm);

