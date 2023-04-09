ul.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    removeTask(event);
  }
});

function removeTask(event) {
  const li = event.target.closest('li');
  if (!li) return;
  const index = Array.from(li.parentNode.children).indexOf(li);
  tasks.splice(index, 1);
  li.remove();
}
