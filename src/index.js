import { homeLink, menuLink, contactLink, nav } from './header';
import { home } from './home';
import { menu, gallery } from './menu';
import { location, map } from './contact';
import { footer } from './footer';
import './sass/styles.scss';

const content = document.getElementById('content');

content.appendChild(nav());
content.appendChild(home());
content.appendChild(footer());

homeLink.addEventListener('click', () => {

    content.innerHTML = '';
    content.appendChild(nav());
    content.appendChild(home());
    content.appendChild(footer());

});

menuLink.addEventListener('click', () => {

    content.innerHTML = '';
    content.appendChild(nav());
    content.appendChild(menu());
    content.appendChild(footer());

});

contactLink.addEventListener('click', () => {

    content.innerHTML = '';
    content.appendChild(nav());
    content.appendChild(location());
    content.appendChild(footer());

});