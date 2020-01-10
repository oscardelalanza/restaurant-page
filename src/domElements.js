import G1 from './img/gallery-1.jpg';
import G2 from './img/gallery-2.jpg';
import G3 from './img/gallery-3.jpg';
import G4 from './img/gallery-4.jpg';
import G5 from './img/gallery-5.jpg';
import G6 from './img/gallery-6.jpg';
import G7 from './img/gallery-7.jpg';
import G8 from './img/gallery-8.jpg';

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
    main,
    footer,
};