const data = ["img-5.jpg", "img-6.jpg", "img-7.jpg", "img-8.jpg", "img-9.jpg"];
const container = document.querySelector(".slider-container");

container.innerHTML = data
  .map((item) => {
    return ` <div class="slider">
          <img src="./img/${item}" alt="img5" />
        </div>`;
  })
  .join("");

const slides = container.querySelectorAll(".slider");

slides.forEach((slide, index) => {
  if (index == 0) {
    slide.classList.add("active");
  }
  slide.addEventListener("click", () => {
    slides.forEach((item, id) => {
      item.classList.remove("active");
      if (id == index) {
        item.classList.add("active");
      }
    });
  });
});
