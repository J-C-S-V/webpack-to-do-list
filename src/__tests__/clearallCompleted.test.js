import clearAllCompleted from '../modules/clearAllCompleted.js';

test('removes all completed tasks', () => {
  const tasks = [
    { description: 'Task 1', completed: false },
    { description: 'Task 2', completed: true },
    { description: 'Task 3', completed: true },
    { description: 'Task 4', completed: false },
  ];
  localStorage.setItem('tasks', JSON.stringify(tasks));

  const completedItems = [
    document.createElement('li'),
    document.createElement('li'),
  ];
  completedItems[0].classList.add('completed');
  completedItems[1].classList.add('completed');

  document.body.appendChild(completedItems[0]);
  document.body.appendChild(completedItems[1]);

  clearAllCompleted();

  const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
  expect(updatedTasks.length).toBe(2);
  expect(updatedTasks[0].description).toBe('Task 1');
  expect(updatedTasks[1].description).toBe('Task 4');
});