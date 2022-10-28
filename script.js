const btns = document.querySelectorAll(".button");
const op = document.getElementById("op");
const display = document.getElementById("display");
const operand = document.querySelectorAll(".operator");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const clear = document.getElementById("clearCalc");
const del = document.getElementById("del");
const buttonKeyboard = document.querySelectorAll("button");

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

    // buttons and max-numbers limit
let key1 = ""; 
let key1Limit = 0;
let key2 = "";
let key2Limit = 0;

let midOp = ""; // + - * /

let total = "";

let firstTotal = false;
let dotBtn = false;
let dotBtn2 = false;

btns.forEach(e => { e.addEventListener("click",pressKey)});
operand.forEach(e => { e.addEventListener("click",pressOp)});
equal.addEventListener("click", operator);
clear.addEventListener("click", clearCalc);
dot.addEventListener("click", dotButton);
del.addEventListener("click", delButton);


function pressKey (e) {
   const key = e.target.value;
   if (key1Limit < 8 && key2Limit < 8){   // display limit for both 1st and 2nd number
    if (!midOp) {
    key1 += key;
    display.textContent = key1;
key1Limit++;
console.log(key1Limit)
   }
   if (midOp) {
    key2 += key;
    display.textContent = key2;
key2Limit++;
console.log(key2Limit)
   }}
   else (
    alert("Max 8 numbers only")
   )

}
function pressOp (e) { // for      + * / -
    const key = e.target.value;
    if (!key1) {
        midOp = "";
    }
    else {
        if (firstTotal) { // restart the key2 when a op is pressed
            key2 = "";
            key2Limit = 0;
        }
        firstTotal = false;
     midOp = key;
     op.textContent = midOp;
     key1Limit = 0;
     key2Limit = 0;
    }
 }

function add (a, b) {    
    total = a + b;
    numLimit();
    display.textContent = total;
    key1 = total;
    return  total;
}
function subtract (a, b) {    
    total = a - b;
    numLimit(); 

    display.textContent = total;
    key1 = total;
    return total;
}
function multiply (a, b) {    
    total = a * b;   
    numLimit();     
    display.textContent = total;
    key1 = total;
    
    return total;
}
function divide (a, b) {    
    if (b == 0) {
        return display.textContent = "ERROR";
    }
    total = a / b;
    numLimit(); 

    display.textContent = total;
    key1 = total;
    return total;
}

function operator (num1 ,option, num2) { 
    num1 = parseFloat(key1);
    num2 = parseFloat(key2);
    option = midOp;
    if (firstTotal) { // dont remember lol
        total = num2;
    }
    if (option == "+" && key2 != "") {
        firstTotal = true;

        add(num1, num2);
        dotBtn2 = false;

    }
    if (option == "-" && key2 != "") {
        firstTotal = true;

        subtract(num1, num2);
        dotBtn2 = false;

    }
    if (option == "*" && key2 != "") {
        firstTotal = true;

        multiply(num1, num2);
        dotBtn2 = false;

    }
    if (option == "/" && key2 != "") {
        firstTotal = false;

        divide(num1, num2);
        dotBtn2 = false;

    }
    else {
        return "Something is wrong";
    }
}
function clearCalc () { // reset the variables
    key1 = "";
    key2 = "";
    midOp = "";
    total = "";
    display.textContent = "";
    op.textContent = "";
    firstTotal = false;
    dotBtn = false;
    dotBtn2 = false;
    key1Limit = 0;
    key2Limit = 0;

}
function dotButton () {
    if (key1 && !dotBtn) {
    console.log("no")  
    key1 += ".";
    key1Limit++;
    display.textContent = key1;
    dotBtn = true;
}
if (key2 && !dotBtn2) {
    console.log("no2")  
    key2 += ".";
    key2Limit++;
    display.textContent = key2;
    dotBtn2 = true;
}
if (!key1) {
    console.log("yes")
}
}
function delButton (){
    const k1 = key1.toString();
    const k2 = key2.toString();
    const ttl = total.toString();

    if (key1 && !key2) {
       key1 = k1.slice(0, k1.length -1);
       display.textContent = key1;
       console.log("hi");
    }
    if (key1 && key2) {
       key2 = k2.slice(0, k2.length -1);
       display.textContent = key2;
       console.log("NOOOO");

    }

}
function numLimit () { // create new variables with chars limit
    const k1 = key1.toString();
    const k2 = key2.toString();
    const ttl = total.toString();
    if (k1.length > 8) {
       key1 = k1.slice(0, 8);
    }
    if (k2.length > 8) {
       key2 = k2.slice(0, 8);
    }
    if (ttl.length > 8) {
       total =  ttl.slice(0 ,8);
    }
}