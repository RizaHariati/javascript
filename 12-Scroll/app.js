const toggleBtn = document.querySelector(".nav-icon");
const navContainer = document.querySelector(".nav-container");

toggleBtn.addEventListener("click", () => {
  navContainer.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navContainer.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navContainer.classList.add("scroll");
  } else {
    navContainer.classList.remove("scroll");
  }
});
