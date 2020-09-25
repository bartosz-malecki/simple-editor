import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    result = entry;
}

const entryTextarea = document.querySelector('.text--js');
entryTextarea.value = result;

const buttonSave = document.querySelector('.buttons_button--save--js');

buttonSave.addEventListener('click', () => {
    localStorage.setItem('entry', entryTextarea.value);
})
