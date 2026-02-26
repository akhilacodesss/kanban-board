import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { v4 as uuid } from "uuid";

function TaskModal({ close, task }) {
  const { tasks, setTasks } = useTasks();

  const [title, setTitle] = useState(task?.title || "");
  const [desc, setDesc] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "todo");

  function save() {
    if (!title.trim()) return;

    if (task) {
      setTasks(
        tasks.map(t =>
          t.id === task.id
            ? { ...t, title, description: desc, status }
            : t
        )
      );
    } else {
      setTasks([
        ...tasks,
        {
          id: uuid(),
          title,
          description: desc,
          status
        }
      ]);
    }

    close();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-[400px]">
        <h3 className="font-bold mb-3">
          {task ? "Edit Task" : "Create Task"}
        </h3>

        <input
          className="border p-2 w-full mb-2"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />

        <textarea
          className="border p-2 w-full mb-2"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          placeholder="Description"
        />

        <select
          className="border p-2 w-full mb-4"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={close}>Cancel</button>
          <button
            onClick={save}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
