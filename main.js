/*
Finished and TODOs:
    -Catches invalid math syntax or garbage input and throws an alert, allowing user to backspace and enter new input
    -Basic keyboard entry implemented (and commented out, because) logic for excluding letters and accepting Shift-reliant values not implemented
    -Rudimentary colors and button press CSS included, though not the focus of assignment, so, yeah...rudimentary
    -(FINISHED) Need to implement spaces around operators for cleaner look in display...add operator logic and operator class on buttons
    -Somehow missed adding ^.  Would quickly add the button, but it would throw off the flex flow and need a bit more rejiggering....just use ** for now.
    (FINISHED) EXTRA CASES:    n/0 returns Infnity...neat, but needs a change.
                    n%0 return NaN ....ideally will throw an alert in both cases.
*/

let inputLocation = document.querySelector(".display-container")
let text = ""

//Set EventListeners for all buttons
let inputButtons = document.querySelectorAll(".input-button")
for (let button of inputButtons) {
    button.addEventListener("click", updateInput)
}
let operatorButtons = document.querySelectorAll(".operator-button")
for (let button of operatorButtons) {
    button.addEventListener("click", updateOperatorInput)
}
document.querySelector("#equals").addEventListener("click", evaluateInput)
document.querySelector("#C").addEventListener("click", resetInput)
document.querySelector("#BS").addEventListener("click", backspace)

//Test binding for keypresses...see below basic functions with unfettered logic...works, commented out
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

function updateOperatorInput(event) {
    text += " " + event.target.id + " "
    setInnerHTML(text)
}

function resetInput() {
    text = ""
    setInnerHTML(text)
}

function evaluateInput() {
    let noZero = "You cannot divide by 0 in an expression."
    let noMod = "Cannot use % 0 in an expression"
    try {
        let value = eval(text)
        if (value === Infinity) {throw noZero}
        if (isNaN(value)) {throw noMod}
        resetInput()
        text = value
        setInnerHTML(value) 
    } catch(e) {
        if (e === noZero) {
            alert(noZero + " Please try again.")
        } else if (e === noMod) {
            alert(noMod + " Please try again.")
        } else {
        alert("I don't know how to evaluate that.  Check your syntax and try again.")
        }
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

//Unnecessary now, but possibly necessary as flow control to handle different keys
//Haven't thought through that yet.  May eliminate and just use the above function
function handleKeydown(event) {
    updateKeydown(event.keyCode)
}*/