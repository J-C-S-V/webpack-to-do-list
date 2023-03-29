export function editTasks() {
  const li2 = document.querySelector('.list__item');
  li2.addEventListener('click', () => {
    const currentContent = li2.textContent;
    const newContent = prompt('Edit task', currentContent);
    if (newContent === null || newContent === '') return;
    li2.innerHTML = `${newContent}<button class="remove-button">Remove</button>
    `;
  });
}
