const btn = document.querySelector(".btn");
const inputSearch = document.querySelector(".input-search");

btn.addEventListener("click", () => {
  inputSearch.classList.toggle("show");
});
