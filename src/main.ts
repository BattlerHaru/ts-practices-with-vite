import './style.css'

import { name, age, isValid } from "./bases/01-types"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${isValid ? (name + age) : "?"}</h1>
`
