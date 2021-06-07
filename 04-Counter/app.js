const number = document.querySelector(".number");
const btns = [...document.querySelectorAll(".btn")];

let count = parseInt(number.textContent);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const text = e.currentTarget.classList;

    if (text.contains("decrease")) {
      count = count - 1;
    } else if (text.contains("increase")) {
      count = count + 1;
    } else if (text.contains("reset")) {
      count = 0;
    }
    number.textContent = `${count}`;
  });
});
