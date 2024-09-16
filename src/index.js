import "./styles.css";
import citiField from "./citifield.jpeg";

const content = document.querySelector("#content");
const header = document.createElement("h1");
header.setAttribute("id", "restaurant-header");
header.textContent = "28th Ave Cafe"
content.appendChild(header);

const messageBox = document.createElement("div");
messageBox.setAttribute("id", "homepage-message");
const p1 = document.createElement("p");
p1.textContent = "Come and join us for a relaxing Sunday afternoon in Astoria on the corner of 28th Ave and 36th St."
messageBox.appendChild(p1);
const p2 = document.createElement("p");
p2.textContent = "We'll be serving coffee, matcha, and snacks with some background music for a warm, inviting home cafe experience. If you're seeing this website consider yourself invited!"
messageBox.appendChild(p2);
const p3 = document.createElement("p");
p3.textContent = "~See you soon~";
messageBox.appendChild(p3)
content.appendChild(messageBox);

const imageDiv = document.createElement("div");
content.appendChild(imageDiv);
const homeImage = document.createElement("img");
homeImage.setAttribute("id", "home-image");
homeImage.src = citiField;
homeImage.setAttribute("alt", "citi field");
imageDiv.appendChild(homeImage);
