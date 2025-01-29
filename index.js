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
            break;
    }
}
