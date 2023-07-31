import { addTaskArray } from './createTask.js';
import { deleteTask } from './deleteTask.js';
import { forms, innersTasks } from './view.js';

forms.forEach((item) => {
	item.addEventListener('submit', (e) => {
		e.preventDefault();

		addTaskArray(e);
	});
});

innersTasks.forEach((inner) => {
	inner.addEventListener('click', (e) => {
		deleteTask(e);
	});
});
