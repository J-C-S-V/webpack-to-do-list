const tasks = [];

const input = document.querySelector('.main__input');
export default function addTasks() {
  tasks.push({
    description: input.value,
    completed: false,
    index: tasks.length + 1,
  });

  console.log('this is the value', input.value);
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
