let inputLocation = document.querySelector(".display-container")
let text = ""

let inputButtons = document.querySelectorAll(".input-button")
for (let button of inputButtons) {
    button.addEventListener("click", updateInput)
}
document.querySelector("#equals").addEventListener("click", evaluateInput)
document.querySelector("#C").addEventListener("click", resetInput)
document.querySelector("#BS").addEventListener("click", backspace)



//Basic functions for updating the input in various ways
function updateInput(event) {
    if (event.target.id === "." && text.length === 0) {
        text += "0."
    } else {
        text += event.target.id
    }
    setInnerHTML(text)
}

function resetInput() {
    text = ""
    setInnerHTML(text)
}

function evaluateInput() {
    let value = eval(text)
    resetInput()
    text = value;
    setInnerHTML(value)
}

function backspace() {
    if (text.length > 0) {
        text = text.slice(0, -1)
        setInnerHTML(text)
    }
}

function setInnerHTML(value) {
    inputLocation.innerHTML = `<p class="display">${value}</p>`
}

