export function appendProject(Project){
    const content = document.querySelector('.content')
    const newDiv = document.createElement('div')
    const btn = document.createElement('button')

    btn.innerText = Project.name

    newDiv.appendChild(btn)
    content.append(newDiv)
}

export function appendTask(Project){
    
}