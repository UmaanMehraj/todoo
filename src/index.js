import './styles.css';
import { Task, Project } from './tasks.js';
import { projects, appendProject, displayTask, expandTask } from './domFunctions.js';

export const maintaskDiv = document.querySelector('.tasks');



// Default Project and Task
const foo = new Project('foo');
appendProject(foo);
appendProjectList(foo);
const baz = new Task('baz', 'ggs', '12-03-27', 'high', 'ggggs', projects[0]);
foo.toDos.push(baz);

displayTask(foo)

let viewBtns = document.querySelectorAll('#viewBtn')


function appendProjectList(project) {
  const selectProject = document.querySelector('#selectProject');
  const option = document.createElement('option');
  option.value = project.name;
  option.innerText = project.name;

  selectProject.append(option);
}

const addProjectBtn = document.querySelector('#addProject');
const projectConfirmBtn = document.querySelector('#projectConfirmBtn');
const projectDialog = document.querySelector('.projectDialog');
const projectName = document.querySelector('#name');

let projectBtns = document.querySelectorAll('.project');

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
  }
  appendProjectList(project);
  projectBtns = document.querySelectorAll('.project');

  projectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      projects.forEach((project) => {
        if (btn.dataset.id === project.id) {
          displayTask(project);
        }
      });
    });
  });
});

const addTaskBtn = document.querySelector('#addTask');
const taskDialog = document.querySelector('.taskDialog');
const taskConfirmBtn = document.querySelector('#taskConfirmBtn');

const tasktTitle = document.querySelector('#title');
const taskDesc = document.querySelector('#description');
const taskDate = document.querySelector('#date');
const taskNotes = document.querySelector('#notes');
const taskPriority = document.querySelector('#priority');
const taskProject = document.querySelector('#selectProject');

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
    taskProject.value,
  );

  projects.forEach((prj) => {
    if (prj.name === task.project) {
      prj.appendToDos(task);
      displayTask(prj)
    }
  });

  viewBtns = document.querySelectorAll('#viewBtn')


  viewBtns.forEach((btn)=>{
    console.log(btn)
  btn.addEventListener('click', ()=>{
  projects.forEach((project)=>{
    project.toDos.forEach((toDo)=>{
      expandTask(toDo)
    })
  })
  })
})


});
taskConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  taskDialog.close();
});

projectBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    projects.forEach((project) => {
      if (btn.dataset.id === project.id) {
        displayTask(project);
      }
    });
  });
});

viewBtns.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
  projects.forEach((project)=>{
    project.toDos.forEach((toDo)=>{
      expandTask(toDo)
    })
  })
  })
})



