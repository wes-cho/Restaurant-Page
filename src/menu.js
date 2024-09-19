export {loadMenu};

function loadMenu(){
    const header = document.createElement("h1");
    header.setAttribute("id", "restaurant-header");
    header.textContent = "Menu"
    content.appendChild(header);

    const menuBox = document.createElement("div");
        menuBox.setAttribute("id", "menu");
        content.appendChild(menuBox);

    const menuItem = document.createElement("div");
    menuBox.appendChild(menuItem);
        menuItem.setAttribute('class', 'menu-item');
        menuItem.setAttribute('id', 'espresso');
        const title = document.createElement("h2");
            title.textContent = 'Espresso';
            menuItem.appendChild(title);
        const price = document.createElement('p');
            price.textContent = "$2.75";
            menuItem.appendChild(price);
        const description = document.createElement('p');
            description.textContent = "A shot of espresso. Plain and simple.";
            menuItem.appendChild(description);
}

