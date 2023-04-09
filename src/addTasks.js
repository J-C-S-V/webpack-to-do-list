function addTasks(tasks) {
  const li = document.createElement('li');
  li.classList.add('list__item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('list__item-checkbox');
  li.appendChild(checkbox);

  const taskSpan = document.createElement('span');
  taskSpan.classList.add('list__item-description');
  taskSpan.textContent = 'pending...';
  li.appendChild(taskSpan);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  li.appendChild(removeButton);

  return li;
}

addButton.addEventListener('click', addTasks);
