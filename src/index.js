import addTasks from './addTasks.js';
// import removeTasks from './removeTasks.js';
import './index.scss';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);
