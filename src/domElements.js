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
    const title = document.createElement('h3');

    title.textContent = 'Menu';

    for (let i = 0; i < 5; i++) {

        const name = document.createElement('p');
        const price = document.createElement('p');
        const description = document. createElement('p');

        name.textContent = 'Lorem ipsum dolor.';
        price.textContent = Math.floor(Math.random() * 10).toString();
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.';

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
const _gallery = () => {

    const gallery = document.createElement('div');
    const images = [G1, G2, G3, G4, G5, G6, G7, G8];

    images.forEach(element => {

        const img = document.createElement('img');

        img.src = element;
        gallery.appendChild(img);

    });

    return gallery;

};

const _location = () => {

    const location = document.createElement('div');
    const address = document.createElement('div');
    const schedule = document.createElement('div');
    const title = document.createElement('h3');
    const street = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const subtitle = document.createElement('h4');
    const week = document.createElement('p');
    const weekend = document.createElement('p');

    title.textContent = 'Location';

    street.textContent = '1 Macquarie St, Sydney NSW 2000, Australia';
    phone.textContent = '+61 2 9240 2255';
    email.textContent = 'example@email.com';
    address.appendChild(street);
    address.appendChild(phone);
    address.appendChild(email);

    subtitle.textContent = 'Schedule';
    week.textContent = 'Monday to Friday 12:00 - 22:30';
    weekend.textContent = 'Saturday and Sunday 12:00 - 22:00';
    schedule.appendChild(subtitle);
    schedule.appendChild(week);
    schedule.appendChild(weekend);

    location.appendChild(title);
    location.appendChild(address);
    location.appendChild(schedule);

    return location;

};

// method for insert a map
const _map = () => {

    const map = document.createElement('iframe');

    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.3397555421225!2d151.21314029242754!3d-33.85956641319514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae67d5541c77%3A0x8af817cc7e3857d7!2sAria%20Restaurant%20Sydney!5e0!3m2!1ses!2smx!4v1578622220577!5m2!1ses!2smx';
    map.width = '800';
    map.height = '600';
    map.frameBorder = '0';
    map.style.border = '0';
    map.allowFullscreen = '';


    return map;
};

/* =============================================== Exported Methods ================================================= */

// method for create main
const main = () => {

    const main = document.createElement('main');
    const menu = document.createElement('section');
    const gallery = document.createElement('section');
    const location = document.createElement('section');
    const map = document.createElement('section');

    menu.appendChild(_menu());
    gallery.appendChild(_gallery());
    location.appendChild(_location());
    map.appendChild(_map());

    main.appendChild(menu);
    main.appendChild(gallery);
    main.appendChild(location);
    main.appendChild(map);

    return main;

};

const footer = () => {

    const footer = document.createElement('footer');
    const text = document.createElement('p');

    text.textContent = 'Oscar De La Lanza 2020';
    footer.appendChild(text);

    return footer;

};



export {
    header,
    main,
    footer,
};