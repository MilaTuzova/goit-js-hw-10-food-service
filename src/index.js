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

body.classList.add(LIGHT);

inputToggle.addEventListener('change', onSwitchTumbler);

function onSwitchTumbler() {
    console.log(body.classList.toggle(DARK));
    console.log(body.classList.toggle(LIGHT));

    const name = body.classList.value;
    console.log(name)
    localStorage.setItem('saveNameTheme', name);
}

saveThemeFunction()

function saveThemeFunction() {
    const saveNameInStorage = localStorage.getItem('saveNameTheme');

    // console.log(saveNameInStorage);
    if (saveNameInStorage === DARK) {

        inputToggle.checked = true;
        onSwitchTumbler();
    }
}