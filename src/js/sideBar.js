import { render, renderRemoteTasks } from './render.js';
import { tasksArray } from './tasksArray.js';
import { sideBar } from './view.js';

export const remoteTasksArray =
	JSON.parse(localStorage.getItem('remoteTasksArray')) ?? [];

// Открытие боковой панели

export function openSideBar() {
	const isOpenSideBar = sideBar.style.right !== '0px';

	if (isOpenSideBar) {
		sideBar.style.right = '0';
	} else {
		sideBar.style.right = '-21%';
	}
}

// Открытие боковой панели

// Возвращение удалённой задачи

export function returningDeletedTask(e) {
	const remoteTask = e.target.closest('.sidebar__task');

	if (e.target.className !== 'sidebar__inner-tasks') {
		const btnBack = remoteTask.querySelector('.sidebar__btn-return');
		const isBtnBack = e.target === btnBack;

		if (isBtnBack) {
			tasksArray.push(remoteTasksArray[Number(remoteTask.dataset.index)]);
			remoteTasksArray.splice(Number(remoteTask.dataset.index), 1);

			render();
			renderRemoteTasks();

			localStorage.setItem(
				'remoteTasksArray',
				JSON.stringify(remoteTasksArray)
			);
			localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
		}
	}
}

// Возвращение удалённой задачи
