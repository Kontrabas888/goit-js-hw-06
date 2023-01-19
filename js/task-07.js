const textInput = document.getElementById("font-size-control");
const output = document.getElementById("text");

textInput.addEventListener("change", toTextInput);

function toTextInput(event) {
    textInput.range = event.currentTarget.value;
    output.style.fontSize = `${event.target.value}px`;
    console.log(output.style.fontSize);
}