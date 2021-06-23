const form = document.querySelector(".form");
const btnContainer = document.querySelector(".btn-container");
const text = document.querySelector(".text");

text.focus();
let textContent = "";
let btnArray = [];
text.addEventListener("keyup", (e) => {
  e.preventDefault();
  textContent = e.target.value.split(",");

  btnContainer.innerHTML = textContent
    .map((text, id) => {
      if (text.trim() !== "") {
        return ` <span id="buttons" class="btn">${text}</span>`;
      }
    })
    .join("");
  btnArray = btnContainer.querySelectorAll(".btn");
  if (e.keyCode === 13) {
    text.value = "";
    if (textContent) {
      for (let i = 0; i < 20; i++) {
        const random = Math.floor(Math.random() * textContent.length);
        setTimeout(() => {
          btnArray.forEach((btn, index) => {
            btn.classList.remove("show");
            if (index == random) {
              btn.classList.add("show");
            }
          });
        }, 200 * i);
      }
    }
  }
});
