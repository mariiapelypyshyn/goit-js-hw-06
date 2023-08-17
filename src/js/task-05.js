const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", inputHandler);

function inputHandler(event) {
  event.currentTarget.value === ""
  ? spanEl.textContent = "Anonymous"
  : spanEl.textContent = event.currentTarget.value.trim();
};

