// eslint-disable-next-line import/no-cycle
import { tasks, input } from './index.js';
import removeTasks from './removeTasks.js';
import editTasks from './editTasks.js';

export const ul = document.querySelector('.list');

export default function addTasks() {
  tasks.push({
    description: input.value,
    completed: false,
    index: tasks.length + 1,
  });

  const li = document.createElement('li');
  li.classList.add('list__item');
  ul.appendChild(li);

  const taskSpan = document.createElement('span');
  taskSpan.classList.add('list__item-description');
  taskSpan.innerHTML = tasks[tasks.length - 1].description;
  li.appendChild(taskSpan);

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);

  removeButton.addEventListener('click', removeTasks);
  editTasks(li);

  input.value = '';

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
