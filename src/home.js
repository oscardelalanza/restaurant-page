import About from './img/about-img.jpg';

// home page
export const home = () => {

    const home = document.createElement('div');
    const title = document.createElement('h2');
    const subtitle = document.createElement('h4');
    const description = document.createElement('p');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const aboutContainer = document.createElement('div');

    img.src = About;
    imgContainer.className = 'img-container';
    imgContainer.appendChild(img);

    title.innerText = 'About Us';
    subtitle.innerText = 'Here should be the description but instead of that here is just a random text :)';
    description.innerText = 'Morbi euismod lacus arcu, volutpat rutrum lacus vulputate quis. Suspendisse eget risus ' +
        'luctus eros aliquet vestibulum vel nec sem. Aenean facilisis elementum dolor, sed lobortis eros lacinia vel. ' +
        'Mauris nec quam eu metus porttitor pharetra tincidunt a lacus. Donec sit amet viverra augue. Aenean nunc ' +
        'sapien, posuere nec suscipit non, convallis at metus. Sed accumsan fringilla diam. Sed tempus, diam ut rutrum ' +
        'accumsan, leo dolor pharetra mauris, non scelerisque quam est id velit.';
    aboutContainer.className = 'about-container';
    aboutContainer.appendChild(title);
    aboutContainer.appendChild(subtitle);
    aboutContainer.appendChild(description);

    home.classList.add('container');
    home.classList.add('home');
    home.appendChild(imgContainer);
    home.appendChild(aboutContainer);

    return home;

};
