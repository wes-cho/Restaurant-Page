export {loadAbout};

function loadAbout(){
    const header = document.createElement("h1");
        header.setAttribute("id", "restaurant-header");
        header.textContent = "About"
    content.appendChild(header);

    const messageBox = document.createElement("div");
        messageBox.setAttribute("id", "about-message");

    const p0 = document.createElement("p");
        p0.textContent = "28th Ave Cafe was born out of a love for both friends and coffee."
        messageBox.appendChild(p0);
    const p1 = document.createElement("p");
        p1.textContent = "Since Mary Ryan and I moved from CA to NYC, we've been wanting to create a space for our friends both new and old to come vibe, relax, and catch up over a cup of coffee. We love living in this new city and want to celebrate it as well as the relationships that keep us grounded in the midst of it all."
        messageBox.appendChild(p1);
    const p2 = document.createElement("p");
        p2.textContent = "We'll have more of these in the future, so don't sweat it if you can't make it this time! We hope you're able to come by for our pop-up cafe experience at our new home in Astoria. "
        messageBox.appendChild(p2);
    content.appendChild(messageBox);

    
};