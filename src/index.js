import './index.scss';

const addButton = document.querySelector('.main__button');
const input = document.querySelector('.main__input');
const ul = document.querySelector('.list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Remove tasks

function removeTask(event) {
  const li = event.target.closest('li');
  if (!li) return;
  const index = Array.from(li.parentNode.children).indexOf(li);
  tasks.splice(index, 1);
  li.remove();

  for (let i = index; i < tasks.length; i++) {
    tasks[i].index = i + 1;
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Edit tasks

function editTask(li) {
  const taskSpan = li.querySelector('.list__item-description');
  taskSpan.addEventListener('click', () => {
    const newContent = prompt('Edit task');
    if (newContent === null || newContent === '') return;
    taskSpan.textContent = newContent;
    const index = Array.from(li.parentNode.children).indexOf(li);
    tasks[index].description = newContent;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}

// Create list

function createListItem(task) {
  const li = document.createElement('li');
  li.classList.add('list__item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('list__item-checkbox');
  // checkbox.checked = task.completed;
  li.appendChild(checkbox);

  const taskSpan = document.createElement('span');
  taskSpan.classList.add('list__item-description');
  taskSpan.textContent = task.description;
  li.appendChild(taskSpan);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);

  return li;
}

// Render tasks

function renderList() {
  ul.innerHTML = '';
  const incompleteTasks = tasks.filter((task) => !task.completed);
  incompleteTasks.forEach((task) => {
    const li = createListItem(task);
    ul.appendChild(li);
    editTask(li);
  });
}

// Add tasks

function addTask() {
  const description = input.value.trim();
  if (!description) return;
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);

  const li = createListItem(task);
  ul.appendChild(li);
  editTask(li);

  input.value = '';

  localStorage.setItem('tasks', JSON.stringify(tasks));

  const checkbox = li.querySelector('.list__item-checkbox');
  checkbox.addEventListener('change', isCompleted);

  function isCompleted() {
    if (checkbox.checked) {
      li.classList.add('completed');
      task.completed = true;
    } else {
      li.classList.remove('completed');
      task.completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// Clear all completed tasks

const clearAllCompleted = document.querySelector('.main__anchor');
clearAllCompleted.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  renderList();
});

ul.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    removeTask(event);
  }
});

addButton.addEventListener('click', addTask);

renderList();
