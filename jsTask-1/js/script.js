const title = document.querySelector('.title');
const input = document.querySelector('input[name = "text"]')

input.addEventListener('change', el => {
    const output = el.target.value;
    title.textContent = output;
})

