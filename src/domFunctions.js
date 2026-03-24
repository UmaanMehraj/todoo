import viewImage from "./img/view.png"
import deleteImage from "./img/delete.png"
import editImage from "./img/delete.png"


export function appendProject(Project) {
    const content = document.querySelector('.content')
    const newDiv = document.createElement('div')
    const btn = document.createElement('button')

    btn.innerText = Project.name

    newDiv.appendChild(btn)
    content.append(newDiv)
}

export function displayTask(Project) {
    Project.todos.array.forEach(task => {
        const parentDiv = document.createElement('div')

        const nameDiv = document.createElement('div')
        nameDiv.setAttribute('class', 'name')
        nameDiv.innerText = task.name

        const btnDiv = document.createElement('div')
        btnDiv.setAttribute('class', 'btns')

        const viewBtn = document.createElement('button')
        const viewImg = document.createElement('img')
        viewImg.src = viewImage
        viewBtn.append(viewImg)

        btnDiv.append(viewBtn)

        

    });
}