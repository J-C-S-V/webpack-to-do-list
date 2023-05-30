const renderList = () => {
  const ul = document.querySelector('.main__ul');
  const tasks = (JSON.parse(localStorage.getItem('tasks'))) || [];
  console.log('new', tasks);
  tasks.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('list__item');
    li.innerHTML = `
    <input type="checkbox" class="list__item-checkbox">
    <span class="list__item-description" contenteditable="true">${element.description}</span>
    <button class="remove-button">Remove</button>
  `;
    ul.appendChild(li);
  });
};

export default renderList;