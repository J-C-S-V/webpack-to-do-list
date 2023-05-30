function isCompleted() {
  const tasks = (JSON.parse(localStorage.getItem('tasks'))) || [];
  const htmlTextContent = this.parentElement.querySelector('.list__item-description').textContent;
  const task = tasks.find((element) => element.description === htmlTextContent);
  task.completed = !task.completed;
  this.parentElement.classList.toggle('completed');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default isCompleted;
