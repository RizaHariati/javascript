const labels = document.querySelectorAll(".form-control label");
const inputs = document.querySelectorAll(".form-control input");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span class="test" style="transition-delay: ${
          idx * 50
        }ms">${letter}</span>`
    )
    .join("");
});

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    const spans = input.previousElementSibling.querySelectorAll(".test");
    console.log(e.currentTarget.value);
    spans.forEach((span) => {
      if (!e.currentTarget.value) {
        span.classList.toggle("show");
      }
    });
  });
});
