import React, { useState } from "react";
import Tasks from "./Tasks";
import NewTaskForm from "./NewTaskForm";
import todos from "../data"
import generateId from "../generateId";

const Home = () => {
	const [tasks, setTasks] = useState(() => todos);
	const [newTask, setNewTask] = useState('');

	// Add new task
	function handleClickAddNewTask() {
		if (newTask.length !== 0) {
			setTasks(
				[
					...tasks,
					{
						task: newTask,
						id: generateId()
					}
				]
			)
		}
		setNewTask('')
	}

	// Remove Task
	function handleRemove(id) {
		return setTasks(tasks.filter(task => task.id !== id));
	}

	return (
		<>
			<h1>TODOS</h1>
			<NewTaskForm
				addNewTask={handleClickAddNewTask}
				newTask={newTask}
				setNewTask={setNewTask}
			/>
			<ul>
				<Tasks
					tasks={tasks}
					removeTask={handleRemove}
				/>
			</ul>
		</>

	);
};

export default Home;