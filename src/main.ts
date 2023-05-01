import './style.css'

// import { name, age, isValid } from "./bases/01-types"
// import { studentC, students } from "./bases/02-objects"
// import { onePiece } from './bases/03-classes'
import { squirtle } from './bases/04-injections'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>${squirtle.name}</h1>
`
