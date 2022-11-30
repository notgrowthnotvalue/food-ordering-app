import { menuArray } from "./data.js";

let orderArray = [];
let total = 0;

const foodItem = document.addEventListener("click", function (event) {
  if (event.target.dataset.plus) {
    addToOrder(event.target.dataset.plus);
  }
});

function addToOrder(item) {
  for (let member of menuArray) {
    if (member.name === item) {
      orderArray.push([member.name, member.price]);
      total += member.price;
    }
  }
  renderOrder(orderArray);
}

function renderOrder(orderArray) {
  let foodList = '<p id="order-title">Your order</p>';
  orderArray.forEach((item) => {
    foodList += `
        <div class="order-item">${item}</div>
        `;
  });
  document.querySelector(".order").innerHTML =
    foodList +
    `
    <hr>
    <div class="total">Total price:$${total} </div>
    <button class="btn" id="btn">Complete order</button>`;
  console.log(orderArray);
}

function getMenuItems() {
  let menuItems = "";
  menuArray.forEach(function (item) {
    menuItems += `
        <div class="flex-container">
            <div class="emoji">
                ${item.emoji}
            </div>
            <div class="item">
                <p class="name">${item.name}</p>
                <p class="ingredients">${item.ingredients}</p>
                <p class="price">$${item.price}</p>
            </div>    
            <div class="icon">
                    <i class="fa-regular fa-square-plus"
                    data-plus="${item.name}"
                    ></i>
             </div>
        </div>
        <hr>
        `;
  });
  return menuItems;
}

function render() {
  document.querySelector(".menu").innerHTML = getMenuItems();
}

render();

const orderClass = document.querySelector(".order");

orderClass.addEventListener("click", clickButton);

function clickButton(e) {
  if (e.target.id === "btn") {
    modal.style.display = "inline";
  }
}

const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalInner = document.getElementById("modal-inner");

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

const payBtn = document.getElementById("pay-btn");

payBtn.addEventListener("click", done);

function done() {
  modalInner.innerText = `Thank you for your order.`;
}

