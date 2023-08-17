const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// ingredients.forEach(ingredient => {
//   const list = document.querySelector("#ingredients");
//   const elementLi = document.createElement("li");
//   elementLi.textContent = ingredient;
//   elementLi.classList.add("item");
//   list.appendChild(elementLi);
//   list.style.listStyle = "none";
// console.log(elementLi);
// })
const list = document.querySelector("#ingredients");
console.log(list);

const markup = ingredients
  .map(ingredient => `<li class="item">${ingredient}</li>`)
  .join("");
    list.style.listStyle = "none";

list.innerHTML = markup;