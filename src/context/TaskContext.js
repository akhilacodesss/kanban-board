import { createContext, useContext, useEffect, useState } from "react";
import { loadTasks, saveTasks } from "../utils/storage";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
