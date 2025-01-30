
// First querying over for all the buttons and required Stuff
let buttons = document.querySelectorAll("button");
let result = document.getElementById("result");
let history = document.getElementById("history");
let clear = document.getElementById("btn-clr");

// Adding an event listener if clicked
buttons.forEach(button => {
button.addEventListener("click", () => {

    // Getting the value of the button which was clicked
    let value = button.dataset.value;

    // Now changing the display based on what was clicked
    result.textContent += value.toString();
})
})

// Adding an event listener if clear clicked
clear.addEventListener("click", () => {

    // Resetting values
    result.innerHTML = "";
    history.innerHTML = "";
})



// Ok so first making functions for the function for the operate
function operate(num1, num2, operator)
{
    // Checking which kind of operation was selected and performing calculation as expected
    switch (operator) {

        case "ADD":
            return num1 + num2;
        case "SUB":
            return num1 - num2;
        case "MUL":
            return num1 * num2;
        case "DIV":
            return num1 / num2;
    
        // If any kind of error occurs
        default:
            return NaN;
    }
}

// Functions for all the buttons that populate the display when clicked