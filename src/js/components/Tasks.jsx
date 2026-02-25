import React from "react";

function Tasks({ tasks, removeTask }) {

    return (
        <>
                {tasks.map((task) => {
                        return <li key={task.id}>
                            {task.task}
                            <button
                                className="btn btn-close"
                                onClick={() => removeTask(task.id)}
                            >
                            </button>
                        </li>
                    }
                    )
                    .reverse()
                }
        </>
    )
}

export default Tasks;