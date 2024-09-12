import React from 'react'
import './AddTask.scss'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface AddTaskProps {
    onAddTask: (newTask: string) => void
}

function AddTask({ onAddTask }: AddTaskProps) {
    const [taskInput, setTaskInput] = React.useState<string>('')

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onAddTask(taskInput) // callback function
        setTaskInput('') // clear input field
    }
    return (
        <div className="add-task">
            <form onSubmit={handleOnSubmit}>
                <input
                    id="taskInput"
                    name="taskInput"
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button type="submit">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </div>
    )
}

export default AddTask