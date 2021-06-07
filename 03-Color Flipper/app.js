const resetBtns = document.querySelectorAll(".linkBtn");
const span = document.querySelector(".span");
const changeBtn = document.querySelector(".btn");
const main = document.querySelector(".main");

resetBtns.forEach((resetBtn) => {
  resetBtn.addEventListener("click", () => {
    main.style.backgroundColor = "#fffcf2";
    span.textContent = "#fffcf2";
  });
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

changeBtn.addEventListener("click", () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[randomNumber()];
  }

  main.style.backgroundColor = color;
  span.textContent = color;
});

const randomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
