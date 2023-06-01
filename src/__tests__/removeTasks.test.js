import removeTask from '../modules/removeTasks.js';

describe('removeTask', () => {
  test('removes the correct task from local storage and the DOM', () => {
    const tasks = [
      { description: 'Task 1' },
      { description: 'Task 2' },
      { description: 'Task 3' },
    ];
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.classList.add('list__item-description');
    span.textContent = 'Task 2';
    li.appendChild(span);

    const localStorageMock = {
      getItem: jest.fn(() => JSON.stringify(tasks)),
      setItem: jest.fn(),
    };
    global.localStorage = localStorageMock;

    const removeSpy = jest.spyOn(li, 'remove');

    removeTask({ target: { parentElement: li } });

    expect(removeSpy).toHaveBeenCalled();
  });
});