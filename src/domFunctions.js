import viewImage from "./img/view.png"
import deleteImage from "./img/delete.png"
import editImage from "./img/edit.png"

export let projects = []

export function appendProject(Project) {
    projects.push(Project)
    const content = document.querySelector('.content')
    const newDiv = document.createElement('div')
    const btn = document.createElement('button')

    btn.innerText = Project.name
    btn.dataset.id = Project.id
    btn.setAttribute('class', 'project')

    newDiv.appendChild(btn)
    content.append(newDiv)
}

export function displayTask(task) {
    const taskDiv = document.querySelector('.tasks')
        const parentDiv = document.createElement('div')

        const nameDiv = document.createElement('div')
        nameDiv.setAttribute('class', 'name')
        nameDiv.innerText = task.title

        const btnDiv = document.createElement('div')
        btnDiv.setAttribute('class', 'btns')

        const viewBtn = document.createElement('button')
        const viewImg = document.createElement('img')
        viewImg.src = viewImage
        viewBtn.append(viewImg)

        const delteBtn = document.createElement('button')
        const dltImg = document.createElement('img')
        dltImg.src = deleteImage
        delteBtn.append(dltImg)

        const editBtn = document.createElement('button')
        const editImg = document.createElement('img')
        editImg.src = editImage
        editBtn.append(editImg)


        btnDiv.append(viewBtn, delteBtn, editBtn)

        parentDiv.append(nameDiv, btnDiv)

        taskDiv.append(parentDiv)


}

