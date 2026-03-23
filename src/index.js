import "./styles.css"
import {Task, Project} from "./tasks.js"

const p1 = new Project("Foo", 1)
const t1 = new Task("Say Hi", "Greetings must be yours", "Tr", "High", "blah blah blah")
const t2 = new Task("Say Hi", "Greetings must be yours", "Tr", "High", "blah blah blah")

p1.appendToDos(t1)
p1.appendToDos(t2)

const addProjectBtn = document.querySelector('#addProject')
const projectConfirmBtn = document.querySelector('#projectConfirmBtn')
const projectDialog = document.querySelector('.projectDialog')
addProjectBtn.addEventListener('click', ()=>{
    projectDialog.showModal()
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

projectConfirmBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    projectDialog.close()
})


console.log(p1)