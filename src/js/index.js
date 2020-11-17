import '../scss/main.scss';

/* place your code below */

const entryTextarea = document.querySelector('.text--js');
const buttonSave = document.querySelector('.save--js');
const buttonClear = document.querySelector('.clear--js');
const buttonLoad = document.querySelector('.load--js');


buttonSave.addEventListener('click', () => {
    localStorage.setItem('entry', entryTextarea.value);
    console.log('saved');
})

buttonLoad.addEventListener('click', () => {
    entryTextarea.value = localStorage.getItem('entry');
    console.log('loaded');
})

buttonClear.addEventListener('click', () => {
    localStorage.removeItem('entry');
    console.log('cleared');
})

