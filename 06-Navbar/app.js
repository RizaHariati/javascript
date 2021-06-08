import data from "./data.js";

const socmedLinks = document.querySelector(".socmed");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown-menu");
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

dropdown.innerHTML = `
          ${links
            .map((link) => {
              return ` <button class="btn dropdownBtn">${link.link}</button>`;
            })
            .join("")}
        `;

toggleBtn.addEventListener("click", () => {
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
});
