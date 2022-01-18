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
    h1.innerHTML = `<span class="firstSpan">${greenBtnClicked} </span>to<span class="secondSpan"> ${blueBtnClicked}</span>`;
    if (greenBtnClicked === qtyOfRounds) {
        const firstSpan = document.querySelector('.firstSpan');
        firstSpan.classList.add("greenColor");
        document.querySelector('.greenBtn').disabled = true;
        document.querySelector('.blueBtn').disabled = true;
    }
});

blueBtn.addEventListener('click', (event) => {
    blueBtnClicked ++;
    h1.innerHTML = `<span class="firstSpan">${greenBtnClicked} </span>to<span class="secondSpan"> ${blueBtnClicked}</span>`;
    if (blueBtnClicked === qtyOfRounds) {
        const secondSpan = document.querySelector('.secondSpan');
        secondSpan.classList.add("blueColor");
        document.querySelector('.greenBtn').disabled = true;
        document.querySelector('.blueBtn').disabled = true;
    }
});

redBtn.addEventListener('click', (event) => {
    greenBtnClicked = 0;
    blueBtnClicked = 0;
    h1.textContent = `${greenBtnClicked} to ${blueBtnClicked}`;
    document.querySelector('.greenBtn').disabled = false;
    document.querySelector('.blueBtn').disabled = false;
});
