import { ul, tasks } from './index.js';

export function removeTasks(event) {
  event.stopPropagation();
  const li = event.target.parentNode;
  const index = Array.prototype.indexOf.call(ul.children, li);
  tasks.splice(index, 1);
  li.remove();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
