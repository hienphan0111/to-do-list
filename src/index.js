import './style.css';
import { add, remove, modify } from './toDoTasks.js';

let toDoTasks = JSON.parse(localStorage.getItem('toDoList'));

const toDoContainer = document.querySelector('.to-do-container');
if (toDoTasks !== null) {
  toDoTasks.forEach((item) => {
    const { description, index } = item;
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('row');
    const temp = `
      <div class="meta">
        <input type="checkbox" id="ip-${index}">
        <label for="ip-${index}" class="lb-task">${description}</label>
        <input type="text" class="ip-task hidden" value="${description}">
      </div>
      <div class="icon-task" id=${index}>
        <i class="fa-solid fa-ellipsis-vertical dot"></i>
      </div>
    `;
    toDoItem.innerHTML = temp;
    toDoContainer.appendChild(toDoItem);
  });
} else {
  toDoTasks = [];
}

// Add new task

const inputTask = document.getElementById('add-new');
const addTask = document.getElementById('addBtn');
addTask.addEventListener('click', () => {
  if (inputTask.value !== '') {
    const task = {
      description: inputTask.value,
      completed: false,
      index: 0,
    };
    add(task);
    window.location.reload();
  }
});

// Remove task

const iconTask = document.querySelectorAll('.icon-task');
const dlState = [];
iconTask.forEach((item, i) => {
  dlState.push({
    index: item.id,
    state: false,
  });
  item.addEventListener('click', () => {
    const lbTask = document.querySelectorAll('.lb-task');
    const ipTask = document.querySelectorAll('.ip-task');
    lbTask[i].classList.add('hidden');
    console.log(lbTask[i]);
    ipTask[i].classList.remove('hidden');
    const iState = dlState.find((el) => el.index === item.id);
    if (!iState.state) {
      item.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      iState.state = true;
      dlState.forEach((e, index) => {
        if (e.index !== item.id) {
          e.state = false;
          iconTask[index].innerHTML = '<i class="fa-solid fa-ellipsis-vertical dot"></i>';
          iconTask[index].parentElement.style.backgroundColor = '#fff';
          ipTask[index].classList.add('hidden');
          lbTask[index].classList.remove('hidden');
        }
      });
      item.parentElement.style.backgroundColor = '#f9e9d6';
    } else {
      remove(parseInt(item.id, 10));
      window.location.reload();
    }
  });
});

const ipTask = document.querySelectorAll('.ip-task');
if (ipTask !== null) {
  ipTask.forEach((el, index) => {
    el.addEventListener('change', () => {
      modify(el.value, index);
      window.location.reload();
    })
  })
}
