import removeTask from './removeTasks.js';
import isCompleted from './isCompleted.js';
import clearAllCompleted from './clearAllCompleted.js';

const ul = document.querySelector('.main__ul');
const input = document.querySelector('.main__input');

// export const tasks = Array.from(JSON.parse(localStorage.getItem('tasks'))) || [];
export const tasks = [];

let number = 1;

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
  // const local = JSON.parse(localStorage.getItem('tasks'));
  // console.log(local);
  // localStorage.getItem('tasks', JSON.stringify(tasks));
}

export default addTasks;