const form = document.querySelector(".form-input");
const submitTxt = document.querySelector(".submitTxt");
const alertTxt = document.querySelector(".alert");
const shoppingList = document.querySelector(".shopping-list");
const container = document.querySelector(".clear-container");

// buttons
const submitBtn = document.querySelector(".submitBtn");
const clearBtn = document.querySelector(".clear-items");

// edit
let editID = "";
let editStatus = false;
let editElement;

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItem);
window.addEventListener("DOMContentLoaded", showItems);

function addItem(e) {
  e.preventDefault();
  const value = submitTxt.value;
  const id = new Date().getTime().toString();

  if (value && !editStatus) {
    addItemToList(id, value);
    alertDisplay("item added to list", "success");
    addToLocalStorage(id, value);
    setBackToDefault();
    container.classList.add("show-container");
  } else if (value && editStatus) {
    editElement.textContent = value;
    editLocalStorage(editID, value);
    alertDisplay("value changed", "success");
    setBackToDefault();
  } else {
    alertDisplay("please enter Value", "error");
  }
  submitTxt.value = "";
}

function clearItem() {
  const items = document.querySelectorAll(".list");
  if (items.length > 0) {
    items.forEach((item) => {
      shoppingList.removeChild(item);
    });
    container.classList.remove("show-container");
    alertDisplay("empty List", "error");
  }
  setBackToDefault();
  localStorage.removeItem("shoppingList");
}

function alertDisplay(text, action) {
  alertTxt.classList.add(action);
  alertTxt.textContent = text;

  setTimeout(() => {
    alertTxt.classList.remove(action);
    alertTxt.textContent = "";
  }, 1000);
}

function addItemToList(id, value) {
  const element = document.createElement("article");
  element.classList.add("list");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);

  element.innerHTML = ` 
            <p class="item">${value}</p>
            <div class='button-container'>
              <button class="btn edit"><i class="fas fa-edit"></i></button>
              <button class="btn delete">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>`;
  const editBtn = element.querySelector(".edit");
  const deleteBtn = element.querySelector(".delete");
  editBtn.addEventListener("click", editing);
  deleteBtn.addEventListener("click", deleting);
  shoppingList.appendChild(element);
}

function deleting(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  shoppingList.removeChild(element);
  if (shoppingList.children.length == 0) {
    container.classList.remove("show-container");
  }
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editing(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  editStatus = true;
  editID = element.dataset.id;
  submitTxt.value = editElement.textContent;
  submitBtn.textContent = "edit";
}

function showItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      addItemToList(item.id, item.value);
    });
  }
  container.classList.add("show-container");
}
function addToLocalStorage(id, value) {
  const newItem = { id, value };
  let items = getLocalStorage();
  items.push(newItem);
  localStorage.setItem("shoppingList", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.fiter((item) => {
    item.id != id;
  });
  localStorage.setItem("shoppingList", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  console.log(id);
  console.log(value);
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id == id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("shoppingList", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("shoppingList")
    ? JSON.parse(localStorage.getItem("shoppingList"))
    : [];
}

function setBackToDefault() {
  editID = "";
  editStatus = false;
  shoppingList.value = "";
  submitBtn.textContent = "Submit";
}
