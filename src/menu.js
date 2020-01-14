import G1 from './img/gallery-1.jpg';
import G2 from './img/gallery-2.jpg';
import G3 from './img/gallery-3.jpg';
import G4 from './img/gallery-4.jpg';
import G5 from './img/gallery-5.jpg';
import G6 from './img/gallery-6.jpg';
import G7 from './img/gallery-7.jpg';
import G8 from './img/gallery-8.jpg';

// method for create a basic menu
const _menu = () => {
    const menu = document.createElement('div');
    const articleDrinks = document.createElement('article');
    const articleFoods = document.createElement('article');
    const title = document.createElement('h2');
    const drinks = ['Cappuccino', 'Mocha', 'Latte', 'Espresso', 'Macchiato'];
    const foods = ['Sandwich', 'Biscuit', 'Wrap', 'Bagel', 'Cake'];
    const articleContainer = document.createElement('div');
    const externalBorder = document.createElement('div');
    const foodTitle = document.createElement('p');
    const drinksTitle = document.createElement('p');

    title.innerText = 'Menu';
    foodTitle.innerText = 'Food';
    drinksTitle.innerText = 'Drinks';

    articleDrinks.appendChild(drinksTitle);
    articleFoods.appendChild(foodTitle);

    drinks.forEach(drink => {

        const name = document.createElement('p');
        const price = document.createElement('p');
        const description = document. createElement('p');
        const product = document.createElement('div');

        name.innerText = drink;
        price.innerText = '$' + Math.floor(Math.random() * 30).toString();
        description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.';

        name.classList.add('name');
        price.classList.add('price');
        description.classList.add('description');

        product.appendChild(name);
        product.appendChild(price);
        product.appendChild(description);
        articleDrinks.appendChild(product);

    });

    foods.forEach(food => {

        const name = document.createElement('p');
        const price = document.createElement('p');
        const description = document. createElement('p');
        const product = document.createElement('div');

        name.innerText = food;
        price.innerText = '$' + Math.floor(Math.random() * 30).toString();
        description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.';

        name.classList.add('name');
        price.classList.add('price');
        description.classList.add('description');

        product.appendChild(name);
        product.appendChild(price);
        product.appendChild(description);
        articleFoods.appendChild(product);

    });

    menu.classList.add('menu');
    menu.classList.add('container');
    foodTitle.classList.add('menu-title');
    drinksTitle.classList.add('menu-title');
    externalBorder.classList.add('external-border');
    articleContainer.classList.add('external-border');
    articleContainer.classList.add('external-border');
    articleContainer.classList.add('article-container');

    articleContainer.appendChild(articleDrinks);
    articleContainer.appendChild(articleFoods);
    externalBorder.appendChild(articleContainer);
    menu.appendChild(title);
    menu.appendChild(externalBorder);

    return menu;

};

// method for create a basic image gallery
const _gallery = () => {

    const gallery = document.createElement('div');
    const images = [G1, G2, G3, G4, G5, G6, G7, G8];

    images.forEach(element => {

        const imgDiv = document.createElement('div');
        const img = document.createElement('img');

        img.src = element;

        imgDiv.classList.add('img-container');

        imgDiv.appendChild(img);
        gallery.appendChild(imgDiv);

    });

    gallery.classList.add('gallery');

    return gallery;

};

const menu = () => {

    const menuContainer = document.createElement('div');

    menuContainer.appendChild(_menu());
    menuContainer.appendChild(_gallery());

    return menuContainer;

};

export {

    menu,

}