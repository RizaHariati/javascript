import people from "./data people.js";

const imgText = document.getElementById("img");
const nameText = document.getElementById("name");
const titleText = document.getElementById("title");
const contentText = document.getElementById("content");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const surprise = document.querySelector(".surprise");

let count = 0;

const review = (count) => {
  const { img, name, job, text } = people[count];
  imgText.src = img;
  nameText.textContent = name;
  contentText.textContent = text;
  titleText.textContent = job;
};

window.addEventListener("DOMContentLoaded", function () {
  review(count);
});

nextBtn.addEventListener("click", () => {
  count = count + 1;
  if (count > people.length - 1) {
    count = 0;
  }
  review(count);
});

prevBtn.addEventListener("click", () => {
  count = count - 1;
  if (count < 0) {
    count = people.length - 1;
  }
  review(count);
});

surprise.addEventListener("click", () => {
  count = Math.floor(Math.random() * people.length);
  review(count);
});
