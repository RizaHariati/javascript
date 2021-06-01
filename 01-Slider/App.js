import people from "./data.js";

const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

container.innerHTML = people
  .map((person, index) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (index == 0) {
      position = "active";
    }
    if (index == people.length - 1) {
      position = "last";
    }

    return `<div class="slide ${position} ">
            <img src=${img} alt=${name} />
            <h3 class="name">${name}</h3>
            <p class="title">${job}</p>
            <p class="job-desc">
             ${text}
            </p>
          </div>`;
  })
  .join("");

const sliderTool = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let nextSlide = active.nextElementSibling;
  if (!nextSlide) {
    nextSlide = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  nextSlide.classList.remove(["next"]);

  if (type === "prev") {
    last.classList.add("active");
    active.classList.add("next");
    nextSlide.classList.add("next");
    nextSlide = last.previousElementSibling;

    if (!nextSlide) {
      nextSlide = container.lastElementChild;
    }
    nextSlide.classList.remove(["next"]);
    nextSlide.classList.add(["last"]);
    return;
  }

  active.classList.add(["last"]);
  nextSlide.classList.add(["active"]);
  last.classList.add(["next"]);
};

nextBtn.addEventListener("click", () => {
  sliderTool("prev");
});

prevBtn.addEventListener("click", () => {
  sliderTool("");
});
