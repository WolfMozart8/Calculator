function add (a, b) {    
    return a + b;
}
function subtract (a, b) {    
    return a - b;
}
function multiply (a, b) {    
    return a * b;
}
function divide (a, b) {    
    return a / b;
}

function operator (num1 ,option, num2) {
    if (option == "+") {
        return add(num1, num2);
    }
    if (option == "-") {
        return subtract(num1, num2);
    }
    if (option == "*") {
        return multiply(num1, num2);
    }
    if (option == "/") {
        return divide(num1, num2);
    }
    else {
        return "Something is wrong";
    }
}