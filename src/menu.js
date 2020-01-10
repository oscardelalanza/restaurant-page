// method for create a basic menu
export const menu = () => {
    const menu = document.createElement('div');
    const articleDrinks = document.createElement('article');
    const articleFoods = document.createElement('article');
    const title = document.createElement('h3');

    title.textContent = 'Menu';

    for (let i = 0; i < 5; i++) {

        const name = document.createElement('p');
        const price = document.createElement('p');
        const description = document. createElement('p');

        name.textContent = 'Lorem ipsum dolor.';
        price.textContent = Math.floor(Math.random() * 10).toString();
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.';

        articleDrinks.appendChild(name);
        articleDrinks.appendChild(price);
        articleDrinks.appendChild(description);
        articleFoods.appendChild(name);
        articleFoods.appendChild(price);
        articleFoods.appendChild(description);

    }

    menu.appendChild(title);
    menu.appendChild(articleDrinks);
    menu.appendChild(articleFoods);

    return menu;

};