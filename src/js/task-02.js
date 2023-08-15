const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient => {
  const list = document.querySelector("#ingredients");
  const elementLi = document.createElement("li");
  elementLi.textContent = ingredient;
  elementLi.classList.add("item");
  list.appendChild(elementLi);
  list.style.listStyle = "none";
console.log(elementLi);
})
