import './index.scss';

import addTasks from './addTasks.js';
import removeTasks from './removeTasks.js';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);

export const ul = document.querySelector('.list');
export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function editTasks(li) {
  const taskSpan = li.querySelector('.list__item-description');
  taskSpan.addEventListener('click', () => {
    const newContent = prompt('Edit task');
    if (newContent === null || newContent === '') return;
    taskSpan.textContent = newContent;
    const index = Array.prototype.indexOf.call(ul.children, li);
    tasks[index].description = newContent;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}

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
