const btns = document.querySelectorAll("button");
const display = document.getElementById("display");
let num1 = "";
let = btnKey = "";

btns.forEach(addEventListener("click",pressKey));

function pressKey (e) {
   const key = e.target.value;
   if (key === undefined) {
    console.log("choose a valid button you fool!")
   }
   else {
    num1 += key;
    display.textContent = num1;
   }
}

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