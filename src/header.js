const homeLink = document.createElement('a');
const menuLink = document.createElement('a');
const contactLink = document.createElement('a');

// navigation menu
const nav = () => {

    const header = document.createElement('header');
    const navTag = document.createElement('nav');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h3');

    homeLink.innerText = 'Home';
    homeLink.href = '#';

    menuLink.innerText = 'Menu';
    menuLink.href = '#';

    contactLink.innerText = 'Contact Us';
    contactLink.href = '#';

    titleContainer.classList.add('title-container');
    titleContainer.classList.add('container');
    title.innerText = 'The Coffee Shop';
    subtitle.innerText = 'The Coffee Shop, but with smaller characters :)';

    navTag.className = 'container';
    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    navTag.appendChild(homeLink);
    navTag.appendChild(menuLink);
    navTag.appendChild(contactLink);
    header.appendChild(navTag);
    header.appendChild(titleContainer);

    return header;

};

export {

    homeLink,
    menuLink,
    contactLink,
    nav,

}