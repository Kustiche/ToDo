import { changeStatusTask } from './changeStatusTask.js';
import { recordCookie, useCookie } from './cookies.js';
import { addTaskArray } from './createTask.js';
import { deleteTask } from './deleteTask.js';
import {
	closeEditingTaskModal,
	editingTask,
	openEditingTaskModal,
} from './editingTask.js';
import { render } from './render.js';
import { changePriority, openFunctional } from './taskFunctional.js';
import {
	cookieBtn,
	cookieMessage,
	forms,
	innersTasks,
	modalBtnClose,
	modalForm,
} from './view.js';

const isLocalStorage = JSON.parse(localStorage.getItem('tasksArray')) !== null;
let permissionCollectCookies =
	JSON.parse(localStorage.getItem('permissionCollectCookies')) ?? false;

function loadingLocalData() {
	if (isLocalStorage) {
		render();
	}
}

function activationPermissionCookie() {
	cookieMessage.classList.add('cookies--hidden');

	permissionCollectCookies = true;
	localStorage.setItem(
		'permissionCollectCookies',
		JSON.stringify(permissionCollectCookies)
	);
}

function activationCollectCookie() {
	forms.forEach((item) => {
		item.addEventListener('input', (e) => {
			recordCookie(e);
		});
	});
}

if (permissionCollectCookies === true) {
	cookieMessage.classList.add('cookies--hidden');

	useCookie();
	activationCollectCookie();
}

loadingLocalData();

modalBtnClose.addEventListener('click', () => {
	closeEditingTaskModal();
});

cookieBtn.addEventListener('click', () => {
	activationPermissionCookie();
	activationCollectCookie();
});

forms.forEach((item) => {
	item.addEventListener('submit', (e) => {
		e.preventDefault();

		addTaskArray(e);
	});
});

innersTasks.forEach((inner) => {
	inner.addEventListener('click', (e) => {
		deleteTask(e);
		changeStatusTask(e);
		openEditingTaskModal(e);
		openFunctional(e);
		changePriority(e);
	});
});

modalForm.addEventListener('submit', (e) => {
	e.preventDefault();

	editingTask(e);
});
