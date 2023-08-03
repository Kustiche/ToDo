import moment from 'moment/moment.js';
import { render } from './render.js';
import { tasksArray } from './tasksArray.js';
import { innersTasks, templateTask } from './view.js';
import { newTasksArray } from './deleteTask.js';

// Добавление задачи в массив

let index = JSON.parse(localStorage.getItem('index')) ?? 0;

function Task(text, priority, index) {
	this.text = text;
	this.priority = priority;
	this.time = moment().format('DD.MM.YY');
	this.index = index;
	this.status = false;
}

export function addTaskArray(e) {
	const form = e.target;
	const inner = form.closest('.todo__priorities');
	const subtitle = inner.querySelector('.todo__subtitle');
	const input = form.querySelector('.form__input-text');
	const innerInput = form.querySelector('.form__inner-input');

	if (input.value !== '') {
		if (newTasksArray !== null) {
			index = newTasksArray.length;
		}

		const newTask = new Task(input.value, subtitle.textContent, index);

		if (newTasksArray !== null) {
			tasksArray.push(newTask);
			newTasksArray.push(newTask);

			localStorage.setItem('newTasksArray', JSON.stringify(newTasksArray));
		} else {
			tasksArray.push(newTask);
			++index;
		}

		render();
		localStorage.setItem('index', JSON.stringify(index));
		localStorage.setItem('tasksArray', JSON.stringify(tasksArray));

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

export function createTask(text, priority, time, index, status) {
	const item = templateTask.content.cloneNode(true);
	const task = item.querySelector('.todo__task');
	const taskText = item.querySelector('.todo__text');
	const taskTime = item.querySelector('.todo__task-time');
	const btnChangeStatus = item.querySelector('.todo__btn');

	innersTasks.forEach((inner) => {
		const innerPriority = inner.closest('.todo__priorities');
		const subtitle = innerPriority.querySelector('.todo__subtitle');

		if (subtitle.textContent === priority) {
			task.dataset.index = index;
			taskText.textContent = text;
			taskTime.textContent = time;

			if (status === true) {
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
