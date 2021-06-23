const glasses = document.querySelectorAll(".glass");
const progress = document.querySelector(".progress-number");
const bigGlass = document.querySelector(".big-glass-fill");
const goal = document.querySelector(".goal-text");
let total = -0.5;

glasses.forEach((glass) => {
  glass.addEventListener("click", () => {
    const fillingGlass = glass.firstElementChild.classList;
    if (!fillingGlass.contains("show")) {
      fillingGlass.add("show");

      fillBigGlass();
    } else {
      fillingGlass.remove("show");
      reduceBigGlass();
    }
  });
});

function progressing(total) {
  const number = total + 12.5;
  const interval = setInterval(() => {
    total = total + 1;
    progress.textContent = `${total}%`;
    goal.textContent = `Goal: ${(total * 0.02).toFixed(2)} liters;`;
    if (total > number) {
      clearInterval(interval);
    }
  }, 100);
  return number;
}
function reducing(total) {
  const number = total - 12.5;
  const interval = setInterval(() => {
    total = total - 1;
    progress.textContent = `${total}%`;
    goal.textContent = `Goal: ${(total * 0.02).toFixed(2)} liters;`;
    if (total - 1 <= number) {
      clearInterval(interval);
    }
  }, 100);
  return number;
}
function fillBigGlass() {
  total = progressing(total);
  const newTotal = total + 1;
  bigGlass.style.transform = `translateY(${100 - newTotal}%)`;
}
function reduceBigGlass() {
  total = reducing(total);
  const newTotal = total - 1;
  bigGlass.style.transform = `translateY(${100 - newTotal}%)`;
}
