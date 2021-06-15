// --date--

const date = document.querySelector(".date");

const newDate = new Date().getFullYear();
date.textContent = newDate;

// --toggle--

const container = document.querySelector(".links-container");
const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const navLinksHeight = links.getBoundingClientRect().height;
toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.toggle("show-links");
  let navHeight = container.getBoundingClientRect().height;
  if (navHeight == 0) {
    container.style.height = `${navLinksHeight}px`;
  } else {
    container.style.height = `${0}px`;
  }
});

// --fix navbar--
const nav = document.querySelector("nav");
const navHeight = nav.getBoundingClientRect().height;
const backHomeBtn = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  let scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    backHomeBtn.classList.add("show-link");
  } else {
    backHomeBtn.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();

    const linkClicked = e.currentTarget.getAttribute("href").slice(1);
    const link = document.getElementById(linkClicked);
    const navHeight = nav.getBoundingClientRect().height;
    let position = link.offsetTop - navHeight;
    const fixedNav = nav.classList.contains("fixed-nav");
    const linksContainer = container.getBoundingClientRect().height;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position - linksContainer;
    }
    window.scrollTo({ top: position, left: 0 });
    container.style.height = 0;
  });
});
