import { useState } from 'react';
import TaskItem from './components/TaskItem';
import type { Task } from './utils/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {id: "1", title: "first task", completed: false},
    {id: "2", title: "second task", completed: false}
  ]);

  const handleToggle = (id:string) => {
    console.log("toggle item: ", id)
    setTasks(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }

  const handleDelete = (id:string) => {
    console.log("delete item: ", id)
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
     <div className="main-container w-96 h-128 bg-white p-4 shadow-lg rounded">
      <div className="title text-blue-950 font-semibold text-lg mb-4">
         Task Manager Bako
       </div>
       {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
       ))}
     </div>
    </div>
  )
}

export default App
