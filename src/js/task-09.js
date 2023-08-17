function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.body;

function clickHandler(event) {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  spanEl.textContent = randomHexColor;
};

btnEl.addEventListener("click", clickHandler);