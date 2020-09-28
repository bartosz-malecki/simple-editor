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
const buttonSave = document.querySelector('.save--js');
const buttonClear = document.querySelector('.clear--js');
const buttonLoad = document.querySelector('.load--js');

entryTextarea.value = result;

buttonSave.addEventListener('click', () => {
    localStorage.setItem('entry', entryTextarea.value);
    console.log('saved');
})

buttonLoad.addEventListener('click', () => {
    entryTextarea.value = localStorage.getItem('entry')
    console.log('loaded');
})

buttonClear.addEventListener('click', () => {
    localStorage.removeItem('entry');
    console.log('cleared');
})

