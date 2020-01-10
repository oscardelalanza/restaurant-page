import { nav } from './header';
import { home } from './home';
import { footer } from './footer';

const content = document.getElementById('content');

content.appendChild(nav());
content.appendChild(home());
content.appendChild(footer());