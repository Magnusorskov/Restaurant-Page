import bread1 from "./images/loaf-homemade-bread-wooden-cutting-board.jpg";
import bread2 from "./images/loaf-bread-wooden-table.jpg";
import bread3 from "./images/pexels-chance-agrella-2154641066-33735154.jpg";

const createMenuPage = () => {
    document.querySelector("#menu-button").classList.add("selected-button");
    const content = document.querySelector("#content");
    content.classList.add('menu-active');

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu"
    content.appendChild(menuTitle);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuItemOneContainer = document.createElement("div");
    menuItemOneContainer.classList.add("menu-item-container");
    const imgItemOne = document.createElement("img");
    imgItemOne.src = bread1;
    imgItemOne.alt = "bread"
    imgItemOne.id = "img-item-one";

    const itemOneTextContainer = document.createElement("div");
    itemOneTextContainer.classList.add("item-text-container");
    const itemOneName = document.createElement("h3");
    itemOneName.textContent = "The Hearth Loaf";
    const itemOneDescription = document.createElement("p");
    itemOneDescription.textContent = "Our signature country loaf, crafted over 36 hours from a wild yeast starter. It boasts a deep, tangy flavor, a wonderfully chewy crumb, and a crisp, caramelized crust. The perfect all-rounder for any occasion.";

    menuItemOneContainer.appendChild(imgItemOne);
    itemOneTextContainer.appendChild(itemOneName);
    itemOneTextContainer.appendChild(itemOneDescription);
    menuItemOneContainer.appendChild(itemOneTextContainer);

    menuContainer.appendChild(menuItemOneContainer);

    const menuItemTwoContainer = document.createElement("div");
    menuItemTwoContainer.classList.add("menu-item-container");
    const imgItemTwo = document.createElement("img");
    imgItemTwo.src = bread2;
    imgItemTwo.alt = "bread"
    imgItemTwo.id = "img-item-two";

    const itemTwoTextContainer = document.createElement("div");
    itemTwoTextContainer.classList.add("item-text-container");
    const ItemTwoName = document.createElement("h3");
    ItemTwoName.textContent = "Harvest Grain Loaf";
    const ItemTwoDescription = document.createElement("p");
    ItemTwoDescription.textContent = "A dense and satisfying loaf, absolutely packed with a wholesome blend of sunflower, flax, and pumpkin seeds. Its rich, nutty flavor and moist crumb make it the perfect hearty choice for savory sandwiches or toasted with butter.";

    menuItemTwoContainer.appendChild(imgItemTwo);
    itemTwoTextContainer.appendChild(ItemTwoName);
    itemTwoTextContainer.appendChild(ItemTwoDescription);
    menuItemTwoContainer.appendChild(itemTwoTextContainer);

    menuContainer.appendChild(menuItemTwoContainer);

    const menuItemThreeContainer = document.createElement("div");
    menuItemThreeContainer.classList.add("menu-item-container");
    const imgItemThree = document.createElement("img");
    imgItemThree.src = bread3;
    imgItemThree.alt = "bread"
    imgItemThree.id = "img-item-three";

    const itemThreeTextContainer = document.createElement("div");
    itemThreeTextContainer.classList.add("item-text-container");
    const ItemThreeName = document.createElement("h3");
    ItemThreeName.textContent = "Olive & Rosemary Sourdough";
    const ItemThreeDescription = document.createElement("p");
    ItemThreeDescription.textContent = "An artisan sourdough loaf studded with olives and rosemary.";

    menuItemThreeContainer.appendChild(imgItemThree);
    itemThreeTextContainer.appendChild(ItemThreeName);
    itemThreeTextContainer.appendChild(ItemThreeDescription);
    menuItemThreeContainer.appendChild(itemThreeTextContainer);

    menuContainer.appendChild(menuItemThreeContainer);

    content.appendChild(menuContainer);

}

export {createMenuPage}