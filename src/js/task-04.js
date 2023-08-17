
const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

 let valueId = document.querySelector("#value");
console.log(valueId);

let counterValue = 0;

const funcDecrement = () => {
    counterValue -= 1;
    valueId.textContent = counterValue;
};

const funcIncrement = () => {
    counterValue += 1;
    valueId.textContent = counterValue;
}

btnDecrement.addEventListener("click", funcDecrement);
btnIncrement.addEventListener("click", funcIncrement);



