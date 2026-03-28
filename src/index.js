import './styles.css';
import { Task, Project } from './tasks.js';
import { projects, appendProject, displayTask } from './domFunctions.js';

const addProjectBtn = document.querySelector('#addProject');
const projectConfirmBtn = document.querySelector('#projectConfirmBtn');
const projectDialog = document.querySelector('.projectDialog');
const projectName = document.querySelector('#name');
addProjectBtn.addEventListener('click', () => {
  projectDialog.showModal();
});
projectConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  projectDialog.close();
});

projectDialog.addEventListener('close', () => {
  const project = new Project(projectName.value);
  if (project.name !== '') {
    appendProject(project);
    console.log(projects);
    return project;
  }
});

const addTaskBtn = document.querySelector('#addTask');
const taskDialog = document.querySelector('.taskDialog');
const taskConfirmBtn = document.querySelector('#taskConfirmBtn');

const tasktTitle = document.querySelector('#title');
const taskDesc = document.querySelector('#description');
const taskDate = document.querySelector('#date');
const taskNotes = document.querySelector('#notes');
const taskPriority = document.querySelector('#priority');

addTaskBtn.addEventListener('click', () => {
  taskDialog.showModal();
});
taskDialog.addEventListener('close', () => {
    const task = new Task(
      tasktTitle.value,
      taskDesc.value,
      taskDate.value,
      taskPriority.value,
      taskNotes.value,
    );
});
taskConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  taskDialog.close();
});
