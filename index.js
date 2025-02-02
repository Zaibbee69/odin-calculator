// First querying over for all the buttons and required Stuff
let buttons = document.querySelectorAll("button");
let result = document.getElementById("result");
let history = document.getElementById("history");


buttons.forEach(button => {
button.addEventListener("click", () => {

    let value = button.dataset.value;

    if ( value == "clear" ) clear();

    else if ( value == "=" ) calculate();

    else 
    {
        result.textContent += value.toString();
    };
})
})

function calculate() {
    try 
    {
        const expression = separator(result.textContent);
        const answer = evaluateExpression(expression);
        
        history.textContent = result.textContent;
        result.textContent = answer.toString();
    } 
    catch (error)
    {
        result.textContent = "System Failure";
    }
}

function separator(numberInStringFormat)
{
    return numberInStringFormat.split(/([+\-*/])/);
}

function clearScreen()
{
    result.innerHTML = "";
}

function clear()
{
    result.innerHTML = "";
    history.innerHTML = "";
}

function evaluateExpression(tokens) {
    let numbers = [];
    let operators = [];

    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    // Helper function to perform operations
    function applyOperator() {
        const operator = operators.pop();
        const b = numbers.pop();
        const a = numbers.pop();
        numbers.push(operate(a, b, operator));
    }

    tokens.forEach(token => {
        if (!isNaN(token)) {
            numbers.push(parseFloat(token));
        } else if (['+', '-', '*', '/'].includes(token)) {
            while (
                operators.length &&
                precedence[operators[operators.length - 1]] >= precedence[token]
            ) {
                applyOperator();
            }
            operators.push(token);
        }
    });

    // Apply remaining operators
    while (operators.length) {
        applyOperator();
    }

    return numbers[0];
}

function operate(num1, num2, operator)
{
    num1 = Number.parseFloat(num1);
    num2 = Number.parseFloat(num2);

    // Checking which kind of operation was selected and performing calculation as expected
    switch (operator) {

        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Project SkyNet";
    
        // If any kind of error occurs
        default:
            return "Error";
    }
}