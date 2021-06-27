import './templates/menu-gallery.hbs';
import test from './templates/test-gallery.hbs';
import menu from './menu.json';
import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const ulContainer = document.querySelector('ul.js-menu');

const foodMenuMarkup = createdCardFood(menu)

ulContainer.insertAdjacentHTML('beforeend', foodMenuMarkup);


console.table(menu);
console.log(menu[0].description);
console.log(menu[0].ingredients);
console.log(menu[0].ingredients[2])


function createdCardFood(card) {

    return card.map(test).join('')
}