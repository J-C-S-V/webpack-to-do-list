export default function editTasks(li) {
  const taskSpan = li.querySelector('.list__item-description');
  taskSpan.addEventListener('click', () => {
    const newContent = prompt('Edit task');
    if (newContent === null || newContent === '') return;
    taskSpan.textContent = newContent;
  });
}
