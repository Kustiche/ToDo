import { render } from './render.js';
import { tasks } from './tasksArray.js';

// Удаление задачи

export let newTasksArray = undefined;

export function deleteTask(e) {
	if (e.target.className === 'todo__btn-delete btn-reset') {
		const task = e.target.closest('.todo__task');

		if (newTasksArray !== undefined) {
			let index = 0;

			newTasksArray = newTasksArray.filter(
				(item) => item.index !== Number(task.dataset.index)
			);

			newTasksArray.forEach((item) => {
				item.index = index;

				++index;
			});
		} else {
			newTasksArray = tasks.filter(
				(item) => item.index !== Number(task.dataset.index)
			);
		}

		render();
	}
}

// Удаление задачи
