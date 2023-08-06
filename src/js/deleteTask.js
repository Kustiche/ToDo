import { render, renderRemoteTasks } from './render.js';
import { remoteTasksArray } from './sideBar.js';
import { tasksArray } from './tasksArray.js';

// Удаление задачи

export function deleteTask(e) {
	if (e.target.className === 'todo__btn-delete btn-reset') {
		const task = e.target.closest('.todo__task');

		remoteTasksArray.push(tasksArray[Number(task.dataset.index)]);
		tasksArray.splice(Number(task.dataset.index), 1);

		render();
		renderRemoteTasks();
		localStorage.setItem('remoteTasksArray', JSON.stringify(remoteTasksArray));
		localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
	}
}

// Удаление задачи
