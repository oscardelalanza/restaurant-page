// home page
export const home = () => {

    const header = document.createElement('section');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h3');

    title.innerText = 'The Coffee Shop';
    subtitle.innerText = 'The Coffee Shop in small characters :)';
    header.appendChild(title);
    header.appendChild(subtitle);

    return header;

};
