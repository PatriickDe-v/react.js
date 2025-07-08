import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Padro", "Josias", "Maria"])

    const [users] = useState([
        {id: 1, name: "Patrick", age: 28},
        {id: 785488, name: "João", age: 45},
        {id:874587, name: "Pedro", age:18}
    ])

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
           {users.map((user) =>(
            <li key={user.id}>{user.name} - {user.age}</li>
           ))}
        </ul>
    </div>
  )
}

export default ListRender