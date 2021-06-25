const imageBG = document.querySelector(".image");
const photo = document.querySelector(".photo");
const animateds = document.querySelectorAll(".animated");

window.addEventListener("DOMContentLoaded", loadingImages);

function loadingImages() {
  setTimeout(() => {
    removeAnimated();
    imageBG.style.background = `url("./img/tulips-4072214_640.jpg") center/cover no-repeat`;
    photo.style.background = `url("../img/girl1.jpg")center/cover no-repeat`;
  }, 2000);
}

function removeAnimated() {
  animateds.forEach((animated) => {
    animated.classList.remove("animated");
  });
}
