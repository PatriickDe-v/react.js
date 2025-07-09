import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "José", "Maria", "Pedro"]);

  const [users] = useState([
    { id: 1, nome: "Matheus", age: 34 },
    { id: 2, nome: "Patrick", age: 28 },
    { id: 3, nome: "José", age: 42 },
  ]);
  return (
    <div>
      <ul>
        {list.map((user, id) => (
          <li key={id}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
