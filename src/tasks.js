export class Project {
    constructor(name) {
        this.name = name
        this.id = self.crypto.randomUUID()
        this.toDos = []
    }

    appendToDos(task) {
        this.toDos.push(task)
    }
    displayTasks() {
    this.toDos.forEach((task)=>{
        const taskDiv = document.querySelector('.tasks')
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
    })

    }
}



export class Task {
    status = false
    constructor(title, description, dueDate, priority, notes) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
    }

    changePriority(newPriority) {
        this.priority = newPriority
    }
    markAsComplete() {
        this.status = true
    }
}

