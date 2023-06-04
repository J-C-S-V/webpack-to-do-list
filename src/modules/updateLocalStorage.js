function updateLocalStorage(event) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const htmlInnerText = event.target.innerText;
  const htmlArray = Array.from(event.target.parentElement.parentElement.children);
  const htmlElementIndex = htmlArray.indexOf(event.target.parentElement);
  tasks[htmlElementIndex].description = htmlInnerText;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default updateLocalStorage;
