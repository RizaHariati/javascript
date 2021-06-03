import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const main = document.querySelector(".main");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  sidebarWrapper.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

sidebar.innerHTML = sublinks
  .map((link) => {
    const { page, links } = link;
    return ` <article>
        <h4>${page}</h4>
        <div class="sidebar-sublinks">
      ${links
        .map((link) => {
          const { label, icon, url } = link;
          return `
            <a href="${url}"><i class="${icon}"></i>${label}</a>
        `;
        })
        .join("")}
         </div>
   </article> `;
  })
  .join("");

linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const bottom = tempBtn.bottom - 3;
    const center = (tempBtn.right + tempBtn.left) / 2;
    const tempPage = sublinks.find(({ page }) => page === text);
    if (tempPage) {
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      let column = "col-2";
      if (tempPage.links.length == 3) {
        column = "col-3";
      } else if (tempPage.links.length > 3) {
        column = "col-4";
      }
      submenu.innerHTML = `<h4>${tempPage.page}</h4>
    <div class="submenu-center ${column}">
        ${tempPage.links
          .map((link) => {
            const { icon, label, url } = link;
            return `
                <a href="${url}"> 
                    <i class="${icon}"></i>
                    ${label}
                </a>
                `;
          })
          .join("")}
      </div>`;
    }
  });
});

main.addEventListener("mouseover", function (e) {
  submenu.classList.remove("show");
});
nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
