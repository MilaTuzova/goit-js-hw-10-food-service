import foodCards from './templates/food-cards.hbs';
import dataMenu from './menu.json';
import './styles.css';



const ulContainer = document.querySelector('ul.js-menu');
const foodMenuMarkup = createdCardFood(dataMenu)

ulContainer.insertAdjacentHTML('beforeend', foodMenuMarkup);

function createdCardFood(menu) {
    // return menu.map(test).join('');
    return foodCards(menu)
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const { DARK, LIGHT } = Theme;

const THEME_KEY = 'saveNameTheme';

const body = document.querySelector('body');
const inputToggle = document.querySelector('#theme-switch-toggle');

inputToggle.addEventListener('change', onSwitchTumbler);

body.className = LIGHT;
localStorage.setItem(THEME_KEY, LIGHT)

function onSwitchTumbler(e) {

    if (localStorage.getItem(THEME_KEY) === DARK) {

        body.classList.replace(DARK, LIGHT);
        localStorage.setItem(THEME_KEY, LIGHT)

    } else
    if (localStorage.getItem(THEME_KEY) === LIGHT) {

        body.classList.replace(LIGHT, DARK);
        localStorage.setItem(THEME_KEY, DARK)

    }

}