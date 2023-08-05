import { render } from './render.js';
import { tasksArray } from './tasksArray.js';

// Удаление задачи

export function deleteTask(e) {
	if (e.target.className === 'todo__btn-delete btn-reset') {
		const task = e.target.closest('.todo__task');
		let index = 0;

		tasksArray.splice(Number(task.dataset.index), 1);

		tasksArray.forEach((item) => {
			item.index = index;

			++index;
		});

		render();
		localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
	}
}

// Удаление задачи
