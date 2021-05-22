const today = new Date();

let mm = today.getMonth();
let dd = today.getDay();
const yy = today.getFullYear();

if (dd.valueOf() < 10) {
  dd = "0" + dd;
}
if (mm.valueOf() < 10) {
  mm = "0" + mm;
}
console.log(`${mm}-${dd}-${yy}`);
