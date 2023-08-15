function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.body;

function clickHandler(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.innerHTML = getRandomHexColor();
};

btnEl.addEventListener("click", clickHandler);