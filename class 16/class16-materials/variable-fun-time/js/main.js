//--- Easy
//create a variable and assign it a number
let myVar = 5;
//minus 10 from that number
myVar = myVar - 10;
//print that number to the console
console.log(myVar);
//--- Medium
//create a variable that holds a value from the input
let inputVar = document.querySelector("#danceDanceRevolution").value;
//add 25 to that number
inputVar = inputVar + 25;
//alert that number
alert(inputVar);
//--- Hard
//create a variable that holds the h1
const headerVar = document.querySelector("h1");
//add an event listener to that element that console logs the sum of the two previous variables
headerVar.addEventListener("click", sum);

function sum() {
    console.log(myVar + Number(inputVar));
}