import './style.css';

const toDoTasks = [
  {
    description: 'learn webpack',
    completed: false,
    index: 1,
  },
  {
    description: 'conplete first section to Do list project',
    completed: false,
    index: 2,
  },
];

const toDoContainer = document.querySelector('.to-do-container');
toDoTasks.forEach((item) => {
  const { description, index } = item;
  const toDoItem = document.createElement('li');
  toDoItem.classList.add('row');
  const temp = `
    <div class="meta">
      <input type="checkbox" id=${index}>
      <label for=${index}>${description}</label>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  `;
  toDoItem.innerHTML = temp;
  toDoContainer.appendChild(toDoItem);
});
