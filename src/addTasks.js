const tasks = [{ description: 'sleep', completed: false, index: 1 }];

const input = document.querySelector('.main__input');
export default function addTasks() {
  const inputValue = input.value;
  tasks.push({
    description: `${inputValue}`,
    completed: false,
    index: tasks.length + 1,
  });
  console.log('this is the value', inputValue);
  console.log('this is the value', tasks);
}

// console.log("this is the length",tasks.length);

// export default function addTasks(tasks) {
//   const ul = document.querySelector('.list');
//   const tasksList = () => {
//     tasks.forEach((element) => {
//       const li = document.createElement('li');
//       li.innerHTML = element.description;
//       li.classList.add('main__elements');
//       ul.appendChild(li);
//     });
//   };

// }
