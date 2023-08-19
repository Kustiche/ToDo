import { inputs } from './view.js';

export let objectCookies = {};
let i = 0;
const arrayAllCookies = document.cookie.split('; ');

export function getCookies() {
	const objectElement = arrayAllCookies[i].split('=');
	objectCookies[objectElement[0]] = objectElement[1];
	i++;
	if (i < arrayAllCookies.length) {
		getCookies();
	}
}

/* Запись куки */

export function recordCookie(e) {
	const input = e.target;
	const innerForm = input.closest('.todo__priorities');
	const priority = innerForm.querySelector('.todo__subtitle');
	const isPriority = priority.textContent === 'Высокий приоритет';
	const date = new Date();
	date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

	if (isPriority) {
		document.cookie =
			`highPriorityTask=${input.value}; secure; expires=` + date.toUTCString();
	} else {
		document.cookie =
			`lowPriorityTask=${input.value}; secure; expires=` + date.toUTCString();
	}
}

/* Запись куки */

/* Использование куки */

export function useCookie() {
	getCookies();

	inputs.forEach((item) => {
		const innerPriority = item.closest('.todo__priorities');
		const priority = innerPriority.querySelector('.todo__subtitle');
		const isHighPriority =
			priority.textContent === 'Высокий приоритет' &&
			objectCookies.highPriorityTask !== undefined;
		const isLowPriority =
			priority.textContent === 'Низкий приоритет' &&
			objectCookies.lowPriorityTask !== undefined;

		if (isHighPriority) {
			item.value = objectCookies.highPriorityTask;
		} else if (isLowPriority) {
			item.value = objectCookies.lowPriorityTask;
		}
	});
}

/* Использование куки */
