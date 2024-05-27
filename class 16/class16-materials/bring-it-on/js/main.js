// *Variables*
// Create a variable and console log the value
let myVar = 10;
// Create a variable, add 10 to it, and alert the value
let thisVar = 5;
thisVar += 10;
alert(thisVar);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function difference(num1, num2, num3, num4) {
    let diff = num1 - num2 - num3 - num4;
    alert(diff);
}
// Create a function that divides one number by another and returns the remainder
function mod(num1, num2) {
    return num1 % num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1, num2) {
    let sum = num1 + num2;
    if(sum > 50) {
        alert("JUMANJI!!");
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(num1, num2, num3) {
    let prod = num1 * num2 * num3;

    if (prod % 3 === 0) {
        alert("ZEBRA!");
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopy(word1, num1) {
    for(let i = 0; i < num1; i++) {
        console.log(word1);
    }
}