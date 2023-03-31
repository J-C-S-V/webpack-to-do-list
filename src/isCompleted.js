import { renderList, getTasks } from './index.js';

// Clear all completed tasks

const clearAllCompleted = document.querySelector('.main__anchor');

export function clearCompleted() {
  clearAllCompleted.addEventListener('click', () => {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    renderList();
  });
}
