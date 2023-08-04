import { inputs } from './view.js';

export let objectCookies = {};
let i = 0;
const arrayAllCookies = document.cookie.split('; ');

export function recordCookie(e) {
	const input = e.target;
	const innerForm = input.closest('.todo__priorities');
	const prioritet = innerForm.querySelector('.todo__subtitle');
	const date = new Date();
	date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

	if (prioritet.textContent === 'Высокий приоритет') {
		document.cookie =
			`highPriorityTask=${input.value}; secure; expires=` + date.toUTCString();
	} else {
		document.cookie =
			`lowPriorityTask=${input.value}; secure; expires=` + date.toUTCString();
	}
}

export function getCookies() {
	const objectElement = arrayAllCookies[i].split('=');
	objectCookies[objectElement[0]] = objectElement[1];
	i++;
	if (i < arrayAllCookies.length) {
		getCookies();
	}
}

export function useCookie() {
	getCookies();

	inputs.forEach((item) => {
		const innerPrioritet = item.closest('.todo__priorities');
		const prioritet = innerPrioritet.querySelector('.todo__subtitle');

		if (
			prioritet.textContent === 'Высокий приоритет' &&
			objectCookies.highPriorityTask !== undefined
		) {
			item.value = objectCookies.highPriorityTask;
		} else if (
			prioritet.textContent === 'Низкий приоритет' &&
			objectCookies.lowPriorityTask !== undefined
		) {
			item.value = objectCookies.lowPriorityTask;
		}
	});
}
