import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { setTasks } = useTasks();

  const {
    setNodeRef,
    setActivatorNodeRef,
    listeners,
    attributes,
    transform,
    isDragging
  } = useDraggable({ id: task.id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      className={`bg-white rounded-lg p-3 mb-3 shadow ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div
        ref={setActivatorNodeRef}
        {...listeners}
        {...attributes}
        className="font-medium cursor-grab"
      >
        {task.title}
      </div>

      {task.description && (
        <p className="text-sm text-gray-600 mt-1">
          {task.description}
        </p>
      )}

      <button
        onClick={() =>
          setTasks(prev => prev.filter(t => t.id !== task.id))
        }
        className="text-xs text-red-500 mt-2"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
