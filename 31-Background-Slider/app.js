const data = [
  "flowers-1716747_640.jpg",
  "thanksgiving-3811492_1920.jpg",
  "tulips-4072214_640.jpg",
  "wildflowers-1406846_1920.jpg",
];
const container = document.querySelector(".container");
const rightBtn = document.querySelector(".right");
const leftBtn = document.querySelector(".left");

let index = 0;

loadSlider();

function loadSlider() {
  container.innerHTML = `
      <img
        src="./img/${data[index]}"
        alt="flower"
        class="image1"
      />
      <div class="slide">
        <img
          src="./img/${data[index]}"
          alt="flower"
          class="image2"
        />
      </div>
  `;

  setTimeout(() => {
    container.classList.add("show");
  }, 1);
}

rightBtn.addEventListener("click", () => {
  container.classList.remove("show");
  console.log(index++);
  if (index > data.length - 1) {
    index = 0;
  }
  loadSlider();
});

leftBtn.addEventListener("click", () => {
  container.classList.remove("show");
  console.log(index--);
  if (index < 0) {
    index = data.length - 1;
  }
  loadSlider();
});
