document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day === "Tuesday" || day === "Thursday") {
    alert("CLASS DAY");
  } else if (day === "Saturday" || day === "Sunday") {
    alert("WEEKEND!");
  } else {
    alert("BORING");
  }

}
