import { createTask } from './createTask';
import { tasks } from './tasksArray';
import { innersTasks } from './view.js';

export function render() {
	innersTasks.forEach((item) => {
		item.innerHTML = '';
	});

	tasks.forEach((task) => {
		createTask(task.text, task.priority, task.time);
	});
}
