import removeTasks from './removeTasks.js';
import editTasks from './editTasks.js';

const input = document.querySelector('.main__input');
const ul = document.querySelector('.list');
const tasks = [];

export default function addTasks() {
  tasks.push({
    description: input.value,
    completed: false,
    index: tasks.length + 1,
  });

  // Add li
  const li = document.createElement('li');
  li.classList.add('list__item');
  ul.appendChild(li);

  // Add span for task description
  const taskSpan = document.createElement('span');
  taskSpan.classList.add('list__item-description');
  taskSpan.innerHTML = tasks[tasks.length - 1].description;
  li.appendChild(taskSpan);

  // Add remove button
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);

  // Add event listeners for remove and edit buttons
  removeButton.addEventListener('click', removeTasks);
  editTasks(li);

  input.value = '';

  // Add local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
