import moment from 'moment';
import { render } from './render.js';
import { tasksArray } from './tasksArray.js';

let indexTask = 0;

// Закрытие модального окна для редактирования задач

export function closeEditingTaskModal() {
	window.modalTaskEditing.close();
}

// Закрытие модального окна для редактирования задач

// Открытие модального окна для редактирования задач

export function openEditingTaskModal(e) {
	const isTask =
		e.target.className === 'todo__task' ||
		e.target.className === 'todo__text' ||
		e.target.className === 'todo__task-left' ||
		e.target.className === 'todo__task-right' ||
		e.target.className === 'todo__task-time';

	if (isTask) {
		const task = e.target.closest('.todo__task');
		const taskText = task.querySelector('.todo__text');
		window.modalTaskEditing.showModal();

		const editingInput = document.querySelector('.modal__input-text');

		editingInput.value = taskText.textContent;
		indexTask = Number(task.dataset.index);
	}
}

// Открытие модального окна для редактирования задач

// Редактирование задачи

export function editingTask(e) {
	const input = e.target.querySelector('.modal__input-text');
	const time = moment().format('DD.MM.YY');

	tasksArray[indexTask].text = input.value;
	tasksArray[indexTask].time = time;

	render();

	window.modalTaskEditing.close();

	localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
}

// Редактирование задачи
