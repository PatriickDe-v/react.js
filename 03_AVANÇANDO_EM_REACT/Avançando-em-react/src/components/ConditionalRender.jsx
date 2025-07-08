import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)

    const [name, setName] = useState("Josue")
  return (
    <div>
        <h1>Isso</h1>
        {x && <p>Se x for true, sim!</p> }
        {!x && <p>Agora x é falso</p> }
        <h1>If ternário</h1>
        {name === "Patrick" ? (
            <div>
                <p>O nome é Patrick!</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("Patrick")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender