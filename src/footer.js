export const footer = () => {

    const footer = document.createElement('footer');
    const text = document.createElement('p');

    text.innerText = 'Oscar De La Lanza 2020';
    footer.appendChild(text);

    return footer;

};
