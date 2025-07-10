import { useState } from "react";

const DeletUserList = () => {
  const [users, setUser] = useState([
    { id: 1, name: "Patrick", age: 28 },
    { id: 2, name: "João", age: 35 },
    { id: 3, name: "Luiz", age: 54 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUser((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar Usuário Aleatório</button>
    </div>
  );
};

export default DeletUserList;
