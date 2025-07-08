import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)
  return (
    <div>
        <h1>Isso</h1>
        {x && <p>Se x for true, sim!</p> }
        {!x && <p>Agora x é falso</p> }
    </div>
  )
}

export default ConditionalRender