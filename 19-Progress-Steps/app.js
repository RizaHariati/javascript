const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const progresses = document.querySelectorAll(".progress");
const numbers = document.querySelectorAll(".number");
let count = 0;
nextBtn.addEventListener("click", () => {
  count++;
  prevBtn.classList.add("ready");
  if (count > 2) {
    count == 2;
    nextBtn.classList.remove("ready");
  }
  progresses.forEach((progress, index) => {
    if (index + 1 == count) {
      progress.classList.add("go");
    }
  });
  setTimeout(() => {
    numbers.forEach((number, id) => {
      if (id == count) {
        number.classList.add("show");
      }
    });
  }, 500);
});

prevBtn.addEventListener("click", () => {
  count--;
  nextBtn.classList.add("ready");
  if (count < 1) {
    nextBtn.classList.add("ready");
    prevBtn.classList.remove("ready");
    count == 1;
  }
  numbers.forEach((number, id) => {
    if (id - 1 == count) {
      number.classList.remove("show");
    }
  });
  progresses.forEach((progress, index) => {
    if (index == count) {
      progress.classList.remove("go");
    }
  });
});
