import bread1 from "./images/loaf-homemade-bread-wooden-cutting-board.jpg";
const createMenuPage = () => {
    document.querySelector("#menu-button").classList.add("selected-button");
    const content = document.querySelector("#content");
    content.classList.add('menu-active');

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
    itemOneName.textContent = "itemOne title";
    const itemOneDescription = document.createElement("p");
    itemOneDescription.textContent = "blabla bla bla bbadfsfsfd";

    menuItemOneContainer.appendChild(imgItemOne);
    itemOneTextContainer.appendChild(itemOneName);
    itemOneTextContainer.appendChild(itemOneDescription);
    menuItemOneContainer.appendChild(itemOneTextContainer);

    menuContainer.appendChild(menuItemOneContainer);

    const menuItemTwoContainer = document.createElement("div");
    menuItemTwoContainer.classList.add("menu-item-container");
    const imgItemTwo = document.createElement("div");
    imgItemTwo.id = "img-item-two";
    const itemTwoTextContainer = document.createElement("div");
    itemTwoTextContainer.classList.add("item-text-container");
    const ItemTwoName = document.createElement("h3");
    ItemTwoName.textContent = "ItemTwo title";
    const ItemTwoDescription = document.createElement("p");
    ItemTwoDescription.textContent = "blabla bla bla bbadfsfsfd";

    menuItemTwoContainer.appendChild(imgItemTwo);
    itemTwoTextContainer.appendChild(ItemTwoName);
    itemTwoTextContainer.appendChild(ItemTwoDescription);
    menuItemTwoContainer.appendChild(itemTwoTextContainer);

    menuContainer.appendChild(menuItemTwoContainer);

    const menuItemThreeContainer = document.createElement("div");
    menuItemThreeContainer.classList.add("menu-item-container");
    const imgItemThree = document.createElement("div");
    imgItemThree.id = "img-item-three";
    const itemThreeTextContainer = document.createElement("div");
    itemThreeTextContainer.classList.add("item-text-container");
    const ItemThreeName = document.createElement("h3");
    ItemThreeName.textContent = "ItemThree title";
    const ItemThreeDescription = document.createElement("p");
    ItemThreeDescription.textContent = "blabla bla bla bbadfsfsfd";

    menuItemThreeContainer.appendChild(imgItemThree);
    itemThreeTextContainer.appendChild(ItemThreeName);
    itemThreeTextContainer.appendChild(ItemThreeDescription);
    menuItemThreeContainer.appendChild(itemThreeTextContainer);

    menuContainer.appendChild(menuItemThreeContainer);

    content.appendChild(menuContainer);

}

export {createMenuPage}