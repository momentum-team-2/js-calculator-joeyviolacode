/*
Finished and TODOs:
Catches invalid input and throws an alert, allowing user to backspace and enter new input
Basic keyboard entry implemented (and commented out, because) logic for excluding letters and accepting Shift-reliant values not implemented
Rudimentary colors and button press CSS included, though not the focus of assignment
Need to implement spaces around operators for cleaner look in display...add operator logic

*/

let inputLocation = document.querySelector(".display-container")
let text = ""

//Set EventListeners for all buttons
let inputButtons = document.querySelectorAll(".input-button")
for (let button of inputButtons) {
    button.addEventListener("click", updateInput)
}
document.querySelector("#equals").addEventListener("click", evaluateInput)
document.querySelector("#C").addEventListener("click", resetInput)
document.querySelector("#BS").addEventListener("click", backspace)

//Test Case for keypresses...so below basic functions for logic...works, commented out
//document.querySelector(".everything").addEventListener("keydown", handleKeydown)

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
    try {
        let value = eval(text)
        resetInput()
        text = value
        setInnerHTML(value) 
    } catch(e) {
        alert("That's not valid.  Try again.")
    }
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


//test case for keyboard input...
//works...would have to add logic for excluding non-numbers and including
//characters produced with Shift key...certain I can do it, so saving some
//life by not doing it at the moment
//Currently works for any single-input keys, not attached to enter to evaluate
//Commenting out, as it currently accepts all the things.
/*function updateKeydown(code) {
    if (String.fromCharCode(code) === "." && text.length === 0) {
        text += "0."
    } else {
        text += String.fromCharCode(code)
    }
    setInnerHTML(text)
}

function handleKeydown(event) {
    updateKeydown(event.keyCode)
}*/