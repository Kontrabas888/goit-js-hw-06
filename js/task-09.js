const change = {
  changColorBtn: document.querySelector(".change-color"),
body: document.querySelector("body"),
  colorName: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

change.changColorBtn.addEventListener("click", () => {
  change.body.style.backgroundColor = getRandomHexColor();
  change.colorName.textContent = change.body.style.backgroundColor;
});