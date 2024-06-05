import './TaskList.scss'
import { Task } from '../../App'
import React from 'react'

interface TaskListProps {
    taskList: Task[]
    onUpdateTask: (task: Task) => void
    onRemoveTask: (task: Task) => void
}

function TaskList({ taskList, onRemoveTask, onUpdateTask }: TaskListProps) {
    const [editingTask, setEditingTask] = React.useState<Task | null>(null)


    const handleEditingTask = (task: Task) => {
        setEditingTask(task)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(editingTask)
        if (editingTask) {
            onUpdateTask(editingTask)
        }
        setEditingTask(null)
    }

    return (
        <>
            <h5>Task List</h5>
            <ul>
                {taskList.map((task: Task) => (
                    <li key={task.id}>
                        {
                            editingTask?.id === task.id 
                            ?
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="editTaskInput"
                                        onChange={(e) => setEditingTask({id: editingTask.id, text: e.target.value})}
                                        value={editingTask.text}
                                    />
                                    <button type="submit">Save</button>
                                </form>
                            </div>
                            :
                            <div>
                                <span>{task.text}</span>
                                <button type="button" onClick={() => handleEditingTask(task)}>Edit</button>
                                <button type="button" onClick={() => onRemoveTask(task)}>Delete</button>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList