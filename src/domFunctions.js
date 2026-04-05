import viewImage from './img/view.png';
import deleteImage from './img/delete.png';
import editImage from './img/edit.png';
import { maintaskDiv } from './index.js';

export let projects = [];

export function appendProject(Project) {
  projects.push(Project);
  const content = document.querySelector('.content');
  const newDiv = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerText = Project.name;
  btn.dataset.id = Project.id;
  btn.setAttribute('class', 'project');

  newDiv.appendChild(btn);
  content.append(newDiv);
}

export function displayTask(Project) {
  maintaskDiv.innerText = '';
  Project.toDos.forEach((task) => {
    const taskDiv = document.querySelector('.tasks');
    const parentDiv = document.createElement('div');
    parentDiv.setAttribute('class', 'task');

    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'name');
    nameDiv.innerText = task.title;

    const btnDiv = document.createElement('div');
    btnDiv.setAttribute('class', 'btns');

    const viewBtn = document.createElement('button');
    viewBtn.setAttribute('id', 'viewBtn');
    const viewImg = document.createElement('img');
    viewImg.src = viewImage;
    viewBtn.append(viewImg);

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'deleteBtn');
    const dltImg = document.createElement('img');
    dltImg.src = deleteImage;
    deleteBtn.append(dltImg);

    const editBtn = document.createElement('button');
    editBtn.setAttribute('id', 'editBtn');
    const editImg = document.createElement('img');
    editImg.src = editImage;
    editBtn.append(editImg);

    btnDiv.append(viewBtn, deleteBtn, editBtn);

    const dialog = document.createElement('dialog');
    dialog.setAttribute('class', 'viewDialog');

    const container = document.createElement('div');
    container.setAttribute('class', 'viewContainer');

    const divOne = document.createElement('div');
    divOne.innerText = `Task Title: ${task.title}`;

    const divTwo = document.createElement('div');
    divTwo.innerText = `Due Date: ${task.dueDate}`;

    container.append(divOne, divTwo);

    dialog.append(container);

    parentDiv.append(nameDiv, btnDiv, dialog);

    taskDiv.append(parentDiv);
  });
}

export function expandTask(task) {
  const nameDivs = document.querySelectorAll('.name');
  nameDivs.forEach((nameDiv) => {
    if (nameDiv.innerText === task.title) {
      const dialog = document.querySelector('.task > dialog')
      dialog.showModal()
    }
  });
}
