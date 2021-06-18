const containers = document.querySelectorAll(".container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

window.addEventListener("DOMContentLoaded", () => {
  containers[0].classList.add("show");
  nextBtn.classList.add("show-btn");
});

containers.forEach((container, index) => {
  let position = "next";
  if (index == 0) {
    position = "show";
  } else if (index == containers.length - 1) {
    position = "prev";
  }
  container.classList.add(position);
});

function sliderControl(type) {
  const show = document.querySelector(".show");
  const prev = document.querySelector(".prev");
  let nextSlide = show.nextElementSibling;
  if (!nextSlide) {
    nextSlide = show.parentElement.firstElementChild;
  }
  if (!nextSlide.nextElementSibling) {
    nextBtn.classList.remove("show-btn");
  }
  show.classList.remove("show");
  prev.classList.remove("prev");
  nextSlide.classList.remove("next");
  if (type == "prev") {
    show.classList.add("next");
    prev.classList.add("show");
    nextSlide.classList.add("next");
    nextSlide = prev.previousElementSibling;
    if (!nextSlide) {
      nextSlide = show.parentElement.lastElementChild;
      prevBtn.classList.remove("show-btn");
    }
    nextSlide.classList.remove("next");
    nextSlide.classList.add("prev");
    return;
  }
  show.classList.add("prev");
  prev.classList.add("next");
  nextSlide.classList.add("show");
}

nextBtn.addEventListener("click", () => {
  sliderControl("next");
  prevBtn.classList.add("show-btn");
});

prevBtn.addEventListener("click", () => {
  sliderControl("prev");
  nextBtn.classList.add("show-btn");
});
