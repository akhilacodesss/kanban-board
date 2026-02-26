import { useDroppable } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

const colorMap = {
  blue: "bg-blue-600",
  orange: "bg-orange-500",
  green: "bg-green-600"
};

function Column({ title, status, color }) {
  const { tasks } = useTasks();
  const columnTasks = tasks.filter(t => t.status === status);

  const { setNodeRef } = useDroppable({
    id: status,
    data: { status }
  });

  return (
    <div
      ref={setNodeRef}
      className="rounded-xl p-4 min-h-[420px]"
      style={{
        background:
          color === "blue"
            ? "#dbeafe"
            : color === "orange"
            ? "#fef3c7"
            : "#dcfce7"
      }}
    >
      <div
        className={`flex justify-between items-center text-white px-4 py-2 rounded-lg mb-4 ${colorMap[color]}`}
      >
        <span className="font-semibold">{title}</span>
        <span className="bg-white/20 px-2 py-0.5 rounded text-sm">
          {columnTasks.length}
        </span>
      </div>

      {columnTasks.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          No tasks yet
        </p>
      )}

      {columnTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Column;
