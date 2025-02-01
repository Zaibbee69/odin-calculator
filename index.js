// First querying over for all the buttons and required Stuff
let buttons = document.querySelectorAll("button");
let result = document.getElementById("result");
let history = document.getElementById("history");


buttons.forEach(button => {
button.addEventListener("click", () => {

    let value = button.dataset.value;

    if ( value == "clear" ) clear();

    else if ( value == "=" ) calculate();

    else result.textContent += value.toString();
})
})

function calculate()
{
    const expression = separator(result.textContent.toString());
    
    const answer = operate(expression[0], expression[2], expression[1]);

    result.textContent = answer.toString();
}

function separator(numberInStringFormat)
{
    return numberInStringFormat.split(/([+\-*/])/);
}

function clear()
{
    result.innerHTML = "";
    history.innerHTML = "";
}

function operate(num1, num2, operator)
{
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);

    // Checking which kind of operation was selected and performing calculation as expected
    switch (operator) {

        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    
        // If any kind of error occurs
        default:
            return "Error";
    }
}