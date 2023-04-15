import './index.scss';
import addTasks from './addTasks.js';
import clearAllCompleted from './clearAllCompleted.js';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);
