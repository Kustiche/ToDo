import { render } from './render.js';
import { tasksArray } from './tasksArray.js';

// Изменение статуса задачи (Выполнена/не выполнена)

export function changeStatusTask(e) {
	const btnChangeStatus = e.target;
	const isBtnChangeStatus = btnChangeStatus.className === 'todo__btn btn-reset';

	if (isBtnChangeStatus) {
		const task = btnChangeStatus.closest('.todo__task');

		const isTasksArrayTrue =
			tasksArray[Number(task.dataset.index)].status !== true;

		if (isTasksArrayTrue) {
			tasksArray[Number(task.dataset.index)].status = true;
		} else {
			tasksArray[Number(task.dataset.index)].status = false;
		}

		render();
		localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
	}
}

// Изменение статуса задачи (Выполнена/не выполнена)
