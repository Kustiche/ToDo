import { createRemoteTask, createTask } from './createTask.js';
import { remoteTasksArray } from './sideBar.js';
import { tasksArray } from './tasksArray.js';
import { innersTasks, sideBarInnerTasks } from './view.js';

/* Рендер */

export function render() {
	let index = 0;

	innersTasks.forEach((item) => {
		item.innerHTML = '';
	});

	tasksArray.forEach((task) => {
		createTask(task.text, task.priority, task.time, index++, task.status);
	});
}

/* Рендер */

/* Рендер удалённых задач */

export function renderRemoteTasks() {
	let index = 0;

	sideBarInnerTasks.innerHTML = '';

	remoteTasksArray.forEach((task) => {
		createRemoteTask(task.text, task.time, index++);
	});
}

/* Рендер удалённых задач */
