// index.js
import "./styles.css";
import {createHomepage} from "./homepageModule";
import {createAboutPage} from "./aboutModule";
import {createMenuPage} from "./menuModule";

createHomepage();

const clearPrevious = () => {
    const content = document.querySelector("#content");
    content.innerHTML = " "; // Clear any previous content
    content.className = " "; // Clear any previous classes

    const buttons = document.querySelectorAll("button");
    buttons.forEach( (button) => {
        button.className = " ";
    })
}

document.querySelector("#homepage-button").addEventListener("click", () => {
    clearPrevious();
    createHomepage();
});

document.querySelector("#about-button").addEventListener("click",() => {
    clearPrevious();
    createAboutPage();
})

document.querySelector("#menu-button").addEventListener("click",() => {
    clearPrevious();
    createMenuPage();
})