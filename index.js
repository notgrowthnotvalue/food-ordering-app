import { menuArray } from "./data.js";

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
                <span>
                    <i class="fa-regular fa-square-plus"
                    data-plus="${item.name}"
                    ></i>
                </span>
             </div>
        </div>
        <hr>
        `
    })
    return menuItems;
}

function render() {
    document.getElementById("menu").innerHTML = getMenuItems();
}

render()

