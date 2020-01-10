import { header, main } from './domElements';

const content = document.getElementById('content');

content.appendChild(header());
content.appendChild(main());