import { menuArray } from "./data.js"

let orderList = [];

const foodItem = document.addEventListener("click", function (event) {
    if (event.target.dataset.plus) {
        addToOrder(event.target.dataset.plus)
    }
})

function addToOrder(e) {
    console.log(e);
    console.log(typeof (e))
}


function getMenuItems() {
    let menuItems = '';
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
        `
    })
    return menuItems;
}

function render() {
    document.querySelector(".menu").innerHTML = getMenuItems();
}

render()

