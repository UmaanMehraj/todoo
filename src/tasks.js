export class Project {
  constructor(name) {
    this.name = name;
    this.id = self.crypto.randomUUID();
    this.toDos = [];
  }

  appendToDos(task) {
    this.toDos.push(task);
  }
}

export class Task {
  status = false;
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }
  markAsComplete() {
    this.status = true;
  }
}
