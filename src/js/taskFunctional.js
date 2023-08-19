import { render } from './render.js';
import { tasksArray } from './tasksArray.js';

/* Открытие функционала */

export function openFunctional(e) {
	const isBtnFunctional =
		e.target.className === 'todo__inner-functional' ||
		e.target.className === 'todo__btn-functional btn-reset';

	if (isBtnFunctional) {
		const innerFunctional = e.target.closest('.todo__inner-functional');
		const functional = innerFunctional.querySelector('.todo__functional');
		const isFunctional = functional.style.display !== 'flex';

		if (isFunctional) {
			functional.style.display = 'flex';
		} else {
			functional.style.display = null;
		}
	}
}

/* Открытие функционала */

/* Смена приоритета задачи */

export function changePriority(e) {
	const task = e.target.closest('.todo__task');
	const btnsPriorities = task.querySelectorAll('.todo__btn-prority');

	btnsPriorities.forEach((item) => {
		if (e.target === item) {
			tasksArray[Number(task.dataset.index)].priority = item.textContent.trim();

			render();
			localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
		}
	});
}

/* Смена приоритета задачи */
