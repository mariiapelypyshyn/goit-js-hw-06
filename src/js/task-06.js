const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

const blurHandler = (event) => {
    const valAttribute = Number(inputEl.dataset.length);
    // console.log(valAttribute);
    if (inputEl.value.length === valAttribute) {
        inputEl.classList.add('valid');
    }
    else {
        inputEl.classList.add('invalid');
    }
};

inputEl.addEventListener("blur", blurHandler); 