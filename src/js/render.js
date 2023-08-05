import { createTask } from './createTask.js';
import { tasksArray } from './tasksArray.js';
import { innersTasks } from './view.js';

// Рендер

export function render() {
	let index = 0;

	innersTasks.forEach((item) => {
		item.innerHTML = '';
	});

	tasksArray.forEach((task) => {
		createTask(task.text, task.priority, task.time, index++, task.status);
	});
}

// Рендер
