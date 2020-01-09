const header = () => {

    const header = document.createElement('header');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h3');

    title.textContent = 'The Coffee Shop';
    subtitle.textContent = 'The Coffee Shop in small characters :)';
    header.appendChild(title);
    header.appendChild(subtitle);

    return header;

};

export {
    header
};