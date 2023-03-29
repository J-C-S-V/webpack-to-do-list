import removeTasks from './removeTasks.js';

export const tasks = [];

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
  ul.appendChild(li);

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);
  console.log('this is the value', input.value);
  console.log('this is the value', tasks);

  // const removeButton = document.querySelector('.remove-button');
  removeButton.addEventListener('click', removeTasks);
}
