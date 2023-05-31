function removeTask(event) {
  const tasks = (JSON.parse(localStorage.getItem('tasks'))) || [];
  const li = event.target.parentElement;

  tasks.forEach((element) => {
    if (element.description === li.querySelector('.list__item-description').textContent) {
      tasks.splice(tasks.indexOf(element), 1);
    }
  });
  tasks.forEach((task, index) => {
    task.index = index;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  li.remove();
}

export default removeTask;
