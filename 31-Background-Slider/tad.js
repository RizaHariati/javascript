const data = [
  "/flowers-1716747_640.jpg",
  "thanksgiving-3811492_1920.jpg",
  "tulips-4072214_640.jpg",
  "wildflowers-1406846_1920.jpg",
];
const container = document.querySelector(".container");
const rightBtn = container.querySelector(".right");
const leftBtn = container.querySelector(".left");

let index = 0;
rightBtn.addEventListener("click", () => {
  console.log(index++);
});
