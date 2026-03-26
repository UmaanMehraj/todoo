import "./styles.css"
import {Task, Project} from "./tasks.js"
import { appendProject, displayTask } from "./domFunctions.js"


const addProjectBtn = document.querySelector('#addProject')
const projectConfirmBtn = document.querySelector('#projectConfirmBtn')
const projectDialog = document.querySelector('.projectDialog')
const projectName = document.querySelector('#name')
addProjectBtn.addEventListener('click', ()=>{
    projectDialog.showModal()
})
projectConfirmBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    projectDialog.close()
})

projectDialog.addEventListener('close', ()=>{
    const p1 = new Project(projectName.value)
   if(p1.name !== ''){
    appendProject(p1)
   }

})

const addTaskBtn = document.querySelector('#addTask')
const taskDialog = document.querySelector('.taskDialog')
const taskConfirmBtn = document.querySelector('#taskConfirmBtn')

const tasktTitle = document.querySelector('#title')
const taskDesc = document.querySelector('#description')
const taskDate = document.querySelector('#date')
const taskNotes = document.querySelector('#notes')
const taskPriority = document.querySelector('#priority')


addTaskBtn.addEventListener('click', ()=>{
    taskDialog.showModal()
})
taskDialog.addEventListener('close', ()=>{
    const task = new Task(tasktTitle.value, taskDesc.value, taskDate.value, taskPriority.value, taskNotes.value)
    if(task){
        displayTask(task)
    }
})
taskConfirmBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    taskDialog.close()
})


const projectBtns = document.querySelectorAll('.project')
console.log(projectBtns)



