import About from './img/about-img.jpg';

// home page
export const home = () => {

    const home = document.createElement('div');
    const title = document.createElement('h2');
    const subtitle = document.createElement('h4');
    const description = document.createElement('p');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');

    title.innerText = 'About The Coffee Shop';
    subtitle.innerText = 'Here should be the description but instead of that here is just a random text :)';
    description.innerText = 'Morbi euismod lacus arcu, volutpat rutrum lacus vulputate quis. Suspendisse eget risus ' +
        'luctus eros aliquet vestibulum vel nec sem. Aenean facilisis elementum dolor, sed lobortis eros lacinia vel. ' +
        'Mauris nec quam eu metus porttitor pharetra tincidunt a lacus. Donec sit amet viverra augue. Aenean nunc ' +
        'sapien, posuere nec suscipit non, convallis at metus. Sed accumsan fringilla diam. Sed tempus, diam ut rutrum ' +
        'accumsan, leo dolor pharetra mauris, non scelerisque quam est id velit.';
    img.src = About;

    imgContainer.appendChild(img);
    home.appendChild(title);
    home.appendChild(subtitle);
    home.appendChild(imgContainer);
    home.appendChild(description);

    return home;

};
