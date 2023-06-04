import renderList from '../modules/renderList.js';

document.querySelector = jest.fn(() => {
  const ul = document.createElement('ul');
  ul.classList.add('main__ul');
  return ul;
});

test('should call document.querySelector with correct selector', () => {
  renderList();
  expect(document.querySelector).toHaveBeenCalledWith('.main__ul');
  expect(document.querySelector).toHaveBeenCalledTimes(1);
});
