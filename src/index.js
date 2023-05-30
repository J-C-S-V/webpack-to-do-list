import './index.scss';
import addTasks from './modules/addTasks.js';
import renderList from './modules/renderList.js';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);

renderList();
