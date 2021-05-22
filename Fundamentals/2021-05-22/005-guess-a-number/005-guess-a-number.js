function compare(event) {
  event.preventDefault();
  const input = document.getElementById("guess").value;
  text(input);
}

function text(input) {
  let random = Math.floor(Math.random() * 11);
  let verdict = "";
  if (input > 10) {
    verdict = "Please input a number less than 10";
  } else if (input == random) {
    verdict = "BINGO!";
  } else {
    verdict = "Sorry, you're wrong. Try again!";
  }
  document.getElementById("result").value = random;
  document.getElementById("verdict").innerHTML = `${verdict}`;
}
