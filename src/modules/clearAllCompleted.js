function clearAllCompleted() {
  const tasks = (JSON.parse(localStorage.getItem('tasks'))) || [];
  const completedTasks = tasks.filter((task) => !task.completed);
  completedTasks.forEach((task, index) => {
    task.index = index;
  });
  const completedItems = document.querySelectorAll('.completed');
  completedItems.forEach((item) => {
    item.remove();
  });
  localStorage.setItem('tasks', JSON.stringify(completedTasks));
}

export default clearAllCompleted;
