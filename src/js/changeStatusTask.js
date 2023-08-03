import { dataTransferNewTasksArray, newTasksArray } from './deleteTask.js';
import { render } from './render.js';

// Изменение статуса задачи (Выполнена/не выполнена)

export function changeStatusTask(e) {
	const btnChangeStatus = e.target;
	const isBtnChangeStatus = btnChangeStatus.className === 'todo__btn btn-reset';

	if (isBtnChangeStatus) {
		const task = btnChangeStatus.closest('.todo__task');

		if (newTasksArray === null) {
			dataTransferNewTasksArray();
		}

		newTasksArray.forEach((item) => {
			if (item.index === Number(task.dataset.index) && item.status !== true) {
				item.status = true;
			} else if (
				item.index === Number(task.dataset.index) &&
				item.status !== false
			) {
				item.status = false;
			}
		});

		render();
		localStorage.setItem('newTasksArray', JSON.stringify(newTasksArray));
	}
}

// Изменение статуса задачи (Выполнена/не выполнена)
