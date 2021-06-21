const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".container");

let load = 0;
let intervalLoad = setInterval(loading, 30);

function loading() {
  load++;
  if (load > 99) {
    clearInterval(intervalLoad);
  }
  let opacity = load / 100;
  let blur = 5 - 5 * opacity;
  console.log(blur);
  loadText.textContent = `${load}%`;
  loadText.style.opacity = `${opacity}`;
  bg.style.filter = `blur(${blur}px)`;
}
