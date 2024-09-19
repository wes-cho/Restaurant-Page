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
    
    const menuItem1 = document.createElement("div");
    menuBox.appendChild(menuItem1);
        menuItem1.setAttribute('class', 'menu-item');
        menuItem1.setAttribute('id', 'cappuccino');
        const title1 = document.createElement("h2");
            title1.textContent = 'Cappuccino';
            menuItem1.appendChild(title1);
        const price1 = document.createElement('p');
            price1.textContent = "$2.75";
            menuItem1.appendChild(price1);
        const description1 = document.createElement('p');
            description1.textContent = "Espresso, milk, and foam. Perfectly balanced as all things should be.";
            menuItem1.appendChild(description1);
}

