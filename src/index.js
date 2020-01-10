import { header, main, footer } from './domElements';

const content = document.getElementById('content');

content.appendChild(header());
content.appendChild(main());
content.appendChild(footer());
