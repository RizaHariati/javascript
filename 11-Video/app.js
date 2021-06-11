const video = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switchBtn");

switchBtn.addEventListener("click", () => {
  if (!switchBtn.classList.contains("pause")) {
    switchBtn.classList.add("pause");
    video.pause();
  } else {
    switchBtn.classList.remove("pause");
    video.play();
  }
});
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preloader.classList.add("hide");
});
