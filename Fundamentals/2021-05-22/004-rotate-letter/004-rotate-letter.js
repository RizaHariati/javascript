let counting = 0;
let length = 0;
const rotate = (id) => {
  const element = document.getElementById(id);
  const text = element.childNodes[0].textContent;
  const new_text = text.slice(1) + text[0];
  length = text.length;

  if (counting == 0) {
    // element.innerHTML = new_text + `<h3>${counting}</h3>`;
    element.innerHTML = `${text} <h3>${counting}</h3> `;
  } else {
    element.innerHTML = new_text + `<h3>${counting}</h3>`;
    element.style = `color:${
      "#" + Math.floor(Math.random() * 0xffffff).toString(16)
    }`;
  }
  counting = counting + 1;
};

setInterval(() => {
  if (counting == length) {
    counting = 0;
  }
  rotate("banner");
}, 200);
