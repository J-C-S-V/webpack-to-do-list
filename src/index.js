import './index.scss';
import addTasks from './addTasks.js';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);
const input = document.querySelector('.main__input');

// const demo = document.querySelector('.main__h2');

// demo.setAttribute('contenteditable', 'true');
