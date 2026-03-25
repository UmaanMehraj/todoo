import "./styles.css"
import {Task, Project} from "./tasks.js"
import { appendProject, appendTask } from "./domFunctions.js"


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
    p1.toDos.push(new Task('hey', 'blah', '12-02-33', 'low', 'mehhh'))
   if(p1.name !== ''){
    appendProject(p1)
    appendTask(p1)
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


const p2 = new Project('foobar')
p2.appendToDos(new Task('hey', 'blah', '12-02-33', 'low', 'mehhh'))
p2.appendToDos(new Task('hey', 'blah', '12-02-33', 'low', 'mehhh'))
p2.appendToDos(new Task('hey', 'blah', '12-02-33', 'low', 'mehhh'))
p2.toDos.forEach((task)=>{
    console.log(task)
})



