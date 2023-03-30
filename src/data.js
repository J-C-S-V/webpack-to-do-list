const ul = document.querySelector('.list');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export { tasks, ul };
