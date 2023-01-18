const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngredients = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const elemLi = document.createElement("li");
  elemLi.classList.add("item")
  elemLi.textContent = ingredient;
  allIngredients.appendChild(elemLi);
};