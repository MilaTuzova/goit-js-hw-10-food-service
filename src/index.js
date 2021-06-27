import card from './templates/food-cards.hbs';
import test from './templates/test-gallery.hbs';
import foodCards from './templates/food-cards.hbs';
import dataMenu from './menu.json';
import './styles.css';
import { map } from 'lodash';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const ulContainer = document.querySelector('ul.js-menu');

const foodMenuMarkup = createdCardFood(dataMenu)

ulContainer.insertAdjacentHTML('beforeend', foodMenuMarkup);


console.table(dataMenu);
console.log(dataMenu[0].description);
console.log(dataMenu[0].ingredients);
console.log(dataMenu[0].ingredients[2])

function createdCardFood(menu) {
    // return menu.map(test).join('');
    return foodCards(menu)
}