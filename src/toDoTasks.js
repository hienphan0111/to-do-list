const add = (task) => {
  let tasks = JSON.parse(localStorage.getItem('toDoList'));
  if (tasks === null)
  {
    tasks = [];
  }
  task.index = tasks.length + 1;
  tasks.push(task);
  localStorage.setItem('toDoList', JSON.stringify(tasks));
  return tasks;
}

const remove = (taskIndex) => {
  const tasks = JSON.parse(localStorage.getItem('toDoList'));
  const index = tasks.findIndex((item) => item.index === taskIndex);
  tasks.splice(index, 1);
  for (let i = index; i< tasks.length; i++) {
    tasks[i].index = tasks[i].index - 1;
  }
  localStorage.setItem('toDoList', JSON.stringify(tasks));
}

const modify = (task) => {

}

export { add, remove };
