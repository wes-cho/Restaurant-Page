export {loadMenu};

function loadMenu(){
    const header = document.createElement("h1");
        header.setAttribute("id", "restaurant-header");
        header.textContent = "Menu"
    content.appendChild(header);

    const menuContainer = document.createElement("div");
        menuContainer.setAttribute("id", "menu");
    content.appendChild(menuContainer);

    const menu = [
        {
            title: 'Espresso',
            price: '$2.75',
            description: 'A shot of espresso. Plain and simple.',
        },
        {
            title: 'Cappuccino',
            price: '$4.50',
            description: 'Espresso, milk, and foam. Perfectly balanced, as all things should be.',
        },
        {
            title: 'Latte',
            price: '$5.00',
            description: 'Everyone\'s favorite drink, everywhere, all of the time.',
        },
        {
            title: 'Matcha',
            price: '$4.00',
            description: 'Ceremonial-grade matcha, for any occasion.',
        },
        {
            title: 'Matcha Latte',
            price: '$6.00',
            description: 'Matcha, steamed milk, and agave. A match-a made in heaven.',
        },
        {
            title: 'Seasonal',
            price: '$6.75',
            description: 'Limited-time special, unlimited happiness.',
        }
    ];

    for (let item=0; item<menu.length; item++){
        const itemCard = document.createElement("div");
            itemCard.setAttribute('class', 'menu-item');
            itemCard.setAttribute('id', `${menu[item].title.toLowerCase()}`);
            const title = document.createElement('h2');
                title.textContent = menu[item].title;
                itemCard.appendChild(title);
            const price = document.createElement('p');
                price.textContent = menu[item].price;
                itemCard.appendChild(price);
            const description = document.createElement('p');
                description.textContent = menu[item].description;
                itemCard.appendChild(description);
        menuContainer.appendChild(itemCard);     
    };
;}



