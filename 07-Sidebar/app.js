import data from "./data.js";

const socmedLinks = document.querySelector(".socmed");
const navLinks = document.querySelector(".nav-links");
const sidebar = document.querySelector(".sidebar");
const sidebarMenu = document.querySelector(".sidebar-menu");
const sidebarSocmed = document.querySelector(".sidebar-socmed");
const closeBtn = document.querySelector(".close");
const toggleBtn = document.querySelector(".toggle");
const { socmed, links } = data;

socmedLinks.innerHTML = socmed
  .map((link) => {
    const { url, icon } = link;
    return `
         <button class="btn socmedBtn">
            <i class="${icon}"></i>
          </button>
        `;
  })
  .join("");

navLinks.innerHTML = links
  .map((link) => {
    return ` <button class="btn linkBtn">${link.link}</button>`;
  })
  .join("");

sidebarMenu.innerHTML = links
  .map((link) => {
    return `
    <button class="btn sidebarBtn">${link.link}</button>
    `;
  })
  .join("");

sidebarSocmed.innerHTML = socmed
  .map((link) => {
    return `
 <button class="socmedBtn btn"><i class="${link.icon}"></i></button>
    `;
  })
  .join("");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
