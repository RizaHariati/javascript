import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const closeBtn = document.querySelector(".close");
const sidebarLinks = document.querySelector(".sidebar-links");
const linksBtns = [...document.querySelectorAll(".linkBtn")];
const submenu = document.querySelector(".submenu");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav-container");

toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

sidebarLinks.innerHTML = sublinks
  .map((sublink) => {
    const { links, page } = sublink;

    return ` <div class="sidebar-sublinks">
            <h4>${page}</h4>
            <article class="links">
             ${links
               .map((link) => {
                 const { icon, label } = link;
                 return `
                <a href="#"> <i class="fas ${icon}"></i>${label}</a>
               `;
               })
               .join("")}
            </article>
          </div>`;
  })
  .join("");

linksBtns.forEach((button) => {
  button.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempPage = sublinks.find((sublink) => sublink.page === text);
    const location = e.currentTarget.getBoundingClientRect();
    const bottom = location.bottom - 3;
    const center = (location.right + location.left) / 2;

    if (tempPage) {
      let column = "col-2";
      if (tempPage.links.length == 3) {
        column = "col-3";
      }
      submenu.classList.add("show");
      submenu.innerHTML = `
      <h4>${tempPage.page}</h4>
      <div class="submenu-links ${column} ">
       ${tempPage.links
         .map((link) => {
           const { icon, label } = link;
           return `
         <a href="#"> <i class="fas ${icon}"></i>${label}</a>
         `;
         })
         .join("")}
      </div>
      `;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
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
