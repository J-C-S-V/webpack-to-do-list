import removeTask from './removeTasks.js';
import isCompleted from './isCompleted.js';
import renderList from './renderList.js';
import clearAllCompleted from './clearAllCompleted.js';

renderList();

const ul = document.querySelector('.main__ul');
const input = document.querySelector('.main__input');

// console.log('trying');

export const tasks = (JSON.parse(localStorage.getItem('tasks'))) || [];

// console.log('tasks', tasks);

let number = 0;

function addTasks(event) {
  event.preventDefault();
  const taskObject = {
    index: number,
    description: input.value,
    completed: false,
  };
  number += 1;
  if (input.value === '') return;

  const li = document.createElement('li');
  li.classList.add('list__item');
  li.innerHTML = `
    <input type="checkbox" class="list__item-checkbox">
    <span class="list__item-description" contenteditable="true">${input.value}</span>
    <button class="remove-button">Remove</button>
  `;
  ul.appendChild(li);
  input.value = '';

  const removeButton = document.querySelectorAll('.remove-button');
  removeButton.forEach((button) => button.addEventListener('click', removeTask));
  const checkbox = document.querySelectorAll('.list__item-checkbox');
  checkbox.forEach((box) => box.addEventListener('click', isCompleted));
  const clearAllButton = document.querySelector('.main__anchor');
  clearAllButton.addEventListener('click', clearAllCompleted);

  tasks.push(taskObject);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default addTasks;
