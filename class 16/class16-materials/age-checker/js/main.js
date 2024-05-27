//Create a conditonal that checks their age
let age = Number(document.querySelector("input").value);
//If under 16, tell them they can not drive
if (age < 16) {
    alert("You ain't goin' nowhere!");
} else if (age < 18) { //If under 18, tell them they can't hate from outside the club, because they can't even get in
    alert("No Entry! And, stay off that hatorade, chump!");
} else if (age < 21) {
    alert("Shirley Temples only, little feller!"); //If under 21, tell them they can not drink
} else if (age < 25) { //If under 25, tell them they can not rent cars affordably
    alert("Momma's gonna be drivin' you today LITTLE BOY!")
} else if (age < 30) { //If under 30, tell them they can not rent fancy cars affordably
    alert("Uhh..let me show you to a lot with rides...more in your....bracket"); 
} else { //If under over 30, tell them there is nothing left to look forward too
    alert("Well...life sucks...then you die...");
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector("h1").addEventListener("click", ageCheck);

function ageCheck(age) {
    if (age < 16) {
        document.querySelector("p").innerText("You ain't goin' nowhere!");
    } else if (age < 18) { //If under 18, tell them they can't hate from outside the club, because they can't even get in
        document.querySelector("p").innerText("No Entry! And, stay off that hatorade, chump!");
    } else if (age < 21) { //If under 21, tell them they can not drink
        document.querySelector("p").innerText("Shirley Temples only, little feller!"); 
    } else if (age < 25) { //If under 25, tell them they can not rent cars affordably
        document.querySelector("p").innerText("Momma's gonna be drivin' you today LITTLE BOY!");
    } else if (age < 30) { //If under 30, tell them they can not rent fancy cars affordably
        document.querySelector("p").innerText("Uhh..let me show you to a lot with rides...more in your....bracket"); 
    } else { //If under over 30, tell them there is nothing left to look forward too
        document.querySelector("p").innerText("Well...life sucks...then you die...");
    }
}
