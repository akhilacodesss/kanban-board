const KEY = "kanban_tasks";

export const loadTasks = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTasks = tasks => {
  localStorage.setItem(KEY, JSON.stringify(tasks));
};
