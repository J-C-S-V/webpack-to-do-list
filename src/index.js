import './index.scss';
import addTasks from './modules/addTasks.js';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);
