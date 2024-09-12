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
    const newTaskList = taskList.map(task => task.id === updatedTask.id ? updatedTask : task)
    setTaskList(newTaskList)
  }

  return (
    <div className="app">
      <h1>My Tasks</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList taskList={taskList} onRemoveTask={handleRemoveTask} onUpdateTask={handleUpdateTask}/>
    </div>
  )
}

export default App
