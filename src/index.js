import './index.scss';

// eslint-disable-next-line import/no-cycle
import addTasks from './addTasks.js';
import removeTasks from './removeTasks.js';
import editTasks from './editTasks.js';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);

export const input = document.querySelector('.main__input');
export const ul = document.querySelector('.list');
export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach((task) => {
  const li = document.createElement('li');
  li.classList.add('list__item');
  ul.appendChild(li);

  const taskSpan = document.createElement('span');
  taskSpan.classList.add('list__item-description');
  taskSpan.innerHTML = task.description;
  li.appendChild(taskSpan);

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);

  removeButton.addEventListener('click', removeTasks);
  editTasks(li);
});
