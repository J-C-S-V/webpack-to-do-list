import './index.scss';

const tasks = [
  { description: 'sleep', completed: true, index: 1 },
  { description: 'eat', completed: true, index: 2 },
  { description: 'study', completed: true, index: 3 },
];

const ul = document.getElementsByClassName('.list');

const tasksList = () => {
  tasks.forEach((element) => {
    // console.log(element.description);
    const li = document.createElement('li');
    li.innerHTML = element.description;
    ul.appendChild(li);
  });
};

tasksList();
