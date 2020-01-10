// method for create a basic menu
import G1 from './img/gallery-1.jpg';
import G2 from './img/gallery-2.jpg';
import G3 from './img/gallery-3.jpg';
import G4 from './img/gallery-4.jpg';
import G5 from './img/gallery-5.jpg';
import G6 from './img/gallery-6.jpg';
import G7 from './img/gallery-7.jpg';
import G8 from './img/gallery-8.jpg';

const menu = () => {
    const menu = document.createElement('div');
    const articleDrinks = document.createElement('article');
    const articleFoods = document.createElement('article');
    const title = document.createElement('h3');

    title.innerText = 'Menu';

    for (let i = 0; i < 5; i++) {

        const name = document.createElement('p');
        const price = document.createElement('p');
        const description = document. createElement('p');

        name.innerText = 'Lorem ipsum dolor.';
        price.innerText = '$' + Math.floor(Math.random() * 30).toString();
        description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.';

        articleDrinks.appendChild(name);
        articleDrinks.appendChild(price);
        articleDrinks.appendChild(description);
        articleFoods.appendChild(name);
        articleFoods.appendChild(price);
        articleFoods.appendChild(description);

    }

    menu.appendChild(title);
    menu.appendChild(articleDrinks);
    menu.appendChild(articleFoods);

    return menu;

};

// method for create a basic image gallery
const gallery = () => {

    const gallery = document.createElement('div');
    const images = [G1, G2, G3, G4, G5, G6, G7, G8];

    images.forEach(element => {

        const img = document.createElement('img');

        img.src = element;
        gallery.appendChild(img);

    });

    return gallery;

};

export {

    menu,
    gallery,

}