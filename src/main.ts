import './style.css'

// import { name, age, isValid } from "./bases/01-types"
import { studentC, students } from "./bases/02-objects"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${studentC ? studentC.name : students.join(",")}</h1>
`
