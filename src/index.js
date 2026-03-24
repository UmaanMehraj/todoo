import "./styles.css"
import {Task, Project} from "./tasks.js"
import { appendProject } from "./domFunctions.js"


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
addTaskBtn.addEventListener('click', ()=>{
    taskDialog.showModal()
})
taskConfirmBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    taskDialog.close()
})




