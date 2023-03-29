import addTasks from './addTasks.js';
import './index.scss';

// tasksList();
const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);
