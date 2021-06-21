const btn = document.querySelector(".btn");
const container = document.querySelector(".main-article");

btn.addEventListener("click", () => {
  container.classList.toggle("rotate");
  if (btn.firstElementChild.classList.contains("fa-bars")) {
    btn.firstElementChild.classList.remove("fa-bars");
    btn.firstElementChild.classList.add("fa-times");
  } else {
    btn.firstElementChild.classList.remove("fa-times");
    btn.firstElementChild.classList.add("fa-bars");
  }
});
