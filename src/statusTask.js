const updateStatusTask = (st, index) => {
  const tasks = JSON.parse(localStorage.getItem('toDoList'));
  tasks[index].completed = st;
  localStorage.setItem('toDoList', JSON.stringify(tasks));
};

const clearAllCompleted = () => {
  const tasks = JSON.parse(localStorage.getItem('toDoList'));
  const result = tasks.filter((item) => item.completed === false);
  result.forEach((item, index) => {
    item.index = index + 1;
  });
  localStorage.setItem('toDoList', JSON.stringify(result));
};

export { updateStatusTask, clearAllCompleted };