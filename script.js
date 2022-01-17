const input = document.querySelector('.input');
let qtyOfRounds = 3;
input.addEventListener('input', (event) => {
    qtyOfRounds = parseInt(input.value);
    console.log(qtyOfRounds);
});

const h1 = document.querySelector('h1');
const greenBtn = document.querySelector('.greenBtn');
const blueBtn = document.querySelector('.blueBtn');
const redBtn = document.querySelector('.redBtn');
let greenBtnClicked = 0;
let blueBtnClicked = 0;

greenBtn.addEventListener('click', (event) => {
    greenBtnClicked ++;
    h1.textContent = `${greenBtnClicked} to ${blueBtnClicked}`;
    if (greenBtnClicked === qtyOfRounds) {
        
    }
});

blueBtn.addEventListener('click', (event) => {
    blueBtnClicked ++;
    h1.textContent = `${greenBtnClicked} to ${blueBtnClicked}`;
});

redBtn.addEventListener('click', (event) => {
    greenBtnClicked = 0;
    blueBtnClicked = 0;
    h1.textContent = `${greenBtnClicked} to ${blueBtnClicked}`;
});
