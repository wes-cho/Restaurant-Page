import "./styles.css";
import {loadHome} from "./home.js";
import {example} from "./menu.js";
 
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
    return example();
});
