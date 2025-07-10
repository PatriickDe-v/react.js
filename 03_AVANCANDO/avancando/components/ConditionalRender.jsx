import { useState } from "react";
const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se X for true sim!</p>}
      {!x && <p>Agora X é falso!</p>}
      <h1>If ternário</h1>
      {name === "Patrick" ? (
        <div>
          <p>O nome é Patrick</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Patrick")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;
