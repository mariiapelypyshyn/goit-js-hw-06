const inputEl = document.querySelector("#validation-input");

const blurHandler = (event) => {
    const valAttribute = Number(inputEl.dataset.length);
  
    if (inputEl.value.length === valAttribute) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

inputEl.addEventListener("blur", blurHandler); 