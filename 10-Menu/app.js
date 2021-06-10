import menu from "./data-menu.js";

const menuItems = document.querySelector(".menu-items");
const navMenu = document.querySelector(".nav-menu");

const navType = ["All", ...new Set(menu.map((item) => item.type))];

navMenu.innerHTML = navType
  .map((type) => {
    return `<button class="btn menuBtn">${type}</button> `;
  })
  .join("");

const selectAll = (menu) => {
  menuItems.innerHTML = menu
    .map((item) => {
      const { name, desc, price, img } = item;

      return ` <div class="menu">
          <div class="image">
            <img src="./img/${img}" alt="" />
          </div>
          <div class="info">
            <div class="header">
              <div class="title">
                <h3 class="titleName"> ${name}</h3>
                <p class="price">$${price}</p>
              </div>
            </div>
            <p class="desc"> ${desc}</p>
          </div>
        </div>`;
    })
    .join("");
};

window.addEventListener("DOMContentLoaded", (e) => {
  selectAll(menu);
});
const menuBtns = document.querySelectorAll(".menuBtn");

menuBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const menuText = e.target.textContent;
    if (menuText == "All") {
      selectAll(menu);
    } else {
      filterMenu(menuText);
    }
  });
});

const filterMenu = (menuText) => {
  const newMenu = menu.filter((item) => item.type == menuText);
  selectAll(newMenu);
};
