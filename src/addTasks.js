import { removeTask } from './removeTasks.js';
const ul = document.querySelector('.main__ul');

export function addTasks(event) {
  /*What event.prevenDefault() 
  does is prevent the default action of the event from happening.*/
  event.preventDefault();
  if (input.value === '') return;
  const li = document.createElement('li');
  li.classList.add('list__item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('list__item-checkbox');
  li.appendChild(checkbox);

  const taskSpan = document.createElement('span');
  taskSpan.classList.add('list__item-description');
  taskSpan.textContent = input.value;
  taskSpan.setAttribute('contenteditable', 'true');
  li.appendChild(taskSpan);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);

  ul.appendChild(li);

  input.value = '';
  removeButton.addEventListener('click', removeTask);
}
