import "./styles.css";
import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";
 
const content = document.querySelector("#content");
loadHome();

const homeNav = document.querySelector("#home");
homeNav.addEventListener("click", () => {
    content.replaceChildren();
    return loadHome();
});

const menuNav = document.querySelector("#menu");
menuNav.addEventListener("click", () => {
    content.replaceChildren();
    return loadMenu();
});

const aboutNav = document.querySelector("#about");
aboutNav.addEventListener("click", () => {
    content.replaceChildren();
    return loadAbout();
});