import { home } from './home';
import { footer } from './footer';
import { menu, gallery } from './menu';
import { location, map } from './contact';

// navigation menu
export const nav = () => {

    const header = document.createElement('header');
    const navTag = document.createElement('nav');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');
    const content = document.getElementById('content');

    homeLink.innerText = 'Home';
    homeLink.href = '#';
    homeLink.addEventListener('click', () => {

        content.innerHTML = '';
        content.appendChild(nav());
        content.appendChild(home());
        content.appendChild(footer());

    });

    menuLink.innerText = 'Menu';
    menuLink.href = '#';
    menuLink.addEventListener('click', () => {

        content.innerHTML = '';
        content.appendChild(nav());
        content.appendChild(menu());
        content.appendChild(gallery());
        content.appendChild(footer());

    });

    contactLink.innerText = 'Contact Us';
    contactLink.href = '#';
    contactLink.addEventListener('click', () => {

        content.innerHTML = '';
        content.appendChild(nav());
        content.appendChild(location());
        content.appendChild(map());
        content.appendChild(footer());

    });

    navTag.appendChild(homeLink);
    navTag.appendChild(menuLink);
    navTag.appendChild(contactLink);

    header.appendChild(navTag);

    return header;

};