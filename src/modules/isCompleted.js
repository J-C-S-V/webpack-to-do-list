function isCompleted() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const htmlInnerText = this.parentElement.querySelector('.list__item-description').innerText;
  const task = tasks.find((element) => element.description === htmlInnerText);
  task.completed = !task.completed;
  this.parentElement.classList.toggle('completed');
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default isCompleted;
