import { addTaskArray } from './createTask.js';
import { forms } from './view.js';

forms.forEach((item) => {
	item.addEventListener('submit', (e) => {
		e.preventDefault();

		addTaskArray(e);
	});
});
