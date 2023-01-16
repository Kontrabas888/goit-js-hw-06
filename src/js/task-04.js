let counterValue = 0;


const moreAdd = document.querySelector("[data-action=increment]");
const lessTake = document.querySelector("[data-action=decrement]");
const valueEl = document.getElementById("value");

valueEl.textContent = 0;
const increaseValue = (addClick) => {
    valueEl.textContent = counterValue += 1;
};

const decreaseValue = (addClick) => {
    valueEl.textContent = counterValue -= 1;
};


moreAdd.addEventListener("click", increaseValue);
lessTake.addEventListener("click", decreaseValue);
console.log(counterValue);