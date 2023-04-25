import './style.css'

// import { name, age, isValid } from "./bases/01-types"
// import { studentC, students } from "./bases/02-objects"
import { onePiece } from './bases/03-classes'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>${onePiece.name} - ${onePiece.episodes}</h1>
`
