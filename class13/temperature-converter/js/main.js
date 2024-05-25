//Write your pseduo code first!


document.querySelector('#sel').addEventListener('click', convert);

function convert() {
    //need val in C
    let temp = document.querySelector('#celsius').value;
    //convert from C to F
    temp = temp * 9/5 + 32;
    //show it
    document.querySelector('#ctof').innerText = `${temp} F`;
}
