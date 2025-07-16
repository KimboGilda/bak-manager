import { useState } from 'react';
import TaskItem from './components/TaskItem';
import type { Task } from './utils/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {id: "1", title: "first task", completed: false},
    {id: "2", title: "second task", completed: false}
  ]);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");

  const handleToggle = (id:string) => {
    console.log("toggle item: ", id)
    setTasks(prev => prev.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }

  const handleDelete = (id:string) => {
    console.log("delete item: ", id)
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const handleForm = ():Task => {
    setShowForm(true);
    return {
      id: "",
      title:"",
      completed: false
    }
  };

  const handleAddNewTask = (title:string) => {
    console.log("adding a new task")
    const newTask:Task = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    };

    setTasks(prev => [...prev, newTask]);
    setNewTitle("");
    setShowForm(false);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
     <div className="main-container w-96 h-128 bg-white p-4 shadow-lg rounded">

      <div className="upper-container flex justify-between items-center w-full mb-4">
        <div className="text-lg font-semibold text-blue-950">
         Task Manager Bako
       </div>

        <button
        className='bg-blue-500 text-white text-s px-3 py-0.5 rounded hover:bg-blue-600'
        onClick={() => setShowForm(true)}>
          new task
      </button>
      </div>
      
  
       {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
       ))}
      
       {showForm && (
        <div className="mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault(); 
              handleAddNewTask(newTitle); 
            }}
            className="flex flex-col gap-2"
            >
          <input
            type="text"
            className="border border-gray-300 px-2 py-1 rounded w-full"
            placeholder="New task title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-200 text-white px-3 py-1 max-w-fit rounded hover:bg-green-600"
          >
            Submit
          </button>
          </form>
        </div>
        )}
     </div>
    </div>
  )
}

export default App
