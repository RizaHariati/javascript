import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebarLinks = document.querySelector(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".linkBtn")];
const submenu = document.querySelector(".submenu");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav-container");

toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

sidebarLinks.innerHTML = sublinks.map((sublink) => {
  const { links, page } = sublink;
  return `
    <div class="sidebar-sublinks">
      <h4>${page}</h4>
      <article class="links">
        ${links
          .map((link) => {
            const { label, icon } = link;
            return ` <a href="#"> <i class="fas ${icon}"></i>${label}</a>`;
          })
          .join("")}
      </article>
    </div>
  `;
});

linkBtns.forEach((linkBtn) => {
  linkBtn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const location = e.currentTarget.getBoundingClientRect();
    const bottom = location.bottom + 10;
    const left = (location.right + location.left) / 2;
    const tempPage = sublinks.find((sublink) => sublink.page == text);
    if (tempPage) {
      submenu.classList.add("show");
      submenu.style.left = `${left}px`;
      submenu.style.top = `${bottom}px`;
      let column = "col-2";
      const { links, page } = tempPage;
      if (links.length == 3) {
        column = "col-3";
      }
      submenu.innerHTML = `
        <h4>${page}</h4>
        <div class="submenu-links ${column}">
         ${links
           .map((link) => {
             const { label, icon } = link;
             return `<a href="#"> <i class="fas ${icon}"></i>${label}</a>`;
           })
           .join("")}
        </div>
      `;
    }
  });
});

main.addEventListener("mouseover", function (e) {
  submenu.classList.remove("show");
});

nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("linkBtn")) {
    submenu.classList.remove("show");
  }
});
