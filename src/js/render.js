import { createTask } from './createTask.js';
import { newTasksArray } from './deleteTask.js';
import { tasks } from './tasksArray.js';
import { innersTasks } from './view.js';

// Рендер

export function render() {
	let index = 0;

	innersTasks.forEach((item) => {
		item.innerHTML = '';
	});

	if (newTasksArray !== null) {
		newTasksArray.forEach((task) => {
			createTask(task.text, task.priority, task.time, index++);
		});
	} else if (newTasksArray === null) {
		tasks.forEach((task) => {
			createTask(task.text, task.priority, task.time, index++);
		});
	}
}

// Рендер
