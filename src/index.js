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



const body = document.querySelector('body');
const inputToggle = document.getElementById('theme-switch-toggle');

inputToggle.addEventListener('change', onSwitchTumbler);
window.onload = saveThemeFunction();


function onSwitchTumbler(e) {
    if (localStorage.getItem('saveNameTheme') === DARK) {
        toggleSwitch(LIGHT);
    } else
        toggleSwitch(DARK);
}

function toggleSwitch(name) {
    localStorage.setItem('saveNameTheme', name);
    body.className = name
}

function saveThemeFunction() {
    const saveNameInStorage = localStorage.getItem('saveNameTheme');
    console.log(saveNameInStorage);
    if (saveNameInStorage === DARK) {
        body.className = saveNameInStorage;
        inputToggle.checked = true;
    }
}