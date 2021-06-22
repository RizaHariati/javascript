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
      bali.style.width = `65vw`;
      lombok.style.width = `35vw`;
    } else if (e.currentTarget.classList.contains("lombok")) {
      lombok.style.width = `65vw`;
      bali.style.width = `35vw`;
    }
  });
  page.addEventListener("mouseout", (e) => {
    e.preventDefault();

    pages.forEach((item) => {
      item.style.width = `50vw`;
    });
  });
});
