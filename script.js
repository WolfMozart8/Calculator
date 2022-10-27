const btns = document.querySelectorAll(".button");
const display = document.getElementById("display");
const operand = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const clear = document.getElementById("clearCalc");

// test 
const f1 = document.getElementById("f1");
const f2 = document.getElementById("f2");
const f3 = document.getElementById("f3");
const f4 = document.getElementById("f4");
let key1 = "";
let midOp = "";
let key2 = "";
let total = "";
let firstTotal = false;
//test 
// f1.textContent = key1; // test
// f2.textContent = key2; // test
// f3.textContent = midOp; // test
// f4.textContent = total; // test
btns.forEach(e => {
    e.addEventListener("click",pressKey)
});
operand.forEach(e => {
    e.addEventListener("click",pressOp)
});
equal.addEventListener("click", operator);
clear.addEventListener("click", clearCalc);

function pressKey (e) {
   const key = e.target.value;
   if (!midOp) {
    key1 += key;
    display.textContent = key1;
    f1.textContent = key1; // test
f2.textContent = key2; // test
f3.textContent = midOp; // test
f4.textContent = total; // test
   }
   if (midOp) {
    key2 += key;
    display.textContent = key2;
    f1.textContent = key1; // test
f2.textContent = key2; // test
f3.textContent = midOp; // test
f4.textContent = total; // test
   }
}
function pressOp (e) {
    const key = e.target.value;
    if (!key1) {
        midOp = "";
    }
    else {
        firstTotal = false;
     midOp = key;
     display.textContent = midOp;
     f1.textContent = key1; // test
f2.textContent = key2; // test
f3.textContent = midOp; // test
f4.textContent = total; // test
    }
 }

function add (a, b) {    
    total = a + b;
    display.textContent = total;
    key1 = total;
    total = "";
    key2 = "";
    f1.textContent = key1; // test
f2.textContent = key2; // test
f3.textContent = midOp; // test
f4.textContent = total; // test
    return key1;
}
function subtract (a, b) {    
    total = a - b;
    display.textContent = total;
    key1 = total;
    total = "";
    key2 = "";
    return key1;
}
function multiply (a, b) {    
    total = a * b;
    display.textContent = total;
    key1 = total;
    total = "";
    key2 = "";
    return key1;
}
function divide (a, b) {    
    total = a / b;
    display.textContent = total;
    key1 = total;
    total = "";
    key2 = "";
    return key1;
}

function operator (num1 ,option, num2) {
    num1 = parseInt(key1);
    num2 = parseInt(key2);
    option = midOp;
    if (firstTotal) { //test
        num2 = num1;
    }
    if (option == "+") {
        firstTotal = true;

        add(num1, num2);
    }
    if (option == "-") {
        firstTotal = true;

        subtract(num1, num2);
    }
    if (option == "*") {
        firstTotal = true;

        multiply(num1, num2);
    }
    if (option == "/") {
        firstTotal = true;

        divide(num1, num2);
    }
    else {
        return "Something is wrong";
    }
}
function clearCalc () {
    key1 = "";
    key2 = "";
    midOp = "";
    total = "";
    display.textContent = "";
    firstTotal = false;
}