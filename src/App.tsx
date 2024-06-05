import React from 'react'
import './App.css'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'

export type Task = {
  id: number
  text: string
}

function App() {
  const [taskList, setTaskList] = React.useState<Task[]>([])
  const [editingTask, setEditingTask] = React.useState<Task | null>(null)

  const handleEditingTask = (task: Task) => {
    setEditingTask(task)
    console.log('handleEditingTask:', task);
  }

  const handleDoneEditingTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingTask) return;

    console.log('Before update:', editingTask);

    // setTasks(tasks.map(task => task.id === editingTask.id ? editingTask : task));
    // console.log('After update:', editingTask, tasks);

    setEditingTask(null);
  }

  const handleAddTask = (taskText: string) => {
    const newTask: Task = {
      id: taskList.length === 0 ? 1 : taskList.length+1,
      text: taskText
    }
    setTaskList([...taskList, newTask])
  }

  const handleRemoveTask = (deleteTask: Task) => {
    const newTaskList = taskList.filter(task => task.id !== deleteTask.id)
    setTaskList(newTaskList)
  }

  const handleUpdateTask = (updatedTask: Task) => {
    console.log(updatedTask)
    const newTaskList = taskList.map(task => task.id === updatedTask.id ? updatedTask : task)
    setTaskList(newTaskList)
  }

  return (
    <>
      <h1>My Tasks</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList taskList={taskList} onRemoveTask={handleRemoveTask} onUpdateTask={handleUpdateTask}/>
    </>
  )
}

export default App
