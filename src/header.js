import { home } from './home';
import { footer } from './footer';

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

    contactLink.innerText = 'Contact Us';
    contactLink.href = '#';

    navTag.appendChild(homeLink);
    navTag.appendChild(menuLink);
    navTag.appendChild(contactLink);

    header.appendChild(navTag);

    return header;

};