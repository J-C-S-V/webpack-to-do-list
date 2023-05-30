import removeTask from './removeTasks.js';
import isCompleted from './isCompleted.js';

const renderList = () => {
  const ul = document.querySelector('.main__ul');
  const tasks = (JSON.parse(localStorage.getItem('tasks'))) || [];
  tasks.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('list__item');
    li.innerHTML = `
    <input type="checkbox" class="list__item-checkbox">
    <span class="list__item-description" contenteditable="true">${element.description}</span>
    <button class="remove-button">Remove</button>
  `;
    ul.appendChild(li);

    const removeButton = document.querySelectorAll('.remove-button');
    removeButton.forEach((button) => button.addEventListener('click', removeTask));

    const checkbox = document.querySelectorAll('.list__item-checkbox');
    checkbox.forEach((box) => box.addEventListener('click', isCompleted));
  });
};

export default renderList;