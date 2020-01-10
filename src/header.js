// navigation menu
const nav = () => {

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact Us';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    header.appendChild(nav);

};

export {
    nav,
};