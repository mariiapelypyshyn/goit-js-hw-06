
const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);

 let valueId = document.querySelector("#value");
console.log(valueId);

let counterValue = 0;

const funcDecrement = () => {
    counterValue = Number(valueId.innerHTML) - 1;
    valueId.innerHTML = counterValue;
};

const funcIncrement = () => {
    counterValue = Number(valueId.innerHTML) + 1;
    valueId.innerHTML = counterValue;
}

btnDecrement.addEventListener("click", funcDecrement);
btnIncrement.addEventListener("click", funcIncrement);


// btnDecrement.addEventListener("click", function () {
//     let valueId = document.querySelector("#value");
// // console.log(valueId);
// let counterValue = Number(valueId.innerHTML) - 1;
// valueId.innerHTML = counterValue;
//     console.log(valueId);
// });

// btnIncrement.addEventListener("click", function () {
//     let valueId = document.querySelector("#value");
// // console.log(valueId);
// let counterValue = Number(valueId.innerHTML) + 1;
// valueId.innerHTML = counterValue;
//      console.log(valueId);
//  });

