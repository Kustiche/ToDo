import moment from 'moment';
import { dataTransferNewTasksArray, newTasksArray } from './deleteTask.js';
import { render } from './render.js';
import { tasksArray } from './tasksArray.js';

let indexTask = 0;

export function closeEditingTaskModal() {
	window.modalTaskEditing.close();
}

export function openEditingTaskModal(e) {
	const isTask =
		e.target.className !== 'todo__btn btn-reset' &&
		e.target.className !== 'todo__btn-delete btn-reset';

	if (isTask) {
		const task = e.target.closest('.todo__task');
		const taskText = task.querySelector('.todo__text');
		window.modalTaskEditing.showModal();

		const editingInput = document.querySelector('.modal__input-text');

		editingInput.value = taskText.textContent;
		indexTask = Number(task.dataset.index);
	}
}

export function editingTask(e) {
	const input = e.target.querySelector('.modal__input-text');
	const time = moment().format('DD.MM.YY');

	if (newTasksArray === null) {
		dataTransferNewTasksArray();
	}

	newTasksArray[indexTask].text = input.value;
	newTasksArray[indexTask].time = time;

	render();
	window.modalTaskEditing.close();
	localStorage.setItem('newTasksArray', JSON.stringify(newTasksArray));
}
