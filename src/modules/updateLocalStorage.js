function updateLocalStorage(event) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const htmlInnerText = event.target.innerText;
  const htmlArray = Array.from(event.target.parentElement.parentElement.children);
  const htmlElementIndex = htmlArray.indexOf(event.target.parentElement);

  // tasks.forEach((item) => {

  // console.log(htmlElementIndex);
  tasks[htmlElementIndex].description = htmlInnerText;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default updateLocalStorage;
// console.log(htmlInnerText);
// const found = tasks.forEach((item) => {
//   if (item.description === htmlInnerText) {
//     item.description = htmlInnerText;
//   }
// });
