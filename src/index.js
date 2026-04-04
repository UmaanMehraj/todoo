import './styles.css';
import { Task, Project } from './tasks.js';
import { projects, appendProject, displayTask, appendTask } from './domFunctions.js';


// Default Project
const foo = new Project('foo')
appendProject(foo)
appendProjectList(foo)
const baz = new Task('baz', 'ggs', 'gg', 'high', 'ggggs', projects[0])
foo.toDos.push(baz)



function appendProjectList(project){
  const selectProject = document.querySelector('#selectProject')
    const option = document.createElement('option')
    option.value = project.name
    option.innerText = project.name

    selectProject.append(option)
  
}



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
  }
   appendProjectList(project)
});

const addTaskBtn = document.querySelector('#addTask');
const taskDialog = document.querySelector('.taskDialog');
const taskConfirmBtn = document.querySelector('#taskConfirmBtn');

const tasktTitle = document.querySelector('#title');
const taskDesc = document.querySelector('#description');
const taskDate = document.querySelector('#date');
const taskNotes = document.querySelector('#notes');
const taskPriority = document.querySelector('#priority');
const taskProject = document.querySelector('#selectProject')

const projectBtns = document.querySelectorAll('.project')

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
      taskProject.value
    );   

    projects.forEach((prj)=>{
      if(prj.name === task.project){
        prj.appendToDos(task)
      }
    })
 
});
taskConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  taskDialog.close();
});


projectBtns.forEach((btn)=>{
  btn.addEventListener('click', ()=>{
    projects.forEach((project)=>{
      if(btn.dataset.id === project.id){
        displayTask(project)
      }
    })
  })
})

export const maintaskDiv = document.querySelector('.tasks')






