const pages = document.querySelectorAll(".page");
const bali = document.querySelector(".bali");
const lombok = document.querySelector(".lombok");

pages.forEach((page) => {
  page.addEventListener("mouseover", (e) => {
    e.preventDefault();
    pages.forEach((item) => {
      item.style.width = `0`;
    });
    if (e.currentTarget.classList.contains("bali")) {
      bali.style.width = `160%`;
      lombok.style.width = `40%`;
    } else if (e.currentTarget.classList.contains("lombok")) {
      lombok.style.width = `160%`;
      bali.style.width = `40%`;
    }
  });
  page.addEventListener("mouseout", (e) => {
    e.preventDefault();

    pages.forEach((item) => {
      item.style.width = `100%`;
    });
  });
});
