const input = document.getElementById("validation-input");
const inputAdd = Number(input.dataset.length);

input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === inputAdd) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
    }
    console.log(event.currentTarget.value.length === inputAdd)
});