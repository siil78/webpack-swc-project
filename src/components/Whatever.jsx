import {useState} from 'react'

function Whatever() {
  const [state, setState] = useState("Initial state")
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>setState("Button clicked")}>setState</button>
    </div>
  )
}

export default Whatever
