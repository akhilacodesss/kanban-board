import { useState } from "react";
import Board from "./components/Board";
import TaskModal from "./components/TaskModal";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <TaskProvider>
      <div className="min-h-screen bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
              📋 Kanban Board
            </h1>
            <p className="text-gray-500 mt-1">
              Organize your tasks efficiently with drag-and-drop
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full mb-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            + Add New Task
          </button>

          <Board />
        </div>
      </div>

      {open && <TaskModal close={() => setOpen(false)} />}
    </TaskProvider>
  );
}

export default App;
