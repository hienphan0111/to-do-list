const add = (task) => {
  let tasks = JSON.parse(localStorage.getItem('toDoList'));
  if (tasks === null) {
    tasks = [];
  }
  task.index = tasks.length + 1;
  tasks.push(task);
  localStorage.setItem('toDoList', JSON.stringify(tasks));
  return tasks;
};

const remove = (taskIndex) => {
  const tasks = JSON.parse(localStorage.getItem('toDoList'));
  const index = tasks.findIndex((item) => item.index === taskIndex);
  tasks.splice(index, 1);
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }
  localStorage.setItem('toDoList', JSON.stringify(tasks));
};

const modify = (description, index) => {
  const tasks = JSON.parse(localStorage.getItem('toDoList'));
  tasks[index].description = description;
  localStorage.setItem('toDoList', JSON.stringify(tasks));
};

export { add, remove, modify };
