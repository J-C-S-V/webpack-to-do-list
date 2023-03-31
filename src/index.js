import './index.scss';

const addButton = document.querySelector('.main__button');
addButton.addEventListener('click', addTasks);

const input = document.querySelector('.main__input');
const ul = document.querySelector('.list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

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

function addTasks() {
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

function removeTasks(event) {
  event.stopPropagation();
  const li = event.target.parentNode;
  const index = Array.prototype.indexOf.call(ul.children, li);
  tasks.splice(index, 1);
  li.remove();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editTasks(li) {
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
