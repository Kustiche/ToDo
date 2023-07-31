import moment from 'moment/moment.js';
import { render } from './render.js';
import { tasks } from './tasksArray.js';
import { innersTasks, templateTask } from './view.js';
import { newTasksArray } from './deleteTask.js';

// Добавление задачи в массив

let index = 0;

function Task(text, priority, index) {
	this.text = text;
	this.priority = priority;
	this.time = moment().format('DD.MM.YY');
	this.index = index;
}

export function addTaskArray(e) {
	const form = e.target;
	const inner = form.closest('.todo__priorities');
	const subtitle = inner.querySelector('.todo__subtitle');
	const input = form.querySelector('.form__input-text');
	const innerInput = form.querySelector('.form__inner-input');

	if (input.value !== '') {
		const newTask = new Task(input.value, subtitle.textContent, index);

		++index;

		if (newTasksArray !== undefined) {
			tasks.push(newTask);
			newTasksArray.push(newTask);
		} else {
			tasks.push(newTask);
		}

		render();

		input.classList.remove('form__input-text--padding-error');
		innerInput.classList.remove('form__inner-input--padding-error');
		form.classList.remove('form--padding-error');
	} else {
		input.classList.add('form__input-text--padding-error');
		innerInput.classList.add('form__inner-input--padding-error');
		form.classList.add('form--padding-error');
	}
}

// Добавление задачи в массив

// Создание задачи

export function createTask(text, priority, time, index) {
	const item = templateTask.content.cloneNode(true);
	const task = item.querySelector('.todo__task');
	const taskText = item.querySelector('.todo__text');
	const taskTime = item.querySelector('.todo__task-time');

	innersTasks.forEach((inner) => {
		const innerPriority = inner.closest('.todo__priorities');
		const subtitle = innerPriority.querySelector('.todo__subtitle');

		if (subtitle.textContent === priority) {
			task.dataset.index = index;
			taskText.textContent = text;
			taskTime.textContent = time;

			inner.append(item);
		}
	});
}

// Создание задачи