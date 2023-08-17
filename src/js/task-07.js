const inputEl = document.querySelector("#font-size-control");
// console.log(inputEl.value);

const spanEl = document.querySelector("#text");
// console.log(spanEl);

const minValue = Number(inputEl.min);
const maxValue = Number(inputEl.max);
   
// spanEl.style.fontSize = `${((maxValue - minValue) / 2)}px`;

// function inputHandler (inputEl) {
//     spanEl.style.fontSize = `${inputEl.target.value}px`;
// }
    
// inputEl.addEventListener("input", inputHandler);

inputHandler();

function inputHandler() {
    spanEl.style.fontSize = this.value + 'px';
};

inputEl.addEventListener("input", inputHandler);
