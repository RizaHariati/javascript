import paragraphText from "./data.js";

const paragraph = document.querySelector(".paragraph");
const submit = document.querySelector(".input");
const total = document.querySelector(".total-paragraph");

let paragraphAmount = 2;
const mapParagraph = (paragraphAmount) => {
  paragraph.innerHTML = paragraphText
    .map((item) => {
      const { id, text } = item;
      if (id <= paragraphAmount) {
        return ` <p class="text">${text}</p> `;
      }
    })
    .join("");
};

const findParagraph = (paragraphAmount) => {
  const newParagraph = paragraphText.find((item) => item.id == paragraphAmount);
  console.log(newParagraph.text);
  return (paragraph.innerHTML = ` <p class="text">${newParagraph.text}</p> `);
};

window.addEventListener("DOMContentLoaded", () => {
  mapParagraph(1);
});
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const temp = total.value;
  if (!temp) {
    paragraphAmount = Math.floor(Math.random() * paragraphText.length + 1);

    console.log(paragraphAmount);
    findParagraph(paragraphAmount);
  } else {
    if (temp <= 0) {
      paragraphAmount = 1;
    } else if (temp > paragraphText.length) {
      paragraphAmount = paragraphText.length;
    } else {
      paragraphAmount = total.value;
    }
    mapParagraph(paragraphAmount);
  }
  total.value = "";
});
