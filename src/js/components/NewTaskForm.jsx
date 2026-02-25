import React from "react";

function NewTaskForm({ addNewTask, newTask, setNewTask }) {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                    placeholder="new task"
                />
                <button onClick={addNewTask}>Add</button>
            </form>
        </>
    )
}

export default NewTaskForm;