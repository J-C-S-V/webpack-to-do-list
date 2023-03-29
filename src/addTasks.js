import { removeTasks } from './removeTasks.js';
import { editTasks } from './editTasks.js';
const tasks = [];

const input = document.querySelector('.main__input');
const ul = document.querySelector('.list');

export default function addTasks() {
  tasks.push({
    description: input.value,
    completed: false,
    index: tasks.length + 1,
  });

  const li = document.createElement('li');
  li.innerHTML = tasks[tasks.length - 1].description;
  li.setAttribute('id', tasks.length);
  li.classList.add('list__item');
  ul.appendChild(li);

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);
  editTasks();
  input.value = '';
  removeButton.addEventListener('click', removeTasks);
}
