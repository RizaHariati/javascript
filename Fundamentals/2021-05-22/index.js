for (let year = 2014; year <= 2050; year++) {
  const today = new Date(year, 0, 1);
  if (today.getDay() == 0) {
    const tag = document.createElement("p");
    const text = document.createTextNode(year);
    tag.appendChild(text);
    document.getElementById("date").appendChild(tag);
  }
}
