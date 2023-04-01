// eslint-disable-next-line import/no-cycle
import { renderList, getTasks } from './index.js';

const clearAllCompleted = document.querySelector('.main__anchor');

export default function clearCompleted() {
  clearAllCompleted.addEventListener('click', () => {
    const tasks = getTasks();
    const updatedTasks = tasks.filter((task) => !task.completed);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    renderList();
  });
}
