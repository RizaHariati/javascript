const date = document.querySelector(".date");
const toggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-link");
const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

const yearToday = new Date();
date.textContent = yearToday.getFullYear();

toggleBtn.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

window.addEventListener("scroll", (e) => {
  const heightWindow = window.pageYOffset;
  const heightNavbar = nav.getBoundingClientRect().height;
  if (heightWindow > heightNavbar) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (heightWindow > 400) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const titles = document.querySelectorAll(".titles");
scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener("click", (e) => {
    e.preventDefault();
    const linkClicked = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(linkClicked);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
