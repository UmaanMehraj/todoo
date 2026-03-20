import "./styles.css"
import {Task, Project} from "./tasks.js"

const p1 = new Project("Foo", 1)
const t1 = new Task("Say Hi", "Greetings must be yours", "Tr", "High", "blah blah blah")
const t2 = new Task("Say Hi", "Greetings must be yours", "Tr", "High", "blah blah blah")

p1.appendToDos(t1)
p1.appendToDos(t2)

console.log(p1)