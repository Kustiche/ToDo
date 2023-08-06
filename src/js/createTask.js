import moment from 'moment/moment.js';
import { render } from './render.js';
import { tasksArray } from './tasksArray.js';
import {
	innersTasks,
	sideBarInnerTasks,
	templateRemoteTask,
	templateTask,
} from './view.js';
import { objectCookies } from './cookies.js';

// Добавление задачи в массив

function Task(text, priority) {
	this.text = text;
	this.priority = priority;
	this.time = moment().format('DD.MM.YY');
	this.status = false;
}

export function addTaskArray(e) {
	const form = e.target;
	const inner = form.closest('.todo__priorities');
	const subtitle = inner.querySelector('.todo__subtitle');
	const input = form.querySelector('.form__input-text');
	const innerInput = form.querySelector('.form__inner-input');
	const isInputValue = input.value !== '';
	const isSubtitlePriority = subtitle.textContent === 'Высокий приоритет';

	if (isInputValue) {
		const newTask = new Task(input.value, subtitle.textContent);

		tasksArray.push(newTask);

		render();

		input.value = '';

		localStorage.setItem('tasksArray', JSON.stringify(tasksArray));

		input.classList.remove('input--padding-error');
		innerInput.classList.remove('inner-input--padding-error');
		form.classList.remove('form--padding-error');

		if (isSubtitlePriority) {
			document.cookie = `highPriorityTask=${
				objectCookies.highPriorityTask
			}; secure; expires=${new Date(0)}`;
		} else {
			document.cookie = `lowPriorityTask=${
				objectCookies.lowPriorityTask
			}; secure; expires=${new Date(0)}`;
		}
	} else {
		input.classList.add('input--padding-error');
		innerInput.classList.add('inner-input--padding-error');
		form.classList.add('form--padding-error');
	}
}

// Добавление задачи в массив

// Создание задачи

export function createTask(text, priority, time, index, status) {
	const item = templateTask.content.cloneNode(true);
	const task = item.querySelector('.todo__task');
	const taskText = item.querySelector('.todo__text');
	const taskTime = item.querySelector('.todo__task-time');
	const btnChangeStatus = item.querySelector('.todo__btn');

	innersTasks.forEach((inner) => {
		const innerPriority = inner.closest('.todo__priorities');
		const subtitle = innerPriority.querySelector('.todo__subtitle');
		const isPriority = subtitle.textContent === priority;

		if (isPriority) {
			const isStatus = status === true;

			task.dataset.index = index;
			taskText.textContent = text;
			taskTime.textContent = time;

			if (isStatus) {
				taskText.classList.add('todo__text--performed');
				btnChangeStatus.checked = true;
			} else {
				taskText.classList.remove('todo__text--performed');
				btnChangeStatus.checked = false;
			}

			inner.append(item);
		}
	});
}

// Создание задачи

// Создание удалённой задачи

export function createRemoteTask(text, time, index) {
	const item = templateRemoteTask.content.cloneNode(true);
	const task = item.querySelector('.sidebar__task');
	const taskText = item.querySelector('.sidebar__text');
	const taskTime = item.querySelector('.sidebar__time');

	task.dataset.index = index;
	taskText.textContent = text;
	taskTime.textContent = time;

	sideBarInnerTasks.append(item);
}

// Создание удалённой задачи
