import Sortable from 'sortablejs';
import removeTask from './removeTasks.js';
import isCompleted from './isCompleted.js';
import clearAllCompleted from './clearAllCompleted.js';
import updateLocalStorage from './updateLocalStorage.js';

function renderList() {
  const ul = document.querySelector('.main__ul');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('list__item');
    li.innerHTML = `
    <input type="checkbox" class="list__item-checkbox" ${element.completed ? 'checked' : ''}>
    <span class="list__item-description" contenteditable="true">${element.description}</span>
    <button class="remove-button">Remove</button>
    <div class="drag" draggable="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg></div>

  `;
    if (element.completed) {
      li.classList.add('completed');
    }
    ul.appendChild(li);

    const removeButton = document.querySelectorAll('.remove-button');
    removeButton.forEach((button) => button.addEventListener('click', removeTask));
    const checkbox = document.querySelectorAll('.list__item-checkbox');
    checkbox.forEach((box) => box.addEventListener('click', isCompleted));
    const clearAllButton = document.querySelectorAll('.main__anchor');
    clearAllButton.forEach((item) => item.addEventListener('click', clearAllCompleted));
    const descriptionSpan = document.querySelectorAll(
      '.list__item-description',
    );
    descriptionSpan.forEach((item) => {
      item.addEventListener('input', updateLocalStorage);
    });
  });

  Sortable.create(ul, {
    handle: '.drag',
    animation: 150,
    onEnd: () => {
      const items = Array.from(ul.children);
      items.forEach((item) => {
        const tasksTwo = JSON.parse(localStorage.getItem('tasks')) || [];
        const htmlInnerText = item.children[1].innerText;
        const htmlArray = Array.from(item.parentElement.children);
        const htmlElementIndex = htmlArray.indexOf(item);
        tasksTwo[htmlElementIndex].description = htmlInnerText;
        const checkbox = item.querySelector('input[type="checkbox"]');
        tasksTwo[htmlElementIndex].completed = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(tasksTwo));
      });
    },
  });
}

export default renderList;
