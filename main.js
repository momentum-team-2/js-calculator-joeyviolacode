let inputLocation = document.querySelector(".display-container")
let text = ""

let inputButtons = document.querySelectorAll(".input-button")
inputButtons[0].addEventListener("click", updateInput())


/*for (let button of inputButtons) {
    //let key = button.id
    //console.log(key)
    button.addEventListener("click", updateInput(event))
}*/


//Basic functions for updating the input in various ways
function updateInput(event) {
    //console.log(event)
    //newText = 
    text += event.target.id
    inputLocation.innerHTML = `<p class="display">${text}</p>`
}

function resetInput() {
    text = ""
}

function evaluateInput() {
    return eval(inputStr)
}

function backspace() {
    if (inputStr.length > 0) {
        inputStr.slice(0, -1)
    }
}

