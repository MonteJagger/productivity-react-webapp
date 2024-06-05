import React from 'react'
import './AddTask.scss'

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
        <>
            <form onSubmit={handleOnSubmit}>
                <input
                    id="taskInput"
                    name="taskInput"
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}

export default AddTask