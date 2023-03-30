import { ul, tasks } from './data.js';

export default function editTasks(li) {
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
