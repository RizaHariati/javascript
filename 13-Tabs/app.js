const data = [
  {
    id: "value",
    title: "Our Values",
    img: "img-6.jpg",
    text: "The Rendang Hut and our franchise partners values challenge and inspire us to elevate the Rendang Hut brand and culture while championing the customer experience. In everything we do, in everything we are, we will always feed more possibilities and help you become your best, make friends, and have fun.",
  },
  {
    id: "innovation",
    title: "Our Values",
    img: "spaghetti-1932466_1920.jpg",
    text: "The Rendang Hut brand has a long history of firsts – the first national chain to offer online delivery ordering, the first rendang delivery to outer space, a world-record setting delivery to the summit of Mt. Kilimanjaro – and we’re not slowing down any time soon. The Rendang Hut is always looking for ways to innovate processes and deliver an even more exceptional service and product.",
  },
  {
    id: "history",
    title: "Where We Come From",
    img: "thanksgiving-3811492_1920.jpg",
    text: "In 1958, two brothers borrowed $600 from their mom to open a rendang place in Wichita, Kansas.</br></br> They named it The Rendang Hut because their sign only had room for eight letters. The restaurant’s popularity grew quickly due to the delicious food and quality service. </br></br>Today, there are more than 16,000 independently owned and operated The Rendang Hut restaurants. Our 100+ franchise partners employ 350,000 team members in over 100 countries.",
  },
];

const buttons = document.querySelectorAll(".btn");
const image = document.querySelector(".image-container");
const infoDetails = document.querySelector(".info-details");

window.addEventListener("DOMContentLoaded", () => {
  loading(data[0]);
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    buttons.forEach((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });
    const idBtn = button.id;
    button.classList.add("active");
    const dataTemp = data.filter((item) => {
      return item.id == idBtn;
    });

    loading(dataTemp[0]);
  });
});

const loading = (item) => {
  const { title, img, text } = item;
  image.innerHTML = `<img src="./img/${img}" class="image" alt="img1" />`;
  infoDetails.innerHTML = `
            <h4>${title}</h4>
            <p>
             ${text}
            </p>
    `;
};
