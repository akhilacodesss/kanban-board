import { DndContext, closestCenter } from "@dnd-kit/core";
import Column from "./Column";
import { useTasks } from "../context/TaskContext";

const columns = [
  { title: "To Do", status: "todo", color: "blue" },
  { title: "In Progress", status: "inProgress", color: "orange" },
  { title: "Done", status: "done", color: "green" }
];

function Board() {
  const { setTasks } = useTasks();

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const newStatus = over.data?.current?.status;
    if (!newStatus) return;

    setTasks(prev =>
      prev.map(t =>
        t.id === active.id ? { ...t, status: newStatus } : t
      )
    );
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(col => (
          <Column key={col.status} {...col} />
        ))}
      </div>
    </DndContext>
  );
}

export default Board;
