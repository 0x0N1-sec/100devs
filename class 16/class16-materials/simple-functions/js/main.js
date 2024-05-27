//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract() {
    const x = 5;
    const y = 3;
    alert(`The difference of 5 and 3 is ${x - y}`);
}
//create a function that divides three numbers and console logs the quotient
function division() {
    const x = 9;
    const y = 6;
    const z = 3;
    console.log(`The diision of 9 and 3 is ${x/z} and 6 and 3 is ${y/z}`)
}
//create a function that multiplys three numbers and returns the product
function multiply() {
    const x = 2;
    const y = 4;
    const z = 6;
    return x*y*z;
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function nonsense(num1, num2, num3) {
    return (num1 + num2) % num3;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
