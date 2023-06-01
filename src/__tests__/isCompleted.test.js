import isCompleted from '../modules/isCompleted.js';

test('toggles completed status of task', () => {
  const tasks = [
    { description: 'Task 1', completed: false },
    { description: 'Task 2', completed: true },
    { description: 'Task 3', completed: false },
  ];
  localStorage.setItem('tasks', JSON.stringify(tasks));

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const description = document.createElement('span');
  description.classList.add('list__item-description');
  description.innerText = 'Task 2';
  const li = document.createElement('li');
  li.appendChild(checkbox);
  li.appendChild(description);

  isCompleted.call(checkbox);

  const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
  expect(updatedTasks[1].completed).toBe(false);
});