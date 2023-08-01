import { addTaskArray } from './createTask.js';
import { deleteTask } from './deleteTask.js';
import { render } from './render.js';
import { forms, innersTasks } from './view.js';

const isLocalStorage = JSON.parse(localStorage.getItem('tasksArray')) !== null;

function localRender() {
	if (isLocalStorage) {
		render();
	}
}

localRender();

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
