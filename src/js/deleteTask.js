import { render } from './render.js';
import { tasksArray } from './tasksArray.js';

// Удаление задачи

export let newTasksArray =
	null ?? JSON.parse(localStorage.getItem('newTasksArray'));

export function deleteTask(e) {
	if (e.target.className === 'todo__btn-delete btn-reset') {
		const task = e.target.closest('.todo__task');
		let index = 0;

		if (newTasksArray !== null) {
			newTasksArray = newTasksArray.filter(
				(item) => item.index !== Number(task.dataset.index)
			);
		} else {
			newTasksArray = tasksArray.filter(
				(item) => item.index !== Number(task.dataset.index)
			);
		}

		newTasksArray.forEach((item) => {
			item.index = index;

			++index;
		});

		render();
		localStorage.setItem('newTasksArray', JSON.stringify(newTasksArray));
	}
}

// Удаление задачи

// Передача данных из исходного массива в новый

export function dataTransferNewTasksArray() {
	newTasksArray = tasksArray;
}

// Передача данных из исходного массива в новый
