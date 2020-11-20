import '../scss/main.scss';

/* ============= */
/* LOCAL STORAGE */
/* ============= */


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

/* ====================== */
/* BUTTONS FORMATING TEXT */
/* ====================== */


const btnSizeUp = document.querySelector('.editor__btn-up--js');
const btnSizeDown = document.querySelector('.editor__btn-down--js');
const btnBold = document.querySelector('.editor__btn-bold--js');
const btnUnderline = document.querySelector('.editor__btn-underline--js');
const btnItalic = document.querySelector('.editor__btn-italic--js');
const btnFontSelect = document.querySelector('.editor__select--js');
const colorInput = document.querySelector('.editor__palette--color--js');

// default settings
let size = 16; 

// increase font size by 1
function fontSizeUp() {
    entryTextarea.style.fontSize = `${size + 1}px`;
    size = size + 1;
}

// reduce font size by 1
function fontSizeDown() {
    entryTextarea.style.fontSize = `${size - 1}px`;
    size = size - 1;
}

// thickness of font
function fontBolder() {
    entryTextarea.classList.toggle('editor__btn--bold');
}

// add underline
function fontUnderline() {
    entryTextarea.classList.toggle('editor__btn--underline');
}

// add italic style
function fontItalic() {
    entryTextarea.classList.toggle('editor__btn--italic');
}

// change font family
function fontSelect() {
    const selector = document.getElementById('select');
    const value = selector[selector.selectedIndex].value;
    entryTextarea.style.fontFamily = value;
}

// change font color
  
    colorInput.addEventListener('input', () => {
        let newColor = colorInput.value;
        document.documentElement.style.setProperty('color', newColor);
    })




btnSizeUp.addEventListener('click', fontSizeUp);
btnSizeDown.addEventListener('click', fontSizeDown);
btnBold.addEventListener('click', fontBolder);
btnUnderline.addEventListener('click', fontUnderline);
btnItalic.addEventListener('click', fontItalic);
btnFontSelect.addEventListener('click', fontSelect);
