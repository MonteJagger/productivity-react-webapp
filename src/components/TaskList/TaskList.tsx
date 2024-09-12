import './TaskList.scss'
import { Task } from '../../App'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

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

        if (editingTask) {
            onUpdateTask(editingTask)
        }
        setEditingTask(null)
    }


    return (
        <>
            {/* Task Title */}
            { taskList.length !== 0 ? <h3 className="task-title">Task List</h3> : <></> }
            <ul>
                {taskList.map((task: Task) => (
                    <li key={task.id}>
                        {
                            editingTask?.id === task.id 
                            ?
                            <div>
                                <form onSubmit={handleSubmit}  className="edit-task-item">
                                    <input
                                        type="text"
                                        name="editTaskInput"
                                        onChange={(e) => setEditingTask({id: editingTask.id, text: e.target.value})}
                                        value={editingTask.text}
                                    />
                                    <div className="task-button-wrapper">
                                        <button type="submit">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </button>
                                        <button type="button" onClick={() => onRemoveTask(task)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            :
                            <div className="task-item">
                                <p className="task-text" onClick={() => handleEditingTask(task)}>
                                    {task.text}
                                </p>
                                <div className="task-button-wrapper">
                                    <button type="button" onClick={() => handleEditingTask(task)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button type="button" onClick={() => onRemoveTask(task)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        }
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList