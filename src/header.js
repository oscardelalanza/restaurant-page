const homeLink = document.createElement('a');
const menuLink = document.createElement('a');
const contactLink = document.createElement('a');

// navigation menu
const nav = () => {

    const header = document.createElement('header');
    const navTag = document.createElement('nav');

    homeLink.innerText = 'Home';
    homeLink.href = '#';

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

export {

    homeLink,
    menuLink,
    contactLink,
    nav,

}