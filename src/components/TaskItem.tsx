import type { Task } from "../utils/Task";

export interface TaskItemProps {
  task: Task;
  onToggle: (id:string) => void;
  onDelete: (id:string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, onToggle, onDelete}) => {
  return (
    <>
      <div className="task-container flex flex-row justify-between items-center w-full bg-blue-100 px-2 py-1 rounded mb-2">
        <div className="task-checkbox bg-blue-400 w-fit px-2 py-1 rounded">
          <label className="flex items-center gap-2">
          <input
            key={task.id}
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
           />
          <span className={task.completed ? 'line-through' : ''}>
            {task.title}
          </span>
          </label>
        </div>
        <button
          className="bg-red-300 hover:bg-red-600 text-white text-xs px-2 py-1 rounded"
          onClick={() => onDelete(task.id)}
        >
        delete
       </button>
      </div>  
    </>
  )
};

export default TaskItem;