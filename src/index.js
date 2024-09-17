import "./styles.css";
import {loadHome} from "./home.js"

const content = document.querySelector("#content");

const homeNav = document.querySelector("#home");
homeNav.addEventListener("click", () => {
    content.replaceChildren();
    return loadHome();
});